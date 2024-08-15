// app/dashboard/profile/page.tsx
"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TopUpModal } from "@/components/root/TopUpModal";

interface Transaction {
  id: string;
  type: string;
  amount: number;
  description: string;
  date: string;
}

interface Balance {
  amount: number;
}

interface Profile {
  balance: Balance;
  transactions: Transaction[];
}

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      fetch(`/api/profile/${session.user.id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((data) => setProfile(data))
        .catch((error) => console.error("Failed to fetch profile:", error));
    } else if (status === "unauthenticated") {
      router.push("/auth/signIn");
    }
  }, [status, session, router]);

  if (status === "loading") return <div>Loading...</div>;

  if (!profile) return <div>No profile data available</div>;

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = profile.transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );
  const totalPages = Math.ceil(
    profile.transactions.length / transactionsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Format currency in Indonesian Rupiah
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="container">
      {/* Main content */}
      <main className="flex-1 flex">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-5">Profile</h2>
          <p className="mb-4 text-lg">
            Saldo: {formatCurrency(profile.balance.amount)}
          </p>
          <TopUpModal />
          <h3 className="text-xl mt-6 mb-4">Riwayat Transaksi</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Type</th>
                  <th className="px-4 py-2 border">Amount</th>
                  <th className="px-4 py-2 border">Description</th>
                </tr>
              </thead>
              <tbody>
                {currentTransactions.map((tx) => (
                  <tr key={tx.id} className="text-center">
                    <td className="px-4 py-2 border">
                      {new Date(tx.date).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 border">{tx.type}</td>
                    <td className="px-4 py-2 border">
                      {formatCurrency(tx.amount)}
                    </td>
                    <td className="px-4 py-2 border">{tx.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination controls */}
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${
                currentPage === 1
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-blue-500 text-white"
              }`}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded ${
                currentPage === totalPages
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-blue-500 text-white"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </main>

      {/* Footer spacing */}
      <footer className="mt-4">
        {/* Add any footer content here if necessary */}
      </footer>
    </div>
  );
}

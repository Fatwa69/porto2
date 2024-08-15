// app/dashboard/page.tsx
"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <div>Loading...</div>;

  return (
    <div className=" container py-6">
      <h2 className="text-2xl font-semibold mb-4">Profil Akun</h2>
      <div className="bg-white p-6 rounded shadow-md mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-5">{session?.user?.email}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

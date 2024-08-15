"use client";
import { CiWallet, CiShoppingCart, CiUser } from "react-icons/ci";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { TopUpModal } from "./TopUpModal";
import Link from "next/link";
import { motion } from "framer-motion";
import CartModal from "./CartModal";

interface Balance {
  amount: number;
}

interface Profile {
  balance: Balance;
}

const NavIcons = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [redirected, setRedirected] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  const cartRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const walletRef = useRef<HTMLDivElement>(null);

  const handleWalletClick = () => {
    if (!session) {
      if (!redirected) {
        router.push("/auth/signIn");
        setRedirected(true);
      }
    } else {
      setWalletOpen((prev) => !prev);
    }
  };

  const handleUserClick = () => {
    if (!session) {
      if (!redirected) {
        router.push("/auth/signIn");
        setRedirected(true);
      }
    } else {
      setUserOpen((prev) => !prev);
    }
  };

  const handleLogout = () => {
    setLoggingOut(true);
    signOut({ redirect: true, callbackUrl: "/" }).catch(() => {
      //handle error if logout fails
      setLoggingOut(false);
    });
  };

  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      fetch(`/api/profile/${session.user.id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((data) => setProfile(data))
        .catch((error) => console.error("Failed to fetch profile:", error));
    }
  }, [status, session, router]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setCartOpen(false);
      }
      if (userRef.current && !userRef.current.contains(event.target as Node)) {
        setUserOpen(false);
      }
      if (
        walletRef.current &&
        !walletRef.current.contains(event.target as Node)
      ) {
        setWalletOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (status === "authenticated") {
      setRedirected(false);
    }
  }, [status]);

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
    <div className="flex items-center xl:gap-2 relative">
      <div
        ref={walletRef}
        className="relative p-2 rounded-full hover:bg-gray-300 cursor-pointer"
      >
        <CiWallet size={24} onClick={handleWalletClick} />
        {walletOpen && profile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-md p-4"
          >
            <h2 className="font-semibold mb-1">Balance: </h2>
            {formatCurrency(profile.balance.amount)}
            <div className="mt-2">
              <TopUpModal />
            </div>
          </motion.div>
        )}
      </div>
      <div
        ref={cartRef}
        className="relative p-2 rounded-full hover:bg-gray-300 cursor-pointer"
      >
        <CiShoppingCart
          size={24}
          onClick={() => setCartOpen((prev) => !prev)}
        />
        <div className="absolute top-0 right-0 w-5 h-5 bg-[#F35c7b] rounded-full text-white text-xs flex items-center justify-center transform translate-x-1/3 -translate-y-1/3">
          2
        </div>
        {cartOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 right-0  w-48 bg-white shadow-lg rounded-md"
          >
            <CartModal />
          </motion.div>
        )}
      </div>
      <div
        ref={userRef}
        className="relative p-2 rounded-full hover:bg-gray-300 cursor-pointer"
      >
        <CiUser size={24} onClick={handleUserClick} />
        {userOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-lg bg-white"
          >
            <Link href={"/dashboard"}>Profile</Link>
            <div
              className="mt-2 cursor-pointer text-red-600"
              onClick={handleLogout}
            >
              Logout
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavIcons;

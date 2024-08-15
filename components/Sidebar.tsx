import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:flex">
      <div className="lg:w-64 bg-gray-800 text-white p-5 lg:fixed lg:h-full">
        <div className="flex justify-between lg:block">
          <h2 className="text-2xl font-semibold mb-8">Dashboard</h2>
          <button
            className="lg:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <nav className={`${isOpen ? "block" : "hidden"} lg:block`}>
          <ul>
            <li className="mb-4">
              <Link href="/dashboard" className="hover:text-gray-300">
                Profil Akun
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/dashboard/wallet"
                className="hover:text-gray-300"
              >
                E-Wallet
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Content Area */}
      
    </div>
  );
};

export default Sidebar;

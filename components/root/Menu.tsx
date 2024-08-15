"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import MainLogo from "./MainLogo";

const Menu = () => {
  const [open, setOpen] = useState(false);

  // Close menu when clicking outside
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.currentTarget === e.target) {
      setOpen(false);
    }
  };

  // Close menu when resizing to larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-center relative">
      {/* Container for the Logo and Hamburger Menu */}
      <div className="flex items-center">
        <GiHamburgerMenu
          width={28}
          height={28}
          className="cursor-pointer mr-4 md:hidden" // Adjust margin-right here
          onClick={() => setOpen((prev) => !prev)}
        />
        <MainLogo /> {/* Adjust margin-right here */}
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={handleOutsideClick}
        >
          <div className="absolute bg-white text-black left-0 top-20 w-1/2 h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-6 text-xl z-20">
            <button
              className="absolute top-2 right-2 text-2xl"
              onClick={() => setOpen(false)}
            >
              <AiOutlineClose />
            </button>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block mb-4"
            >
              {" "}
              {/* Adjust margin-bottom here */}
              About
            </Link>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block mb-4"
            >
              {" "}
              {/* Adjust margin-bottom here */}
              Products
            </Link>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block mb-4"
            >
              {" "}
              {/* Adjust margin-bottom here */}
              Deals
            </Link>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block mb-4"
            >
              {" "}
              {/* Adjust margin-bottom here */}
              Media
            </Link>
          </div>
        </div>
      )}

      {/* Links for larger screens */}
      <div className="hidden md:flex md:space-x-6 ml-auto">
        {" "}
        {/* Adjust space-x here */}
        <Link href="/about" className="uppercase">
          About
        </Link>
        <Link href="/products" className="uppercase">
          Products
        </Link>
        <Link href="/deals" className="uppercase">
          Deals
        </Link>
        <Link href="/media" className="uppercase">
          Media
        </Link>
      </div>
    </div>
  );
};

export default Menu;

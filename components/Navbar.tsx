"use client";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  { path: "/about", name: "home" },
  { path: "/about/company", name: "about us" },
  { path: "/about/testimonial", name: "testimonial" },
  { path: "/about/contact-us", name: "contact us" },
];

interface NavbarProps {
  containerStyles: string;
  linkStyles?: string;
  underlineStyles?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}) => {
  const path = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className={containerStyles}>
      {links.map((link, index) => {
        const isActive = link.path === path || hoveredIndex === index;
        return (
          <Link
            href={link.path}
            key={index}
            className={`relative uppercase ${linkStyles}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {link.name}
            <AnimatePresence>
              {isActive && (
                <motion.span
                  layoutId="underline"
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  className={`${underlineStyles} absolute bottom-0 left-0 right-0`}
                />
              )}
            </AnimatePresence>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;

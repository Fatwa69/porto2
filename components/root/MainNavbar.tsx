"use client";
import React from "react";
import Search from "@/components/SearchBar";
import NavIcons from "./NavIcons";
import Menu from "./Menu";

const Header: React.FC = () => {
  return (
    <header className="py-4 bg-white sticky top-0 z-30 transition-all">
      <div className="container mx-auto flex justify-between items-center">
        <Menu />
        <div className="flex items-center space-x-4">
          <Search />
          <NavIcons />
        </div>
      </div>
    </header>
  );
};

export default Header;

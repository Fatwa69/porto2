"use client";

import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { useState, useRef, useEffect } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  const toggleSearchBar = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300); // Match the duration of the animation
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isExpanded &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <form
      className={`flex items-center gap-4 bg-gray-100 p-2 rounded-md transition-all duration-300 ease-in-out ${
        isExpanded ? "flex-1" : "w-auto"
      }`}
      onSubmit={handleSearch}
      style={{
        width: isExpanded ? "100%" : "auto",
        transition: "width 0.3s ease-in-out",
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Cari Produk.."
        className={`bg-transparent outline-none transition-all duration-300 ease-in-out ${
          isExpanded ? "flex-1" : "opacity-0 w-0"
        } sm:opacity-100 sm:w-auto`} // Placeholder remains visible on larger screens
        ref={inputRef}
        style={{
          width: isExpanded ? "100%" : "0",
          opacity: isExpanded ? 1 : 0,
          transition: "width 0.3s ease-in-out, opacity 0.3s ease-in-out",
        }}
      />
      <button
        type="button"
        className="cursor-pointer"
        onClick={toggleSearchBar}
      >
        <CiSearch size={22}/>
      </button>
    </form>
  );
};

export default SearchBar;

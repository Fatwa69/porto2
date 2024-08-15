import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories: React.FC = () => {
  const categories = [
    { name: "Bodycare", icon: "/icons/skin-care.png" },
    { name: "Beauty", icon: "/icons/cosmetics.png" },
    { name: "Lotion", icon: "/icons/hand-cream.png" },
    { name: "Cosmetic", icon: "/icons/eyebrow.png" },
    // Add more categories here
  ];

  return (
    <div>
      <section className="categories grid grid-cols-4 gap-4 p-4 justify-center items-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-item text-center border border-gray-300 p-4 rounded-md hover:border-gray-500 hover:shadow-lg transition-all"
          >
            <Link href={"/"}>
            
            <Image
              src={category.icon}
              alt={category.name}
              width={32}
              height={32}
              className="w-8 h-8 mx-auto mb-2 items-center"
              />
            <p className="text-sm">{category.name}</p>
              </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Categories;

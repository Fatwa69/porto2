import Link from "next/link";
import { FC } from "react";
import ProductList from "@/components/root/ProductList";
import Slider from "@/components/root/Slider";
import Category from "@/components/root/Categories";
export default function Home() {
  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-0 lg:px-16 xl:px-32 2xl:px-64 ">
        <h1 className="text-2xl mb-4 font-semibold">Highlight Produk</h1>
        <ProductList />
      </div>
      <div className="mt-24 px-4 md:px-0 lg:px-16 xl:px-32 2xl:px-64 ">
        <h1 className="text-2xl mb-4 font-semibold">
          Kategori
        </h1>
        <Category />
      </div>
      <div className="mt-24 px-4 md:px-0 lg:px-16 xl:px-32 2xl:px-64 ">
        <h1 className="text-2xl mb-4 font-semibold">Produk Terbaru</h1>
        <ProductList />
      </div>
    </div>
  );
}

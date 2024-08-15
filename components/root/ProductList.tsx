import Image from "next/image";
import Link from "next/link";

// Function to format currency in Indonesian Rupiah
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap mb-8">
      <Link
        href={"/"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/products-body-1.jpg"
            alt="Product Image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Produk</span>
          <span className="font-semibold">{formatCurrency(200000)}</span>
        </div>
        <div className="text-sm text-gray-500">Deskripsi</div>
        <button className="rounded-2xl ring-1 ring-[#F35C7A] text-[#F35C7A] py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white w-max">
          Tambah Cart
        </button>
      </Link>
      <Link
        href={"/"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/products-mascara-1.jpg"
            alt="Product Image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Produk</span>
          <span className="font-semibold">{formatCurrency(400000)}</span>
        </div>
        <div className="text-sm text-gray-500">Deskripsi</div>
        <button className="rounded-2xl ring-1 ring-[#F35C7A] text-[#F35C7A] py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white w-max">
          Tambah Cart
        </button>
      </Link>
      <Link
        href={"/"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/products-body-2.jpg"
            alt="Product Image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Produk</span>
          <span className="font-semibold">{formatCurrency(400000)}</span>
        </div>
        <div className="text-sm text-gray-500">Deskripsi</div>
        <button className="rounded-2xl ring-1 ring-[#F35C7A] text-[#F35C7A] py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white w-max">
          Tambah Cart
        </button>
      </Link>
      <Link
        href={"/"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/products-lotion-1.jpg"
            alt="Product Image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Produk</span>
          <span className="font-semibold">{formatCurrency(200000)}</span>
        </div>
        <div className="text-sm text-gray-500">Deskripsi</div>
        <button className="rounded-2xl ring-1 ring-[#F35C7A] text-[#F35C7A] py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white w-max">
          Tambah Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;

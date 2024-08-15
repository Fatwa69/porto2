import Filter from "@/components/root/Filter";
import ProductList from "@/components/root/ProductList";
import Image from "next/image";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      <div className="hidden bg-slate-50 p-4 sm:flex justify-between h-54">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            40% Diskon Pembelian Pertama
          </h1>
          <button className="rounded-3xl bg-[#F35C7A] text-white w-max py-3 px-5 text-sm">
            Beli Sekarang
          </button>
        </div>
          <div className="relative w-1/3">
          <Image src={'/products-body-3.jpg'} alt="" fill sizes="25vw" className="object-contain"/>
          </div>
      </div>
      {/* filter */}
      <Filter/>
      <h1 className="mt-12 text-xl font-semibold">Mamamoon Best Deal</h1>
      <ProductList/>
    </div>
  );
};

export default ListPage

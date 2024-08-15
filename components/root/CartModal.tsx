"use client";
import Image from "next/image";
import { Button } from "../ui/button";

// Function to format currency in IDR
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);
};

const CartModal = () => {
  const cartItems = true; // This should be replaced with actual cart state logic

  return (
    <div className="w-max absolute p-4 rounded-md shadow-lg bg-white top-12 right-0 flex flex-col gap-6 z-10">
      {!cartItems ? (
        <div className="text-center">Cart Kosong.</div>
      ) : (
        <>
          <h2 className="text-xl font-semibold">Cart</h2>
          <div className="flex flex-col gap-8">
            {/* per item */}
            <div className="flex gap-4">
              <Image
                src="/products/mascara/1.jpg"
                alt="Product Image"
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">
                    {formatCurrency(20000)} {/* Example price */}
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-2">Description</div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Jumlah: 2</span>
                  <span className="text-blue-500 cursor-pointer">Hapus</span>
                </div>
              </div>
            </div>
            {/* per item */}
            <div className="flex gap-4">
              <Image
                src="/products/mascara/1.jpg"
                alt="Product Image"
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">
                    {formatCurrency(20000)} {/* Example price */}
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-2">Description</div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Jumlah: 2</span>
                  <span className="text-blue-500 cursor-pointer">Hapus</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>{formatCurrency(49000)}</span> {/* Example subtotal */}
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Pembayaran via Wallet
            </p>
            <div className="flex justify-between text-sm gap-2">
              <button className="rounded-md py-2 px-4 ring-1 ring-gray-300 hover:bg-gray-100">
                View Cart
              </button>
              <Button className="rounded-md py-2 px-4 bg-black text-white">
                Checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;

"use client";

import { useState } from "react";
import Link from "next/link";
import {FaArrowLeft} from "react-icons/fa"

export default function TopUpPage() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleTopUp = async () => {
    if (!selectedPaymentMethod) {
      setMessage("Please select a payment method.");
      return;
    }

    try {
      const response = await fetch("/api/topup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, paymentMethod: selectedPaymentMethod }),
      });

      const data = await response.json();
      if (data.success) {
        setIsSuccessful(true);
      }
      setMessage(data.message);
    } catch (error) {
      setMessage("An error occurred during the top-up process.");
    }
  };

  const paymentMethods = [
    {
      id: 1,
      name: "Bank Transfer",
      description: "Transfer via ATM, SMS Banking, or Internet Banking",
    },
    { id: 2, name: "Credit Card", description: "Visa, MasterCard, JCB" },
    { id: 3, name: "E-Wallet", description: "OVO, DANA, ShopeePay" },
    { id: 4, name: "Retail Outlet", description: "Alfamart, Indomaret, etc." },
  ];

  return (
    <div className="min-h-screen bg-primary">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-lg font-semibold text-center">
            <Link href={'/'} className="">
            <FaArrowLeft/> 
            </Link>
            Top Up Mamamoon Wallet
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 space-y-6 lg:w-full sm:w-full">
            <div>
              <h2 className="text-xl font-semibold">Nominal Top Up</h2>
              <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3">
                {[10000, 20000, 50000, 100000, 200000, 500000].map((value) => (
                  <button
                    key={value}
                    onClick={() => setAmount(value.toString())}
                    className={`border rounded-lg p-4 text-center ${
                      amount === value.toString()
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {value.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter other amount"
                className="w-full px-4 py-3 text-lg text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold">Pilih Metode Pembayaran</h2>
              <div className="mt-4 space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`p-4 border rounded-lg cursor-pointer ${
                      selectedPaymentMethod === method.name
                        ? "bg-blue-100 border-blue-500"
                        : "bg-gray-100"
                    }`}
                    onClick={() => setSelectedPaymentMethod(method.name)}
                  >
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">{method.name}</h3>
                      {selectedPaymentMethod === method.name && (
                        <span className="text-blue-500">✓</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      {method.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleTopUp}
              className="w-full px-4 py-3 mt-6 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Top Up Now
            </button>

            {message && (
              <div className="text-center text-lg mt-4 flex items-center justify-center space-x-2">
                <p
                  className={`${
                    message.includes("successful")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {message}
                </p>
                {isSuccessful && (
                  <Link href="/" className="text-blue-600 hover:underline">
                    Back to Homepage
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";

import { useSearchParams } from "next/navigation";

export default function Error() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-5">Error</h2>
        <p className="text-red-500">{error}</p>
        <a
          href="/auth/signin"
          className="mt-4 inline-block bg-blue-500 text-white p-2 rounded"
        >
          Go to Sign In
        </a>
      </div>
    </div>
  );
}

'use client'

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const TopUpModal = () => {
  const router = useRouter();

  const handleTopUpClick = () => {
    router.push("/topup"); // Change "/topup" to your actual top-up page route if different
  };

  return (
    <div>
      <Button onClick={handleTopUpClick}>Top-Up</Button>
    </div>
  );
};

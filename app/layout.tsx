// app/layout.tsx
"use client";

import { SessionProvider } from "next-auth/react"; // Make sure to include your global styles if you have any
import { usePathname } from "next/navigation";
import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";
import MainHeader from "@/components/root/MainNavbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname.startsWith("/about")) {
    return (
      <html suppressHydrationWarning>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    );
  }

  if (pathname.startsWith("/topup")) {
    return (
      <html suppressHydrationWarning>
        <body>
          {children}
        </body>
      </html>
    );
  }

  if (pathname.startsWith("/auth")) {
    return (
      <html suppressHydrationWarning>
        <body>{children}</body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontSans.variable}>
        <SessionProvider>
          <MainHeader />
          {children}
          <Footer/>
        </SessionProvider>
      </body>
    </html>
  );
}

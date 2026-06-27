"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // 🎯 یہاں چیک ہو رہا ہے: اگر صفحہ ہوم پیج (/) ہے تو مینو غائب رہے گا
  const isLandingPage = pathname === "/";

  return (
    <html
      lang="ur"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-yellow-500 selection:text-black">
        
        {/* 🌟 اگر لینڈنگ پیج نہیں ہے، صرف تبھی اوپر مینو بار نظر آئے گا */}
        {!isLandingPage && (
          <header className="w-full bg-black p-4 md:p-5 z-50">
            <Navbar />
          </header>
        )}

        {/* 📄 صفحات کا مواد */}
        <main className="flex-1 w-full flex flex-col bg-black">
          {children}
        </main>

      </body>
    </html>
  );
}
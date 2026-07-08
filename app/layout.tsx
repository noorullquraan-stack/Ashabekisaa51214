"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "./components/navbar/Navbar"; // آپ کے پراجیکٹ کے حساب سے Navbar ہی رکھا ہے
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // اگر پاتھ "/" ہے، تو ہیڈر اور فوٹر نہیں دکھانا
  const isLandingPage = pathname === "/" || pathname === "";

  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {/* 1. Body کو Flex container بنائیں، margin 0 (m-0) اور کم از کم اونچائی 100vh دیں */}
      <body className="m-0 min-h-screen flex flex-col bg-black text-white selection:bg-yellow-500 selection:text-black overflow-x-hidden">

        {/* ہیڈر کا سیکشن */}
        {!isLandingPage && (
          <header className="w-full bg-black z-50">
            <Navbar />
          </header>
        )}

        {/* 2. Main پر 'flex-[1_0_auto]' لگائیں تاکہ یہ تمام دستیاب جگہ لے لے اور min-h-0 سے سکرولنگ خراب نہ ہو */}
        <main className="flex-[1_0_auto] w-full flex flex-col bg-black min-h-0">
          {children}
        </main>

        {/* 3. Footer کو ایک کنٹینر میں رکھ کر mt-auto دیا ہے تاکہ یہ ہمیشہ نیچے ہی رہے */}
        {!isLandingPage && (
          <footer className="mt-auto w-full">
            <Footer />
          </footer>
        )}
        
        {/* Floating Buttons */}
        {!isLandingPage && <FloatingButtons />}
      </body>
    </html>
  );
}
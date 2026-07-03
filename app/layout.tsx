"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "./components/navbar/Navbar"; // واپس ./ کر دیا
import Footer from "./components/Footer"; // واپس ./ کر دیا
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
      lang="ur"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-black text-white selection:bg-yellow-500 selection:text-black">

        {/* ہیڈر کا سیکشن */}
        {!isLandingPage && (
          <header className="w-full bg-black z-50">
            <Navbar />
          </header>
        )}

        {/* مین کنٹینر */}
        <main className="flex-1 w-full flex flex-col bg-black">
          {children}
        </main>

        {/* فوٹر کا سیکشن */}
        {!isLandingPage && (
          <Footer />
        )}
      </body>
    </html>
  );
}
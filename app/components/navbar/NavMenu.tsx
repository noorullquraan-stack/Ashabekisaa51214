"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { TranslationType } from "../../../data/navbarData";

export function NavMenu({ t }: { t: TranslationType }) {
    const pathname = usePathname();
    const [activeMenuItem, setActiveMenuItem] = useState("");

    useEffect(() => {
        if (pathname) {
            const currentSegment = pathname.split("/").filter(Boolean)[1] || "";
            const matchedItem = t.menu.find((item) => item.href.endsWith(`/${currentSegment}`));

            if (matchedItem) {
                setActiveMenuItem(matchedItem.name);
            } else {
                setActiveMenuItem("");
            }
        }
    }, [pathname, t.menu]);

    // 🎯 یہ فلٹر نیوز، ویڈیوز اور ڈونیٹ کے لنکس کو عارضی طور پر چھپا دے گا
    const visibleMenu = t.menu.filter((item) => {
        const link = item.href.toLowerCase();
        return !link.includes("news") && !link.includes("videos") && !link.includes("donate");
    });

    return (
        <div className="w-full mt-1 relative flex justify-center pb-2 px-2 overflow-hidden">
            <div className="flex items-center gap-1.5 md:gap-2.5 max-w-full md:overflow-x-auto hide-scrollbar flex-wrap md:flex-nowrap py-1 px-1 justify-center flex-row">
                {/* t.menu کی جگہ اب visibleMenu استعمال کیا گیا ہے */}
                {visibleMenu.map((item) => {
                    const isActive = activeMenuItem === item.name;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveMenuItem(item.name)}
                            className={`relative px-3 py-1.5 transition-all duration-300 whitespace-nowrap text-center text-[11px] md:text-base ${t.fontClass} ${
                                isActive
                                    ? "rounded-lg border border-yellow-500 text-black bg-gradient-to-r from-amber-400 to-yellow-600 shadow-[0_4px_12px_rgba(212,175,55,0.4)] scale-105 z-10 font-bold"
                                    : "rounded-lg border border-zinc-700 text-[#D4AF37] bg-gradient-to-r from-zinc-800 to-zinc-900 hover:text-yellow-300 hover:border-[#D4AF37]/50 font-semibold shadow-sm"
                            }`}
                        >
                            <span className="relative z-10">{item.name}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
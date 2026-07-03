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

    return (
        <div className="w-full mt-1 relative flex justify-center pb-2 px-2 overflow-hidden">
            <div className="flex items-center gap-1.5 md:gap-2 max-w-full overflow-x-auto hide-scrollbar flex-nowrap py-1 px-1 justify-start md:justify-center flex-row">
                {t.menu.map((item) => {
                    const isActive = activeMenuItem === item.name;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveMenuItem(item.name)}
                            className={`relative py-1.5 transition-all duration-300 rounded-lg whitespace-nowrap ${t.fontClass} ${isActive
                                ? "text-black bg-yellow-500 border-b-2 border-yellow-600 shadow-[0_2px_10px_rgba(255,215,0,0.3)]"
                                : "text-zinc-300 bg-zinc-900/40 border border-zinc-800/50 hover:text-white hover:bg-zinc-800 hover:border-yellow-500/50"
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
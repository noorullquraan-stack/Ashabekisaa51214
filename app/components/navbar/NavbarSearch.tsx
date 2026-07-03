"use client";

import { useState } from "react";
import { TranslationType } from "../../../data/navbarData";

export function NavbarSearch({ t }: { t: TranslationType }) {
    const [searchQueryStr, setSearchQueryStr] = useState("");

    return (
        <div className="relative hidden lg:block">
            <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQueryStr}
                onChange={(e) => setSearchQueryStr(e.target.value)}
                className={`w-28 md:w-36 px-2.5 py-1 text-[11px] rounded-lg bg-zinc-900/80 border border-yellow-400/70 text-yellow-400 placeholder-yellow-400/70 outline-none transition-all focus:border-yellow-400 focus:bg-zinc-950 focus:ring-1 focus:ring-yellow-400/50 shadow-md ${
                    t.dir === "ltr" ? "text-left pl-7 font-sans" : "text-right pr-7 font-serif"
                }`}
            />
            <svg
                className={`w-2.5 h-2.5 absolute top-1/2 -translate-y-1/2 text-yellow-400 fill-current ${
                    t.dir === "ltr" ? "left-2" : "right-2"
                }`}
                viewBox="0 0 20 20"
            >
                <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
    );
}
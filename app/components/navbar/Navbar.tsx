"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LanguageBar } from "../LanguageBar";
import { SocialIcons } from "../SocialIcons";
import { translations, LangKey } from "../../../data/navbarData";
import { NavbarSearch } from "./NavbarSearch";
import { NavbarLogo } from "./NavbarLogo";
import { NavMenu } from "./NavMenu";

export default function Navbar() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentLocale = pathname?.split("/").filter(Boolean)[0] || "ur";
    const currentLang: LangKey = (currentLocale in translations) ? (currentLocale as LangKey) : "ur";
    const t = translations[currentLang];

    if (!mounted) {
        return <div className="w-full h-12 bg-black" />;
    }

    return (
        <header className="w-full bg-black z-50 sticky top-0 border-b border-zinc-800/50 backdrop-blur-md">
            <div dir={t.dir} className="w-full flex flex-col gap-2">
                <div className="w-full flex items-center justify-between px-3 md:px-4 pt-3">

                    {/* Left: Language & Search (موبائل پر 50% جگہ لے گا، ڈیسک ٹاپ پر 33%) */}
                    <div className="flex items-center gap-2 md:gap-3 w-1/2 md:w-1/3 justify-start">
                        <LanguageBar t={t} />
                        <NavbarSearch t={t} />
                    </div>

                    {/* Center / Mobile Right: Logo (موبائل پر کونے میں جائے گا، ڈیسک ٹاپ پر سینٹر میں) */}
                    <div className="flex justify-end md:justify-center w-1/2 md:w-1/3">
                        <NavbarLogo t={t} currentLang={currentLang} />
                    </div>

                    {/* Right: Social Icons (صرف ڈیسک ٹاپ پر نظر آئیں گے اور 33% جگہ لیں گے) */}
                    <div className="hidden md:flex items-center gap-4 w-1/3 justify-end">
                        <SocialIcons t={t} />
                    </div>
                </div>

                {/* Navigation Menu */}
                <NavMenu t={t} />
            </div>
        </header>
    );
}
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
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

    const rawTranslations = translations[currentLang];

    // ہیڈر سے زبان کا اضافی ٹیکسٹ ہٹانے کے لیے
    const t = {
        ...rawTranslations,
        language: "",
        langText: "",
        languageText: "",
        selectLanguage: "",
        currentLanguage: ""
    };

    if (!mounted) {
        return <div className="w-full h-16 bg-black" />;
    }

    return (
        <div className="w-full bg-black z-50 sticky top-0 border-b border-zinc-800/50 backdrop-blur-md">
            <div dir={t.dir} className="w-full flex flex-col gap-2">

                {/* ہیڈر کو CSS Grid میں تبدیل کر دیا ہے تاکہ تینوں سیکشنز الگ رہیں اور مکس نہ ہوں */}
                <div className="w-full grid grid-cols-3 items-center px-2 md:px-4 pt-3 pb-2">

                    {/* Left Section: Home Button + Search (اپنے کونے میں محفوظ) */}
                    <div className="flex items-center gap-2 justify-start shrink-0">
                        <Link
                            href="/"
                            className="flex items-center justify-center p-2 rounded-lg border border-[#D4AF37]/30 bg-black hover:bg-[#1a1608] transition-all duration-300"
                            title={t.homeText}
                        >
                            <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
                            </svg>
                        </Link>
                        <NavbarSearch t={t} />
                    </div>

                    {/* Center Section: Logo Text (دونوں طرف فاصلے px-4 کے ساتھ بالکل درمیان میں) */}
                    <div className="flex justify-center text-center px-4 shrink-0">
                        <NavbarLogo t={t} currentLang={currentLang} />
                    </div>

                    {/* Right Section: LanguageBar + Socials (دوسرے کونے میں محفوظ) */}
                    <div className="flex items-center justify-end gap-2 shrink-0 max-md:[&_span]:hidden max-md:[&_p]:hidden max-md:text-[0px] max-md:[&_*]:text-[0px] max-md:[&_svg]:w-5 max-md:[&_svg]:h-5 md:text-sm">
                        <LanguageBar t={t} />
                        <div className="hidden md:flex">
                            <SocialIcons t={t} />
                        </div>
                    </div>

                </div>

                <NavMenu t={t} />
            </div>
        </div>
    );
}
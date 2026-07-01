"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageBar } from "./LanguageBar";
import { SocialIcons } from "./SocialIcons";

const translations = {
    ur: {
        dir: "rtl" as const,
        langLabel: "زبان:",
        searchPlaceholder: "تلاش...",
        homeText: "ہوم",
        countriesActive: "ممالک",
        fontClass: "font-serif font-bold text-[11px] md:text-xs",
        menu: [
            { name: "تعارف", href: "/ur/about" }, { name: "علمی خدمات", href: "/ur/academic-services" },
            { name: "فلاحی خدمات", href: "/ur/welfare-services" }, { name: "ممالک", href: "/ur/map" },
            { name: "لائبریری", href: "/ur/library" }, { name: "زیارات", href: "/ur/ziyarat" },
            { name: "اخبار", href: "/ur/news" }, { name: "ویڈیوز", href: "/ur/videos" },
            { name: "تصاویر", href: "/ur/gallery" }, { name: "عطیات", href: "/ur/donate" },
            { name: "رابطہ", href: "/ur/contact" },
        ]
    },
    ar: {
        dir: "rtl" as const,
        langLabel: "اللغة:",
        searchPlaceholder: "بحث...",
        homeText: "الرئيسية",
        countriesActive: "البلدان",
        fontClass: "font-serif font-bold text-[11px] md:text-xs",
        menu: [
            { name: "مقدمة", href: "/ar/about" }, { name: "الخدمات العلمية", href: "/ar/academic-services" },
            { name: "الخدمات الخيرية", href: "/ar/welfare-services" }, { name: "البلدان", href: "/ar/map" },
            { name: "المكتبة", href: "/ar/library" }, { name: "الزيارات", href: "/ar/ziyarat" },
            { name: "الأخبار", href: "/ar/news" }, { name: "الفيديوهات", href: "/ar/videos" },
            { name: "الصور", href: "/ar/gallery" }, { name: "التبرعات", href: "/ar/donate" },
            { name: "اتصل بنا", href: "/ar/contact" },
        ]
    },
    fa: {
        dir: "rtl" as const,
        langLabel: "زبان:",
        searchPlaceholder: "جستجو...",
        homeText: "خانه",
        countriesActive: "کشورها",
        fontClass: "font-serif font-bold text-[11px] md:text-xs",
        menu: [
            { name: "معرفی", href: "/fa/about" }, { name: "خدمات علمی", href: "/fa/academic-services" },
            { name: "خدمات رفاهی", href: "/fa/welfare-services" }, { name: "کشورها", href: "/fa/map" },
            { name: "کتابخانه", href: "/fa/library" }, { name: "زیارات", href: "/fa/ziyarat" },
            { name: "اخبار", href: "/fa/news" }, { name: "ویدیوها", href: "/fa/videos" },
            { name: "تصاویر", href: "/fa/gallery" }, { name: "نذورات", href: "/fa/donate" },
            { name: "ارتباط با ما", href: "/fa/contact" },
        ]
    },
    en: {
        dir: "ltr" as const,
        langLabel: "Language:",
        searchPlaceholder: "Search...",
        homeText: "Home",
        countriesActive: "Countries",
        fontClass: "font-sans font-medium text-[10.5px] md:text-[11.5px] tracking-wide",
        menu: [
            { name: "About", href: "/en/about" }, { name: "Academic Services", href: "/en/academic-services" },
            { name: "Welfare Services", href: "/en/welfare-services" }, { name: "Countries", href: "/en/map" },
            { name: "Library", href: "/en/library" }, { name: "Ziyarat", href: "/en/ziyarat" },
            { name: "News", href: "/en/news" }, { name: "Videos", href: "/en/videos" },
            { name: "Gallery", href: "/en/gallery" }, { name: "Donate", href: "/en/donate" },
            { name: "Contact", href: "/en/contact" },
        ]
    }
};

export default function Navbar() {
    const pathname = usePathname();
    const [searchQueryStr, setSearchQueryStr] = useState("");
    const [activeMenuItem, setActiveMenuItem] = useState("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentLocale = pathname?.split("/").filter(Boolean)[0] || "ur";
    const currentLang = (currentLocale in translations) ? (currentLocale as keyof typeof translations) : "ur";
    const t = translations[currentLang];

    useEffect(() => {
        if (mounted && pathname) {
            const currentSegment = pathname.split("/").filter(Boolean)[1] || "";
            const menuList = translations[currentLang].menu;
            const matchedItem = menuList.find(item => item.href.endsWith(`/${currentSegment}`));
            if (matchedItem) {
                setActiveMenuItem(matchedItem.name);
            } else {
                setActiveMenuItem("");
            }
        }
    }, [pathname, currentLang, mounted]);

    if (!mounted) {
        return <div className="w-full h-12 bg-black" />;
    }

    return (
        <div dir={t.dir} className="w-full z-50 relative flex flex-col gap-2">
            <div className="w-full flex items-center justify-between px-2 pt-2">

                {/* 1. بائیں سائیڈ - لینگویج اور سرچ */}
                <div className="flex items-center gap-3 w-1/3 justify-start">
                    <LanguageBar t={t} />

                    <div className="relative hidden sm:block">
                        <input
                            type="text"
                            placeholder={t.searchPlaceholder}
                            value={searchQueryStr}
                            onChange={(e) => setSearchQueryStr(e.target.value)}
                            className={`w-28 md:w-36 px-2.5 py-1 text-[11px] rounded-lg bg-zinc-900/80 border border-yellow-400/70 text-yellow-400 placeholder-yellow-400/70 outline-none transition-all duration-300 focus:border-yellow-400 focus:bg-zinc-950 focus:ring-1 focus:ring-yellow-400/50 shadow-md ${t.dir === "ltr" ? "text-left pl-7 font-sans" : "text-right pr-7 font-serif"}`}
                        />
                        <svg className={`w-2.5 h-2.5 absolute top-1/2 -translate-y-1/2 text-yellow-400 fill-current opacity-100 ${t.dir === "ltr" ? "left-2" : "right-2"}`} viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                {/* 2. درمیان میں - لوگو اور ٹیکسٹ */}
                <div className="flex justify-center w-1/3">
                    <Link href="/" className={`flex items-center gap-2.5 group ${t.dir === "ltr" ? "flex-row" : "flex-row-reverse"}`}>
                        <img
                            src="https://res.cloudinary.com/dmqej8n4z/image/upload/v1781948799/Markazlogo_vima6r.png"
                            alt="Logo"
                            className="h-12 w-auto object-contain shrink-0"
                        />
                        <div className={`flex flex-col justify-center pt-1 ${t.dir === "ltr" ? "text-left" : "text-right"}`}>
                            <span className="text-[11px] md:text-[13px] font-bold text-yellow-400 font-serif whitespace-nowrap leading-none mb-1">
                                {currentLang === 'ur' && "مرکز اصحاب الکساء عالمی"}
                                {currentLang === 'ar' && "مركز أصحاب الكساء العالمي"}
                                {currentLang === 'fa' && "مرکز جهانی اصحاب کساء"}
                                {currentLang === 'en' && "Ashab Alkisaa Int. Center"}
                            </span>
                            <span className="text-[8px] md:text-[9px] text-gray-200 tracking-wide whitespace-nowrap leading-none">
                                {currentLang === 'ur' && "آفیشل ویب سائٹ"}
                                {currentLang === 'ar' && "الموقع الرسمي"}
                                {currentLang === 'fa' && "وب‌سایت رسمی"}
                                {currentLang === 'en' && "Official Website"}
                            </span>
                        </div>
                    </Link>
                </div>
                {/* 3. دائیں سائیڈ - سوشل میڈیا اور ہوم بٹن */}
                <div className="flex items-center gap-4 w-1/3 justify-end">
                    <SocialIcons t={t} />
                </div>
            </div>

            {/* نیویگیشن مینو */}
            <div className="w-full mt-2 relative flex justify-center pb-2">
                <div className="flex items-center justify-start md:justify-center gap-1.5 max-w-full px-4 py-2 overflow-x-auto hide-scrollbar flex-nowrap">
                    {t.menu.map((item) => {
                        const isActive = activeMenuItem === item.name;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveMenuItem(item.name)}
                                className={`relative px-3.5 py-1.5 transition-all duration-300 rounded-xl overflow-hidden group shadow-[0_4px_12px_rgba(0,0,0,0.6)] whitespace-nowrap ${t.fontClass} ${isActive
                                    ? "text-black bg-yellow-500 border-b-2 border-yellow-600 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
                                    : "text-zinc-800 bg-white/90 border-b-4 border-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-yellow-400 hover:translate-y-[2px]"
                                    }`}
                            >
                                <span className="relative z-10">{item.name}</span>
                                <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-all duration-300 ease-out group-hover:w-full ${isActive ? "w-full" : "w-0"}`} />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const translations = {
    ur: {
        dir: "rtl" as const,
        langLabel: "زبان:",
        searchPlaceholder: "تلاش...",
        homeText: "ہوم",
        countriesActive: "ممالک",
        fontClass: "font-serif font-bold text-[11px] md:text-xs",
        menu: [
            { name: "تعارف", href: "/ur/about" },
            { name: "علمی خدمات", href: "/ur/academic-services" },
            { name: "فلاحی خدمات", href: "/ur/welfare-services" },
            { name: "ممالک", href: "/ur/map" },
            { name: "لائبریری", href: "/ur/library" },
            { name: "زیارات", href: "/ur/ziyarat" },
            { name: "اخبار", href: "/ur/news" },
            { name: "ویڈیوز", href: "/ur/videos" },
            { name: "تصاویر", href: "/ur/gallery" },
            { name: "عطیات", href: "/ur/donate" },
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
            { name: "مقدمة", href: "/ar/about" },
            { name: "الخدمات العلمية", href: "/ar/academic-services" },
            { name: "الخدمات الخيرية", href: "/ar/welfare-services" },
            { name: "البلدان", href: "/ar/map" },
            { name: "المكتبة", href: "/ar/library" },
            { name: "الزيارات", href: "/ar/ziyarat" },
            { name: "الأخبار", href: "/ar/news" },
            { name: "الفيديوهات", href: "/ar/videos" },
            { name: "الصور", href: "/ar/gallery" },
            { name: "التبرعات", href: "/ar/donate" },
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
            { name: "معرفی", href: "/fa/about" },
            { name: "خدمات علمی", href: "/fa/academic-services" },
            { name: "خدمات رفاهی", href: "/fa/welfare-services" },
            { name: "کشورها", href: "/fa/map" },
            { name: "کتابخانه", href: "/fa/library" },
            { name: "زیارات", href: "/fa/ziyarat" },
            { name: "اخبار", href: "/fa/news" },
            { name: "ویدیوها", href: "/fa/videos" },
            { name: "تصاویر", href: "/fa/gallery" },
            { name: "نذورات", href: "/fa/donate" },
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
            { name: "About", href: "/en/about" },
            { name: "Academic Services", href: "/en/academic-services" },
            { name: "Welfare Services", href: "/en/welfare-services" },
            { name: "Countries", href: "/en/map" },
            { name: "Library", href: "/en/library" },
            { name: "Ziyarat", href: "/en/ziyarat" },
            { name: "News", href: "/en/news" },
            { name: "Videos", href: "/en/videos" },
            { name: "Gallery", href: "/en/gallery" },
            { name: "Donate", href: "/en/donate" },
            { name: "Contact", href: "/en/contact" },
        ]
    }
};

const languages = [
    { name: "عربی", flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906530/iraq_aeukuq.gif", locale: "ar" },
    { name: "اردو", flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906529/Pakistan_y2zwci.gif", locale: "ur" },
    { name: "فارسی", flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906527/Iran_rtdncz.gif", locale: "fa" },
    { name: "English", flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906499/England_q4tw1a.gif", locale: "en" }
];

const socialLinks = [
    { name: "Facebook", url: "https://m.facebook.com/100091574370039", svgPath: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" },
    { name: "YouTube", url: "https://youtube.com/@aacenter?si=D-C8iQYB8d17ZFrP", svgPath: "M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.503 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
    { name: "TikTok", url: "https://www.tiktok.com/@aacenter86?lang=en", svgPath: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.15 1.34 1.41 3.23 2.17 5.14 2.3v3.96c-1.7-.12-3.37-.77-4.65-1.92-.25-.22-.48-.46-.69-.71v6.59c0 5.58-4.59 10.05-10.12 9.81-4.71-.2-8.58-4.22-8.63-8.94-.06-5.8 5.12-10.47 10.87-9.56v4.03c-2.91-.39-5.59 1.66-6.04 4.54-.53 3.39 1.96 6.55 5.37 6.64 3.19.09 5.89-2.34 5.96-5.52V0h-.3z" },
    { name: "Telegram", url: "https://t.me/ashab_alkisaa", svgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.6 1.48-1.55 2.73-2.61 4.17-3.83.16-.14.32-.42-.03-.42-.08 0-.41.1-.96.47-1.15.78-2.67 1.8-5.38 3.63-.44.3-.84.45-1.19.44-.39-.01-1.14-.22-1.7-.4-1.1-.35-1.02-.95.07-1.38 5.4-2.35 9-3.9 10.8-4.65.52-.22 1.08-.37 1.48-.37.15 0 .48.04.69.21.17.15.22.42.22.6z" },
    { name: "Instagram", url: "https://www.instagram.com/ashab_alksa/?hl=a", svgPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" }
];

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

    // 🎯 فکس: 404 ایرر کو روکنے کے لیے سو فیصد محفوظ فنکشن
    const getDynamicHref = (targetLocale: string) => {
        if (!pathname || pathname === "/") return "/";

        const segments = pathname.split("/").filter(Boolean);

        // اگر پاتھ نیم صرف زبان کا کوڈ ہے (جیسے /fa یا /ur) تو اسے محفوظ طریقے سے ہوم پر لائیں
        if (segments.length <= 1) {
            return "/";
        }

        // اگر کسی مخصوص پیج پر ہے (جیسے about یا map) تو اس پیج کا درست روٹ بنائیں
        const restOfPath = segments.slice(1).join("/");
        return `/${targetLocale}/${restOfPath}`;
    };

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
            {/* ہیڈر بار */}
            <div className="w-full flex items-center justify-between px-2">
                <div className={`flex items-center gap-3 ${t.dir === "ltr" ? "flex-row" : "flex-row-reverse"}`}>
                    <div className="flex items-center gap-1.5 bg-zinc-950/50 border border-zinc-900/60 py-1 px-2.5 rounded-xl backdrop-blur-md shadow-lg">
                        <span className={`font-serif font-bold text-[11px] text-yellow-400 ${t.dir === "ltr" ? "border-r pr-2 border-zinc-800" : "border-l pl-2 border-zinc-800"}`}>
                            {t.langLabel}
                        </span>
                        <div className="flex items-center gap-1.5">
                            {languages.map((lang) => (
                                <Link
                                    key={lang.locale}
                                    href={getDynamicHref(lang.locale)}
                                    className="group cursor-pointer flex items-center justify-center transition-all duration-300"
                                >
                                    <div className="w-5.5 h-5.5 relative overflow-hidden rounded-full border border-yellow-400/20 shadow-sm group-hover:shadow-[0_0_10px_rgba(255,215,0,0.6)] group-hover:scale-110 transition-all duration-300">
                                        <img src={lang.flag} alt={lang.name} className="w-full h-full object-cover scale-125" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* 🔎 سرچ بار */}
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

                {/* 📱 سوشل میڈیا آئیکنز اور ہوم بٹن */}
                <div className={`flex items-center gap-4 ${t.dir === "ltr" ? "ml-auto pl-2 flex-row-reverse" : "mr-auto pl-2 flex-row"}`}>
                    <div className="flex items-center gap-1.5">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-6.5 h-6.5 rounded-md bg-zinc-900/90 border border-yellow-400/30 flex items-center justify-center text-yellow-400 hover:text-black hover:border-yellow-400 hover:bg-yellow-400 shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out hover:scale-115 hover:-translate-y-[1px]"
                            >
                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d={social.svgPath} /></svg>
                            </a>
                        ))}
                    </div>

                    <Link href={`/${currentLang}`} className={`group flex items-center gap-1.5 px-3 py-1 rounded-xl bg-zinc-900/60 border border-yellow-400/20 transition-all duration-300 hover:border-yellow-400 hover:bg-zinc-950 ${t.dir === "ltr" ? "flex-row-reverse" : "flex-row"}`}>
                        <span className={`text-xs font-bold text-yellow-400 transition-colors group-hover:text-white ${t.dir === "ltr" ? "font-sans font-medium" : "font-serif"}`}>{t.homeText}</span>
                        <svg className="w-3.5 h-3.5 text-yellow-400 transition-transform duration-300 group-hover:scale-110 fill-current" viewBox="0 0 20 20">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* مینو رو */}
            <div className="w-full mt-2 relative flex justify-center">
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
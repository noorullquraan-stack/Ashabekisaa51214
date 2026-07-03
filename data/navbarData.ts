export const translations = {
    ur: {
        dir: "rtl" as const,
        langLabel: "زبان:",
        searchPlaceholder: "تلاش...",
        homeText: "ہوم",
        countriesActive: "ممالک",
        fontClass: "font-serif font-bold text-[11px] md:text-xs tracking-normal px-3.5",
        menu: [
            { name: "تعارف", href: "/ur/about" },
            { name: "علمی خدمات", href: "/ur/academic-services" },
            { name: "مذہبی خدمات", href: "/ur/religious-services" },
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
        fontClass: "font-serif font-bold text-[11px] md:text-xs tracking-normal px-3.5",
        menu: [
            { name: "مقدمة", href: "/ar/about" },
            { name: "الخدمات العلمية", href: "/ar/academic-services" },
            { name: "الخدمات الدينية", href: "/ar/religious-services" },
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
        fontClass: "font-serif font-bold text-[11px] md:text-xs tracking-normal px-3.5",
        menu: [
            { name: "معرفی", href: "/fa/about" },
            { name: "خدمات علمی", href: "/fa/academic-services" },
            { name: "خدمات مذهبی", href: "/fa/religious-services" },
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
        fontClass: "font-sans font-semibold text-[9.5px] md:text-[10.5px] tracking-tighter px-2.5",
        menu: [
            { name: "About", href: "/en/about" },
            { name: "Academic", href: "/en/academic-services" },
            { name: "Religious", href: "/en/religious-services" },
            { name: "Welfare", href: "/en/welfare-services" },
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

export type LangKey = keyof typeof translations;
export type TranslationType = typeof translations.ur;
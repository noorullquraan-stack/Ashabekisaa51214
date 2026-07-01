"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const languages = [
    { name: "عربی", flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906530/iraq_aeukuq.gif", locale: "ar" },
    { name: "اردو", flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906529/Pakistan_y2zwci.gif", locale: "ur" },
    { name: "فارسی", flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906527/Iran_rtdncz.gif", locale: "fa" },
    { name: "English", flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906499/England_q4tw1a.gif", locale: "en" }
];

export function LanguageBar({ t }: { t: any }) {
    const pathname = usePathname();

    const getDynamicHref = (targetLocale: string) => {
        if (!pathname || pathname === "/") return `/${targetLocale}/map`;
        const segments = pathname.split("/").filter(Boolean);
        if (segments.length === 1) {
            return `/${targetLocale}/map`;
        }
        const restOfPath = segments.slice(1).join("/");
        return `/${targetLocale}/${restOfPath}`;
    };

    return (
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
    );
}
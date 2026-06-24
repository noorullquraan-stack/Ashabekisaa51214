"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Languages from "./Languages";
import SocialLinks from "./SocialLinks";
import MenuItems from "./MenuItems";

export default function Header() {
    const params = useParams();
    const currentLang = params?.lang || "ur";

    // Get appropriate title based on language
    const getTitle = () => {
        switch (currentLang) {
            case "ar":
                return "الخدمات الخيرية والعلمية لمركز أصحاب الكساء الدولي";
            case "fa":
                return "خدمات خیریه و علمی مرکز بین‌المللی اصحاب کساء";
            case "en":
                return "Welfare and Academic Services of Ashab Al-Kisa International Center";
            default:
                return "اصحاب الکساء بین الاقوامی مرکز کی فلاحی و علمی خدمات";
        }
    };

    return (
        <>
            {/* ہیڈر بار */}
            <div className="w-full flex items-center justify-between z-50 relative px-2">
                <div className="flex items-center gap-3">
                    <Languages />

                    <div className="relative hidden sm:block">
                        <input type="text" placeholder="تلاش..." className="w-28 md:w-36 px-2.5 py-1 pr-7 text-[11px] rounded-lg bg-zinc-900/60 border border-[#D4AF37]/50 text-[#D4AF37] placeholder-[#D4AF37]/40 outline-none text-right transition-all duration-300 focus:border-[#D4AF37] focus:bg-zinc-950/80" />
                        <svg className="w-2.5 h-2.5 absolute top-1/2 right-2 -translate-y-1/2 text-[#D4AF37] fill-current" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div className="mr-auto flex items-center gap-4 pl-2">
                    <SocialLinks />

                    <Link href={`/${currentLang}/map`} className="group flex items-center gap-1.5 px-3 py-1 rounded-xl bg-zinc-900/60 border border-[#D4AF37]/20 transition-all duration-300 hover:border-[#D4AF37] hover:bg-zinc-950">
                        <span className="text-xs font-bold text-[#D4AF37] transition-colors group-hover:text-white">ہوم</span>
                        <svg className="w-3.5 h-3.5 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110 fill-current" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 0 001 1h2a1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                    </Link>
                </div>
            </div>

            {/* مینو رو اور مرکزی ٹائٹل */}
            <div className="w-full mt-2 z-40 relative flex flex-col items-center justify-center">
                <div className="w-full overflow-x-auto hide-scrollbar flex justify-start md:justify-center px-4 py-2">
                    <MenuItems />
                </div>

                <h2 className="text-sm md:text-base font-bold font-serif text-[#D4AF37] text-center mt-0.5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] tracking-wide">
                    {getTitle()}
                </h2>
            </div>
        </>
    );
}

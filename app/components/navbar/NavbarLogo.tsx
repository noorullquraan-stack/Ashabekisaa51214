import Link from "next/link";
import { TranslationType, LangKey } from "../../../data/navbarData";

export function NavbarLogo({ t, currentLang }: { t: TranslationType; currentLang: LangKey }) {
    return (
        <Link href="/" className={`flex items-center gap-2 md:gap-3 group ${t.dir === "ltr" ? "flex-row" : "flex-row-reverse"}`}>
            <img
                src="https://res.cloudinary.com/dmqej8n4z/image/upload/v1781948799/Markazlogo_vima6r.png"
                alt="Logo"
                className="h-9 md:h-12 w-auto object-contain shrink-0"
            />
            <div className={`flex flex-col justify-center ${t.dir === "ltr" ? "text-left" : "text-right"}`}>
                <span className="text-[10px] md:text-[13px] font-bold text-yellow-400 font-serif whitespace-nowrap leading-tight">
                    {currentLang === 'ur' && "مرکز اصحاب الکساء عالمی"}
                    {currentLang === 'ar' && "مركز أصحاب الكساء العالمي"}
                    {currentLang === 'fa' && "مرکز جهانی اصحاب کساء"}
                    {currentLang === 'en' && "Ashab Alkisaa Int. Center"}
                </span>
                <span className="text-[7px] md:text-[9px] text-gray-300 tracking-wide whitespace-nowrap leading-none">
                    {currentLang === 'ur' && "آفیشل ویب سائٹ"}
                    {currentLang === 'ar' && "الموقع الرسمي"}
                    {currentLang === 'fa' && "وب‌سایت رسمی"}
                    {currentLang === 'en' && "Official Website"}
                </span>
            </div>
        </Link>
    );
}
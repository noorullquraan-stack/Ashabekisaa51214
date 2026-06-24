import Link from "next/link";

export const languages = [
    { name: "عربی", flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906530/iraq_aeukuq.gif", href: "/ar/map" },
    { name: "اردو", flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906529/Pakistan_y2zwci.gif", href: "/ur/map" },
    { name: "فارسی", flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906527/Iran_rtdncz.gif", href: "/fa/map" },
    { name: "English", flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906499/England_q4tw1a.gif", href: "/en/map" }
];

export default function Languages() {
    return (
        <div className="flex items-center gap-1.5 bg-zinc-950/50 border border-zinc-900/60 py-1 px-2.5 rounded-xl backdrop-blur-md shadow-lg">
            <span className="font-serif font-bold text-[11px] text-[#D4AF37] border-l border-zinc-800 pr-2 pl-2">زبان:</span>
            <div className="flex items-center gap-1.5">
                {languages.map((lang) => (
                    <Link key={lang.name} href={lang.href} className="group cursor-pointer flex items-center justify-center transition-all duration-300">
                        <div className="w-5.5 h-5.5 relative overflow-hidden rounded-full border border-[#D4AF37]/20 shadow-sm group-hover:shadow-[0_0_10px_rgba(212,175,55,0.6)] group-hover:scale-110">
                            <img src={lang.flag} alt={lang.name} className="w-full h-full object-cover scale-125" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

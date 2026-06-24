import Link from "next/link";
import { useParams } from "next/navigation";

type MenuItem = {
    name: string;
    href: string;
};

// Urdu menu items - we can add other languages later
const menuItemsUr: MenuItem[] = [
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
];

export default function MenuItems() {
    const params = useParams();
    const currentLang = params?.lang || "ur";

    // For now, use Urdu menu items - we can expand to other languages later
    let menuItems = menuItemsUr;
    if (currentLang === "ar") {
        menuItems = [
            { name: "تعريف", href: "/ar/about" },
            { name: "الخدمات العلمية", href: "/ar/academic-services" },
            { name: "الخدمات الخيرية", href: "/ar/welfare-services" },
            { name: "البلدان", href: "/ar/map" },
            { name: "المكتبة", href: "/ar/library" },
            { name: "الزيارات", href: "/ar/ziyarat" },
            { name: "الأخبار", href: "/ar/news" },
            { name: "الفيديوهات", href: "/ar/videos" },
            { name: "الصور", href: "/ar/gallery" },
            { name: "التبرعات", href: "/ar/donate" },
            { name: "التواصل", href: "/ar/contact" },
        ];
    } else if (currentLang === "fa") {
        menuItems = [
            { name: "معرفی", href: "/fa/about" },
            { name: "خدمات علمی", href: "/fa/academic-services" },
            { name: "خدمات خیریه", href: "/fa/welfare-services" },
            { name: "کشورها", href: "/fa/map" },
            { name: "کتابخانه", href: "/fa/library" },
            { name: "زیارات", href: "/fa/ziyarat" },
            { name: "اخبار", href: "/fa/news" },
            { name: "ویدیوها", href: "/fa/videos" },
            { name: "تصاویر", href: "/fa/gallery" },
            { name: "اعطیهات", href: "/fa/donate" },
            { name: "تماس", href: "/fa/contact" },
        ];
    } else if (currentLang === "en") {
        menuItems = [
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
        ];
    }

    return (
        <div className="flex items-center gap-2 max-w-full md:max-w-5xl flex-nowrap w-max">
            {menuItems.map((item) => {
                const isActive = item.href.includes("/map");
                return (
                    <Link key={item.name} href={item.href} className="inline-block shrink-0">
                        <button type="button" className={`relative px-4 py-2 text-xs md:text-sm font-bold font-serif transition-all duration-300 rounded-xl overflow-hidden group shadow-[0_4px_12px_rgba(0,0,0,0.6)] ${isActive ? "text-black bg-[#D4AF37] border-b-2 border-[#AA820A] shadow-[0_0_15px_rgba(212,175,55,0.4)]" : "text-zinc-800 bg-white/95 border-b-4 border-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-[#D4AF37] hover:translate-y-[2px]"}`}>
                            <span className="relative z-10">{item.name}</span>
                            <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transition-all duration-300 ease-out group-hover:w-full ${isActive ? "w-full" : "w-0"}`} />
                        </button>
                    </Link>
                );
            })}
        </div>
    );
}

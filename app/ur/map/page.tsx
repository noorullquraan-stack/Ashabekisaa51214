"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Country = {
  slug: string;
  name: string;
  image: string;
  x: number;
  y: number;
  width: number;
  height: number;
  details: string;
  delayClass: string;
};

const CANVAS_W = 1920;
const CANVAS_H = 1080;

const countries: Country[] = [
  {
    slug: "tanzania",
    name: "تنزانیہ",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781878497/Tanzania_y6n6a2.png",
    x: 1320,
    y: 620,
    width: 360,
    height: 320,
    delayClass: "[animation-delay:200ms]",
    details: "مشرقی افریقہ کے اہم ملک تنزانیہ میں مرکز اصحاب الکساء کی علمی تحریک عروج پر ہے۔",
  },
  {
    slug: "cameroon",
    name: "کیمرون",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781878497/Cemeroon_zbze7l.png",
    x: 1070,
    y: 580,
    width: 230,
    height: 240,
    delayClass: "[animation-delay:600ms]",
    details: "کیمرون کے ساحلی اور پہاڑی علاقوں میں مرکز کے فلاحی نیٹ ورک نے دور دراز کے قبیلوں تک رسائی حاصل کی ہے۔",
  },
  {
    slug: "nigeria",
    name: "نائجیریا",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781878497/Nigeria_uyncxs.png",
    x: 880,
    y: 540,
    width: 240,
    height: 250,
    delayClass: "[animation-delay:1000ms]",
    details: "نائجیریا میں مرکز کی خدمات کا دائرہ کار انتہائی وسیع ہے۔ یہاں نوجوانوں کو ہنر مند بنانے کے لیے تکنیکی تعلیمی ادارے قائم ہیں۔",
  },
  {
    slug: "niger",
    name: "نائجر",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781878497/Niger_zzwfw1.png",
    x: 920,
    y: 310,
    width: 360,
    height: 300,
    delayClass: "[animation-delay:1400ms]",
    details: "مرکز اصحاب الکساء کے تحت نائجر کے پسماندہ خطوں میں خالص علمی نیٹ ورک اور فلاحی منصوبوں کا آغاز کیا گیا ہے۔",
  },
  {
    slug: "burkina-faso",
    name: "برکینا فاسو",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781878497/barkinafasoo_pfrzkg.png",
    x: 700,
    y: 400,
    width: 220,
    height: 190,
    delayClass: "[animation-delay:1800ms]",
    details: "برکینا فاسو میں مرکز نے اپنی اعلیٰ اخلاقی اور علمی روایات کے مطابق یتیم بچوں کی کفالت کا ایک مستقل پروگرام شروع کیا ہے۔",
  },
  {
    slug: "cote-divoire",
    name: "آئیوری کوسٹ",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781878497/Iorycast_cibqhj.png",
    x: 650,
    y: 550,
    width: 205,
    height: 215,
    delayClass: "[animation-delay:2200ms]",
    details: "آئیوری کوسٹ کے شہری اور دہی خطوں میں علمی و فلاحی خدمات کے تحت اسکولوں کی تعمیر نو کی گئی ہے۔",
  },
  {
    slug: "guinea-bissau",
    name: "گنی بساؤ",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781878498/Ganibasao_kagysv.png",
    x: 470,
    y: 460,
    width: 215,
    height: 165,
    delayClass: "[animation-delay:2600ms]",
    details: "جزائر پر مشتمل چھوٹے ملک گنی بساؤ میں مرکز اصحاب الکساء نے غریب ماہی گیروں اور پسماندہ خاندانوں کے لیے معاشی خودمختاری کے چھوٹے پراجیکٹس متعارف کروائے ہیں۔",
  },
];

const menuItems = [
  { name: "تعارف", href: "/about" },
  { name: "علمی خدمات", href: "/academic-services" },
  { name: "فلاحی خدمات", href: "/welfare-services" },
  { name: "ممالک", href: "/countries" },
  { name: "ڈیجیٹل لائبریری", href: "/library" },
  { name: "زیارات", href: "/ziyarat" },
  { name: "اخبار", href: "/news" },
  { name: "ویڈیوز", href: "/videos" },
  { name: "تصاویر", href: "/gallery" },
  { name: "عطیات", href: "/donate" },
  { name: "رابطہ", href: "/contact" },
];

const languages = [
  { name: "عربی", flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906530/iraq_aeukuq.gif", href: "/ar/map" },
  { name: "اردو", flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906529/Pakistan_y2zwci.gif", href: "/ur/map" },
  { name: "فارسی", flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906527/Iran_rtdncz.gif", href: "/fa/map" },
  { name: "English", flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906499/England_q4tw1a.gif", href: "/en/map" }
];

const socialLinks = [
  { name: "Facebook", url: "https://m.facebook.com/100091574370039", svgPath: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" },
  { name: "YouTube", url: "https://youtube.com/@aacenter?si=D-C8iQYB8d17ZFrP", svgPath: "M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.503 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { name: "TikTok", url: "https://www.tiktok.com/@aacenter86?lang=en", svgPath: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.15 1.34 1.41 3.23 2.17 5.14 2.3v3.96c-1.7-.12-3.37-.77-4.65-1.92-.25-.22-.48-.46-.69-.71v6.59c0 5.58-4.59 10.05-10.12 9.81-4.71-.2-8.58-4.22-8.63-8.94-.06-5.8 5.12-10.47 10.87-9.56v4.03c-2.91-.39-5.59 1.66-6.04 4.54-.53 3.39 1.96 6.55 5.37 6.64 3.19.09 5.89-2.34 5.96-5.52V0h-.3z" },
  { name: "Telegram", url: "https://t.me/ashab_alkisaa", svgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.6 1.48-1.55 2.73-2.61 4.17-3.83.16-.14.32-.42-.03-.42-.08 0-.41.1-.96.47-1.15.78-2.67 1.8-5.38 3.63-.44.3-.84.45-1.19.44-.39-.01-1.14-.22-1.7-.4-1.1-.35-1.02-.95.07-1.38 5.4-2.35 9-3.9 10.8-4.65.52-.22 1.08-.37 1.48-.37.15 0 .48.04.69.21.17.15.22.42.22.6z" },
  { name: "Instagram", url: "https://www.instagram.com/ashab_alksa/?hl=a", svgPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07;4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" }
];

function countryStyle(country: Country) {
  return {
    left: `${((country.x - country.width / 2) / CANVAS_W) * 100}%`,
    top: `${((country.y - country.height / 2) / CANVAS_H) * 100}%`,
    width: `${(country.width / CANVAS_W) * 100}%`,
    height: `${(country.height / CANVAS_H) * 100}%`,
  };
}

const countryBySlug = Object.fromEntries(countries.map((c) => [c.slug, c])) as Record<string, Country>;

export default function PerfectMasterPage() {
  const [activeCountry, setActiveCountry] = useState<Country | null>(null);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [activeMenuItem, setSearchQuery] = useState("ممالک");
  const [searchQueryStr, setSearchQueryStr] = useState("");

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("country");
    if (slug && countryBySlug[slug]) {
      setActiveCountry(countryBySlug[slug]);
    }
  }, []);

  return (
    <div dir="rtl" className="h-screen w-full bg-black bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.06)_0%,transparent_70%)] text-white overflow-hidden p-4 md:p-5 flex flex-col justify-between select-none relative [perspective:1500px]">

      {/* 🌊 لہروں (Global Ripples) کی CSS اینیمیشن */}
      <style jsx global>{`
                @keyframes globalDenseRipple {
                    0% { 
                        transform: translate(-50%, -50%) scale(0.01); 
                        opacity: 0.95; 
                    }
                    50% {
                        opacity: 0.5;
                    }
                    100% { 
                        transform: translate(-50%, -50%) scale(1); 
                        opacity: 0; 
                    }
                }
                .animate-global-ripple {
                    position: absolute;
                    width: 2500px;
                    height: 2500px;
                    border-radius: 50%;
                    border: 2px solid rgba(255, 215, 0, 0.35);
                    background: radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 75%);
                    animation: globalDenseRipple 7s cubic-bezier(0.1, 0.4, 0.2, 1) infinite;
                    pointer-events: none;
                }
            `}</style>

      {/* 🌊 پس منظر لہریں: یہ اب گنبد کے پس منظر میں فکس ہیں جو وہیں سے نکل کر پورے اسکرین پر پھیلیں گی */}
      <div className="fixed bottom-[150px] right-[150px] md:bottom-[220px] md:right-[220px] w-0 h-0 z-0 pointer-events-none select-none">
        <div className="animate-global-ripple [animation-delay:0s]" />
        <div className="animate-global-ripple [animation-delay:1.4s]" />
        <div className="animate-global-ripple [animation-delay:2.8s]" />
        <div className="animate-global-ripple [animation-delay:4.2s]" />
        <div className="animate-global-ripple [animation-delay:5.6s]" />
      </div>

      {/* ہیڈر بار */}
      <div className="w-full flex items-center justify-between z-50 relative px-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-zinc-950/50 border border-zinc-900/60 py-1 px-2.5 rounded-xl backdrop-blur-md shadow-lg">
            <span className="font-serif font-bold text-[11px] text-yellow-400 border-l border-zinc-800 pl-2">
              زبان:
            </span>
            <div className="flex items-center gap-1.5">
              {languages.map((lang) => (
                <Link key={lang.name} href={lang.href} className="group cursor-pointer flex items-center justify-center transition-all duration-300">
                  <div className="w-5.5 h-5.5 relative overflow-hidden rounded-full border border-yellow-400/20 shadow-sm group-hover:shadow-[0_0_10px_rgba(255,215,0,0.6)] group-hover:scale-110">
                    <img src={lang.flag} alt={lang.name} className="w-full h-full object-cover scale-125" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="تلاش..."
              value={searchQueryStr}
              onChange={(e) => setSearchQueryStr(e.target.value)}
              className="w-28 md:w-36 px-2.5 py-1 pr-7 text-[11px] rounded-lg bg-zinc-900/60 border border-yellow-400/50 text-yellow-400 placeholder-yellow-500/40 outline-none text-right transition-all duration-300 focus:border-yellow-400 focus:bg-zinc-950/80"
            />
            <svg className="w-2.5 h-2.5 absolute top-1/2 right-2 -translate-y-1/2 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="mr-auto flex items-center gap-4 pl-2">
          <div className="flex items-center gap-1.5">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="w-6.5 h-6.5 rounded-md bg-zinc-900/60 border border-yellow-400/10 flex items-center justify-center text-yellow-400/70 hover:text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400/10 shadow-md">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d={social.svgPath} /></svg>
              </a>
            ))}
          </div>

          <Link href="/" className="group flex items-center gap-1.5 px-3 py-1 rounded-xl bg-zinc-900/60 border border-yellow-400/20 transition-all duration-300 hover:border-yellow-400 hover:bg-zinc-950">
            <span className="text-xs font-bold text-yellow-400 transition-colors group-hover:text-white">ہوم</span>
            <svg className="w-3.5 h-3.5 text-yellow-400 transition-transform duration-300 group-hover:scale-110 fill-current" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* مینو رو */}
      <div className="w-full mt-2 z-40 relative flex justify-center">
        <div className="flex items-center justify-center gap-2 max-w-5xl px-4 py-2 flex-wrap">
          {menuItems.map((item) => {
            const isActive = activeMenuItem === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setSearchQuery(item.name)}
                className={`relative px-5 py-2 text-xs md:text-sm font-bold font-serif transition-all duration-300 rounded-xl overflow-hidden group shadow-[0_4px_12px_rgba(0,0,0,0.6)] ${isActive
                  ? "text-black bg-yellow-500 border-b-2 border-yellow-600 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
                  : "text-zinc-800 bg-white/90 border-b-4 border-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-yellow-400 hover:translate-y-[2px]"
                  }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-all duration-300 ease-out group-hover:w-full ${isActive ? "w-full" : "w-0"}`} />
              </button>
            );
          })}
        </div>
      </div>

      {/* مرکزی کینوس */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-full mx-auto relative z-10 -mt-10">
        <div className="border-y border-yellow-400/5 py-1 px-4 mb-2 mt-16 flex-shrink-0 backdrop-blur-sm">
          <h2 className="text-center text-xs md:text-sm font-medium leading-relaxed font-serif text-yellow-400/80 tracking-wide">
            اصحاب الکساء بین الاقوامی مرکز کی فلاحی و علمی خدمات
          </h2>
        </div>

        {/* 🗺️ نقشہ کینوس */}
        <div className="relative w-[95%] aspect-[1920/1080] max-h-[78vh] [transform-style:preserve-3d] mx-auto bg-[linear-gradient(rgba(255,215,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.01)_1px,transparent_1px)] bg-[size:60px_60px]">

          {/* افریقہ کے ممالک */}
          {countries.map((country) => {
            const isHovered = hoveredSlug === country.slug;
            const isDimmed = hoveredSlug !== null && !isHovered;

            return (
              <button
                key={country.slug}
                type="button"
                className="absolute block cursor-pointer border-0 bg-transparent p-0 outline-none select-none transition-all duration-700 ease-out"
                style={{
                  ...countryStyle(country),
                  zIndex: isHovered ? 50 : 20,
                  opacity: isDimmed ? 0.25 : 1,
                }}
                onMouseEnter={() => setHoveredSlug(country.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                onClick={() => setActiveCountry(country)}
              >
                <div className="relative h-full w-full flex items-center justify-center [transform-style:preserve-3d]">
                  <div className="relative z-10 transition-all duration-500 ease-out will-change-transform" style={{ transform: isHovered ? "scale(1.24) translateZ(60px)" : "scale(1) translateZ(0px)" }}>
                    <img src={country.image} alt={country.name} draggable={false} className="block h-full w-full select-none object-contain pointer-events-none transition-all duration-500" style={{ filter: isHovered ? "brightness(1.15) drop-shadow(0px 0px 40px #FFD700) drop-shadow(0px 25px 50px rgba(0,0,0,0.9))" : "brightness(0.95) drop-shadow(0px 12px 24px rgba(0, 0, 0, 0.95))" }} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 🕌 فکسڈ ڈیزائن - گنبد کا کنٹینر */}
      <div className="fixed bottom-0 -right-10 md:-right-16 w-[320px] md:w-[450px] h-[320px] md:h-[450px] z-[60] pointer-events-none select-none">
        {/* گنبد کی مین امیج */}
        <img
          src="https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781946691/gunbad_flag_kkaqvl.png"
          className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(255,215,0,0.35)] relative z-10"
          alt="سنہری گنبد اور پرچمِ مبارک"
          draggable={false}
        />
      </div>

      {/* 🛡️ بائیں طرف لوگو */}
      <div className="fixed bottom-28 left-6 md:left-10 w-[130px] md:w-[160px] h-[130px] md:h-[160px] z-[60] pointer-events-none select-none">
        <img
          src="https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781948799/Markazlogo_vima6r.png"
          className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(255,215,0,0.2)]"
          alt="مرکز اصحاب الکساء لوگو"
          draggable={false}
        />
      </div>

      {/* گائیڈ ٹیکسٹ */}
      <p className="text-center text-sm font-bold text-yellow-400 md:text-base animate-pulse tracking-wide pb-10 -mt-10 z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
        تفصیلات دیکھنے کے لیے مطلوبہ ملک پر کلک کریں
      </p>

      {/* پاپ اپ بکس */}
      {activeCountry && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md" onClick={() => setActiveCountry(null)}>
          <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-yellow-400/30 bg-zinc-950 p-6 text-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setActiveCountry(null)} className="absolute left-4 top-4 text-2xl font-bold text-zinc-400 transition-colors hover:text-yellow-400">✕</button>
            <h3 className="mb-4 border-b border-zinc-800 pb-3 text-center text-2xl font-bold font-serif text-yellow-400 md:text-3xl">{activeCountry.name}</h3>
            <p className="text-right text-lg leading-relaxed text-zinc-300 font-medium">{activeCountry.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";

type Country = {
  slug: string;
  name: string;
  image: string;
  x: number;
  y: number;
  width: number;
  height: number;
  details: string;
  videoSrc: string; // 🎯 ویڈیو پاتھ
  delayClass: string;
};

const CANVAS_W = 1920;
const CANVAS_H = 1080;

const countries: Country[] = [
  {
    slug: "tanzania",
    name: "تنزانيا",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536372/Tanzania_miiyd8.png", // 🎯 اپڈیٹڈ عربی امیج
    x: 1320,
    y: 620,
    width: 360,
    height: 320,
    delayClass: "[animation-delay:200ms]",
    videoSrc: "/videos/tanzania-arabic.webm",
    details: "في تنزانيا بشرق أفريقيا، بلغت الحركة العلمية لمركز أصحاب الكساء ذروتها ونشاطها المبارك.",
  },
  {
    slug: "cameroon",
    name: "الكاميرون",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536372/Al-kameroon_yqd4xw.png", // 🎯 اپڈیٹڈ عربی امیج
    x: 1070,
    y: 540,
    width: 230,
    height: 240,
    delayClass: "[animation-delay:600ms]",
    videoSrc: "/videos/cameroon-arabic.webm",
    details: "في المناطق الساحلية والجبلية بالكاميرون، وصلت الشبكة الخيرية للمركز إلى القبائل النائية.",
  },
  {
    slug: "nigeria",
    name: "نيجيريا",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536376/Nigeria_rfvnxp.png", // 🎯 اپڈیٹڈ عربی امیج
    x: 880,
    y: 580,
    width: 240,
    height: 250,
    delayClass: "[animation-delay:1000ms]",
    videoSrc: "/videos/nigeria-arabic.webm",
    details: "نطاق خدمات المركز في نيجيريا واسع للغاية، حيث تم إنشاء مؤسسات تعليمية تقنية لتمكين الشباب.",
  },
  {
    slug: "niger",
    name: "النيجر",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536372/Al-neger_r9kx0k.png", // 🎯 اپڈیٹڈ عربی امیج
    x: 920,
    y: 250,
    width: 360,
    height: 300,
    delayClass: "[animation-delay:1400ms]",
    videoSrc: "/videos/niger-arabic.webm",
    details: "تحت رعاية مركز أصحاب الكساء، تم إطلاق شبكة علمية ومشاريع خيرية خالصة في المناطق النائية بالنيجر.",
  },
  {
    slug: "burkina-faso",
    name: "بوركينا فاسو",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536372/Borkinafaso_jnhnq3.png", // 🎯 اپڈیٹڈ عربی امیج
    x: 650,
    y: 260,
    width: 220,
    height: 190,
    delayClass: "[animation-delay:1800ms]",
    videoSrc: "/videos/burkina-arabic.webm",
    details: "في بوركينا فاسو، بدأ المركز برنامجاً مستداماً لكفالة الأطفال الأيتام تماشياً مع التقاليد الأخلاقية والعلمية السامية.",
  },
  {
    slug: "cote-divoire",
    name: "ساحل العاج",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536371/Sahil-al-aaj_xrrpxg.png", // 🎯 اپڈیٹڈ عربی امیج
    x: 650,
    y: 550,
    width: 205,
    height: 215,
    delayClass: "[animation-delay:2200ms]",
    videoSrc: "/videos/cote-divoire-arabic.webm",
    details: "تقف الحسينية اليوم في تلك الأصقاع التي يتلوى أطفالها عطشاً، لتحفر مئات الآبار من الماء الزلال وتهبهم الحياة بتوجيه من مركز أصحاب الكساء علیهم السلام.",
  },
  {
    slug: "guinea-bissau",
    name: "غينيا بيساو",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536374/Ghaneya-basao_rpsfa5.png", // 🎯 اپڈیٹڈ عربی امیج
    x: 470,
    y: 460,
    width: 215,
    height: 165,
    delayClass: "[animation-delay:2600ms]",
    videoSrc: "/videos/guinea-arabic.webm",
    details: "في دولة غينيا بيساو الصغيرة، قدم مركز أصحاب الكساء مشاريع تمكين اقتصادي صغيرة للصيادين الفقراء والعائلات المحتاجة.",
  },
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

export default function ArabicMapPage() {
  const [activeCountry, setActiveCountry] = useState<Country | null>(null);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("country");
    if (slug && countryBySlug[slug]) {
      setActiveCountry(countryBySlug[slug]);
    }
  }, []);

  return (
    <div className="w-full bg-black relative flex-1 flex flex-col justify-between [perspective:1500px] p-4 md:p-5">
      {/* 🗺️ الخريطة المركزية */}
      <div className="flex-1 flex flex-col items-center justify-start pt-2 w-full max-w-full mx-auto relative z-10">
        <div className="relative w-[95%] aspect-[1920/1080] max-h-[58vh] [transform-style:preserve-3d] mx-auto bg-[linear-gradient(rgba(212,175,55,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.01)_1px,transparent_1px)] bg-[size:60px_60px]">
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
                    <img src={country.image} alt={country.name} draggable={false} className="block h-full w-full select-none object-contain pointer-events-none transition-all duration-500" style={{ filter: isHovered ? "brightness(1.15) drop-shadow(0px 0px 40px #D4AF37) drop-shadow(0px 25px 50px rgba(0,0,0,0.9))" : "brightness(0.95) drop-shadow(0px 12px 24px rgba(0, 0, 0, 0.95))" }} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 🕌 الشعار والگنبد */}
      <div className="fixed bottom-36 left-6 md:bottom-40 md:left-10 w-[130px] md:w-[160px] h-[130px] md:h-[160px] z-[30] pointer-events-none select-none flex items-end">
        <img src="https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781948799/Markazlogo_vima6r.png" className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(212,175,55,0.2)]" alt="الشعار" draggable={false} />
      </div>

      <div className="fixed bottom-6 -right-10 md:bottom-10 md:-right-16 w-[320px] md:w-[450px] h-[320px] md:h-[450px] z-[30] pointer-events-none select-none flex items-end">
        <img src="https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781946691/gunbad_flag_kkaqvl.png" className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(212,175,55,0.35)]" alt="الگنبد" draggable={false} />
      </div>

      {/* 📍 شريط التنقل السفلي */}
      <div className="w-full max-w-5xl mx-auto px-4 flex flex-col items-center mt-auto pb-4 relative z-40">
        <div className="flex items-center gap-1.5 md:gap-3 overflow-x-auto bg-[#1a1a1a]/80 border border-[#D4AF37]/30 p-2 rounded-xl backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.8)] hide-scrollbar w-full justify-start md:justify-center pointer-events-auto">
          {countries.map((country) => {
            const isActive = hoveredSlug === country.slug || activeCountry?.slug === country.slug;
            return (
              <button
                key={country.slug}
                onClick={() => setActiveCountry(country)}
                onMouseEnter={() => setHoveredSlug(country.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                className={`group relative flex flex-col items-center justify-center min-w-[60px] md:min-w-[75px] h-[60px] md:h-[70px] rounded-lg p-1 transition-all duration-300 ${isActive ? "bg-gradient-to-t from-[#D4AF37]/40 to-transparent border border-[#D4AF37]" : "bg-zinc-900/50 border border-zinc-700"}`}
              >
                <div className="flex-1 flex items-center justify-center w-full relative">
                  <img src={country.image} alt={country.name} className={`max-h-[25px] max-w-[25px] md:max-h-[30px] md:max-w-[30px] object-contain transition-all duration-500 ease-out z-10 ${isActive ? "scale-[1.3] -translate-y-2" : "group-hover:-translate-y-3 group-hover:scale-[1.5]"}`} draggable={false} />
                </div>
                <span className={`text-[9px] md:text-[11px] font-serif mt-0.5 ${isActive ? "text-[#D4AF37] font-bold" : "text-zinc-300"}`}>{country.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 🎬 نافذة العرض المنبثقة للـ WebM مع المشغل */}
      {activeCountry && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md" onClick={() => setActiveCountry(null)}>
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#D4AF37]/30 bg-zinc-950 p-6 text-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setActiveCountry(null)} className="absolute left-4 top-4 text-2xl font-bold text-zinc-400 transition-colors hover:text-[#D4AF37]">✕</button>
            <h3 className="mb-4 border-b border-zinc-800 pb-3 text-center text-xl font-bold font-serif text-[#D4AF37] md:text-2xl">{activeCountry.name}</h3>
            <p className="text-right text-base leading-relaxed text-white font-medium mb-5">{activeCountry.details}</p>

            {/* 🎥 مشغل الفيديو المدمج الخفيف */}
            <div className="w-full rounded-xl overflow-hidden border border-[#D4AF37]/20 bg-black aspect-video shadow-lg">
              <video
                src={activeCountry.videoSrc}
                controls
                autoPlay
                preload="metadata"
                className="w-full h-full object-contain"
              >
                المتصفح الخاص بك لا يدعم تشغيل الفيديو.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
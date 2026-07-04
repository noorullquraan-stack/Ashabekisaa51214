"use client";

import { useEffect, useState } from "react";
import { countries, type Country } from "./countriesData";

const CANVAS_W = 1920;
const CANVAS_H = 1080;

function countryStyle(country: Country) {
  return {
    left: `${((country.x - country.width / 2) / CANVAS_W) * 100}%`,
    top: `${((country.y - country.height / 2) / CANVAS_H) * 100}%`,
    width: `${(country.width / CANVAS_W) * 100}%`,
    height: `${(country.height / CANVAS_H) * 100}%`,
  };
}

const countryBySlug = Object.fromEntries(countries.map((c) => [c.slug, c])) as Record<string, Country>;

export default function PersianMapPage() {
  const [activeCountry, setActiveCountry] = useState<Country | null>(null);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("country");
    if (slug && countryBySlug[slug]) {
      setActiveCountry(countryBySlug[slug]);
    }
  }, []);

  return (
    <div className="w-full bg-black relative flex-1 flex flex-col justify-between [perspective:1500px] p-4 md:p-5 overflow-hidden">

      {/* 🗺️ مرکزی کینوس نقشہ */}
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

      {/* 🕌 فکسڈ لوگو - بالکل آپ کی سیٹنگ کے مطابق لاکڈ */}
      <div className="fixed left-4 z-[35] pointer-events-none select-none flex items-end bottom-[45%] w-[60px] h-[60px] md:bottom-40 md:left-10 md:w-[160px] md:h-[160px]">
        <img src="https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781948799/Markazlogo_vima6r.png" className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(212,175,55,0.2)]" alt="لوگو" draggable={false} />
      </div>

      {/* 🛡️ فکسڈ گنبد - معمولی سا اوپر کیا گیا ہے (28% سے 32% اور ڈیسک ٹاپ پر 10 سے 12) */}
      <div className="fixed -right-6 z-[35] pointer-events-none select-none flex items-end bottom-[32%] w-[150px] h-[150px] md:bottom-12 md:-right-16 md:w-[450px] md:h-[450px]">
        <img src="https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781946691/gunbad_flag_kkaqvl.png" className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(212,175,55,0.35)]" alt="گنبد" draggable={false} />
      </div>

      {/* 📍 ممالک کی نیویگیشن پٹی - موبائل پر تھوڑا نیچے کی گئی ہے */}
      <div className="w-full max-w-5xl mx-auto px-4 flex flex-col items-center mt-auto relative z-50 -top-[30px] -mb-[30px] md:top-auto md:mb-auto md:pb-4">
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

      {/* پاپ اپ بکس */}
      {activeCountry && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md" onClick={() => setActiveCountry(null)}>
          <div dir="rtl" className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#D4AF37]/30 bg-zinc-950 p-6 text-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setActiveCountry(null)} className="absolute left-4 top-4 text-2xl font-bold text-zinc-400 transition-colors hover:text-[#D4AF37]">✕</button>
            <h3 className="mb-4 border-b border-zinc-800 pb-3 text-center text-xl font-bold font-serif text-[#D4AF37] md:text-2xl">{activeCountry.name}</h3>
            <p className="text-right text-base leading-relaxed text-white font-medium">{activeCountry.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}
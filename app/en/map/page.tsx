"use client";

import { useEffect, useRef, useState } from "react";
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
};

const CANVAS_W = 1920;
const CANVAS_H = 1080;

const countries: Country[] = [
  {
    slug: "guinea-bissau",
    name: "گنی بساؤ",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781774147/%DA%AF%D9%86%DB%8C_%D8%A8%D8%B3%D8%A7%D8%A4_s0l8lz.png",
    x: 450,
    y: 480,
    width: 140,
    height: 95,
    details: "جزائر پر مشتمل چھوٹے ملک گنی بساؤ میں مرکز اصحاب الکساء نے غریب ماہی گیروں اور پسماندہ خاندانوں کے لیے معاشی خودمختاری کے چھوٹے پراجیکٹس متعارف کروائے ہیں، جس سے مقامی روزگار میں واضح بہتری دیکھنے کو مل رہی ہے۔",
  },
  {
    slug: "cote-divoire",
    name: "آئیوری کوسٹ",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781774147/%D8%A2%D8%A6%DB%8C%D9%88%D8%B1%DB%8C_%DA%A9%D9%88%D8%B3%D9%B9_k15bi7.png",
    x: 670,
    y: 620,
    width: 120,
    height: 130,
    details: "آئیوری کوسٹ کے شہری اور دہی خطوں میں علمی و فلاحی خدمات کے تحت اسکولوں کی تعمیر نو کی گئی ہے۔ مرکز یہاں اساتذہ کی تربیت اور جدید تعلیمی نصاب کی فراہمی کو یقینی بنا رہا ہے تاکہ نسلِ نو کی فکری اور اخلاقی نشوونما بہتر ہو سکے۔",
  },
  {
    slug: "burkina-faso",
    name: "برکینا فاسو",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781774147/%D8%A8%D8%B1%DA%A9%DB%8C%D9%86%D8%A7_%D9%81%D8%A7%D8%B3%D9%88_uakvnl.png",
    x: 730,
    y: 510,
    width: 130,
    height: 110,
    details: "برکینا فاسو میں مرکز نے اپنی اعلیٰ اخلاقی اور علمی روایات کے مطابق یتیم بچوں کی کفالت کا ایک مستقل پروگرام شروع کیا ہے۔ ان بچوں کو اعلیٰ تعلیم کے ساتھ ساتھ رہائش اور خوراک کا مکمل تحفظ دیا جا رہا ہے تاکہ وہ معاشرے کے مفید شہری بن سکیں۔",
  },
  {
    slug: "niger",
    name: "نائجر",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781773325/%D9%86%D8%A7%D8%A6%D8%AC%D8%B1_tnmcae.png",
    x: 950,
    y: 426,
    width: 200,
    height: 160,
    details: "مرکز اصحاب الکساء کے تحت نائجر کے پسماندہ خطوں میں خالص علمی نیٹ ورک اور فلاحی منصوبوں کا آغاز کیا گیا ہے۔ یہاں مقامی آبادی کے لیے پینے کے صاف پانی کے کنویں اور بنیادی تعلیمی مراکز قائم کیے جا رہے ہیں تاکہ صحرائی زندگی میں ایک مثبت تبدیلی لائی جا سکے۔",
  },
  {
    slug: "nigeria",
    name: "نائجیریا",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781774147/%D9%86%D8%A7%D8%A6%D8%AC%D8%B1%DB%8C%D8%A7_xlunrt.png",
    x: 835,
    y: 550,
    width: 140,
    height: 150,
    details: "نائجیریا میں مرکز کی خدمات کا دائرہ کار انتہائی وسیع ہے۔ یہاں نوجوانوں کو ہنر مند بنانے کے لیے تکنیکی تعلیمی ادارے اور مستحق خاندانوں کے لیے راشن کی باقاعدہ فراہمی کا فلاحی نظام کامیابی سے چل رہا ہے۔",
  },
  {
    slug: "cameroon",
    name: "کیمرون",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781774147/%DA%A9%DB%8C%D9%85%D8%B1%D9%88%D9%86_eta6kx.png",
    x: 1000,
    y: 620,
    width: 125,
    height: 135,
    details: "کیمرون کے ساحلی اور پہاڑی علاقوں میں مرکز کے فلاحی نیٹ ورک نے دور دراز کے قبیلوں تک رسائی حاصل کی ہے۔ یہاں بنیادی صحت کے مراکز کا قیام عمل میں لایا گیا ہے، جہاں بچوں اور ماؤں کو مفت طبی سہولیات فراہم کی جاتی ہیں۔",
  },
  {
    slug: "tanzania",
    name: "تنزانیہ",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781774147/%D8%AA%D9%86%D8%B2%D8%A7%D9%86%DB%8C%DB%81_vxibuw.png",
    x: 1450,
    y: 760,
    width: 180,
    height: 150,
    details: "مشرقی افریقہ کے اہم ملک تنزانیہ میں مرکز اصحاب الکساء کی علمی تحریک عروج پر ہے۔ یہاں جدید لائبریریوں کا قیام، اسکالرشپ پروگرامز، اور صحت کے شعبے میں فری میڈیکل کیمپس کے ذریعے ہزاروں خاندانوں کو مفت علاج اور ادویات پہنچائی جا رہی ہیں۔",
  },
];

const countryBySlug = Object.fromEntries(countries.map((c) => [c.slug, c])) as Record<string, Country>;

function countryStyle(country: Country) {
  return {
    left: `${((country.x - country.width / 2) / CANVAS_W) * 100}%`,
    top: `${((country.y - country.height / 2) / CANVAS_H) * 100}%`,
    width: `${(country.width / CANVAS_W) * 100}%`,
    height: `${(country.height / CANVAS_H) * 100}%`,
  };
}

function openCountry(slug: string, setActiveCountry: (c: Country | null) => void) {
  const country = countryBySlug[slug];
  if (!country) return;
  setActiveCountry(country);
  const url = new URL(window.location.href);
  url.searchParams.set("country", slug);
  window.history.replaceState(null, "", url.toString());
}

function closeCountry(setActiveCountry: (c: Country | null) => void) {
  setActiveCountry(null);
  const url = new URL(window.location.href);
  url.searchParams.delete("country");
  window.history.replaceState(null, "", url.toString());
}

export default function UrduMapPage() {
  const [activeCountry, setActiveCountry] = useState<Country | null>(null);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [jsReady, setJsReady] = useState(false);
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setJsReady(true);

    const slug = new URLSearchParams(window.location.search).get("country");
    if (slug && countryBySlug[slug]) {
      setActiveCountry(countryBySlug[slug]);
    }

    const map = mapRef.current;
    if (!map) return;

    const handleNativeClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const hit = target?.closest("[data-country-slug]");
      if (!hit || !map.contains(hit)) return;

      event.preventDefault();
      event.stopPropagation();

      const countrySlug = hit.getAttribute("data-country-slug");
      if (countrySlug) openCountry(countrySlug, setActiveCountry);
    };

    map.addEventListener("click", handleNativeClick, true);
    return () => map.removeEventListener("click", handleNativeClick, true);
  }, []);

  return (
    <div dir="rtl" className="min-h-screen w-full bg-black text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-4 md:px-6 md:py-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <Link href="/" className="text-lg font-bold text-zinc-500 transition-colors hover:text-amber-400">
            ← واپس جائیں
          </Link>
          {!jsReady && (
            <span className="text-xs text-zinc-500">لوڈ ہو رہا ہے…</span>
          )}
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <h2 className="text-center text-xl font-bold leading-relaxed text-amber-400 font-serif md:text-2xl lg:text-3xl">
            إِنَّ الْحُسَيْنَ مِصْبَاحُ الْهُدَى وَسَفِينَةُ النَّجَاةِ
          </h2>

          <div ref={mapRef} className="relative w-full max-w-4xl aspect-video bg-black">
            {[...countries]
              .sort((a, b) => {
                if (a.slug === hoveredSlug) return 1;
                if (b.slug === hoveredSlug) return -1;
                return a.width * a.height - b.width * b.height;
              })
              .map((country) => {
                const isHovered = hoveredSlug === country.slug;
                const isDimmed = hoveredSlug !== null && !isHovered;

                return (
                  <button
                    key={country.slug}
                    type="button"
                    data-country-slug={country.slug}
                    aria-label={country.name}
                    className="absolute block cursor-pointer border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    style={{
                      ...countryStyle(country),
                      zIndex: isHovered ? 40 : 20,
                      touchAction: "manipulation",
                      opacity: isDimmed ? 0.35 : 1,
                    }}
                    onMouseEnter={() => setHoveredSlug(country.slug)}
                    onMouseLeave={() => setHoveredSlug(null)}
                    onClick={() => openCountry(country.slug, setActiveCountry)}
                  >
                    <span
                      className="block h-full w-full transition-transform duration-300 ease-out"
                      style={{
                        transform: isHovered ? "scale(1.15)" : "scale(1)",
                        transformOrigin: "center center",
                      }}
                    >
                      <img
                        src={country.image}
                        alt={country.name}
                        draggable={false}
                        className="block h-full w-full select-none object-contain pointer-events-none"
                        style={{
                          filter: isHovered
                            ? "drop-shadow(0px 18px 28px rgba(245, 158, 11, 0.85)) drop-shadow(0px 0px 16px rgba(255, 255, 255, 0.45))"
                            : "drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.9))",
                        }}
                      />
                    </span>
                  </button>
                );
              })}
          </div>
        </div>

        <p className="mt-4 pb-2 text-center text-base font-semibold text-amber-500/90 md:text-lg">
          تفصیلات دیکھنے کے لیے مطلوبہ ملک پر کلک کریں
        </p>
      </div>

      {activeCountry && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => closeCountry(setActiveCountry)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-amber-500/30 bg-zinc-950 p-6 text-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => closeCountry(setActiveCountry)}
              className="absolute left-4 top-4 text-2xl font-bold text-zinc-400 transition-colors hover:text-amber-400"
            >
              ✕
            </button>

            <h3 className="mb-4 border-b border-zinc-800 pb-3 text-center text-2xl font-bold font-serif text-amber-400 md:text-3xl">
              {activeCountry.name}
            </h3>

            <p className="text-right text-lg leading-relaxed text-zinc-300">{activeCountry.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}

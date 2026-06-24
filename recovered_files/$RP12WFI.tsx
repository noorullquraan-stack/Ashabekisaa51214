"use client";

import { useState, useEffect } from "react";

// تمام 7 ممالک کا ڈیٹا
const africanCountries = [
  {
    id: "ne",
    name: "نائجر",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781773325/%D9%86%D8%A7%D8%A6%D8%AC%D8%B1_tnmcae.png",
    x: 130, y: 55, width: 95, height: 95,
    hoverClass: "hover:-translate-y-5",
    labelYOffset: -10,
    details: "مرکز اصحاب الکساء کے تحت نائجر کے پسماندہ خطوں میں خالص علمی نیٹ ورک اور فلاحی منصوبوں کا آغاز کیا گیا ہے۔ یہاں مقامی آبادی کے لیے پینے کے صاف پانی کے کنویں اور بنیادی تعلیمی مراکز قائم کیے جا رہے ہیں تاکہ صحرائی زندگی میں ایک مثبت تبدیلی لائی جا سکے۔"
  },
  {
    id: "ng",
    name: "نائیجیریا",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781774147/%D9%86%D8%A7%D8%A6%D8%AC%D8%B1%DB%8C%D8%A7_xlunrt.png",
    x: 145, y: 135, width: 90, height: 90,
    hoverClass: "hover:scale-105",
    labelYOffset: 105,
    details: "نائیجیریا میں مرکز کی خدمات کا دائرہ کار انتہائی وسیع ہے۔ یہاں نوجوانوں کو ہنر مند بنانے کے لیے تکنیکی تعلیمی ادارے (Technical Institutes) اور مستحق خاندانوں کے لیے راشن کی باقاعدہ فراہمی کا فلاحی نظام کامیابی سے چل رہا ہے۔"
  },
  {
    id: "tz",
    name: "تنزانیہ",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781774147/%D8%AA%D9%86%D8%B2%D8%A7%D9%86%DB%8C%DB%81_vxibuw.png",
    x: 270, y: 205, width: 105, height: 105,
    hoverClass: "hover:translate-y-4 hover:translate-x-3",
    labelYOffset: 122,
    details: "مشرقی افریقہ کے اہم ملک تنزانیہ میں مرکز اصحاب الکساء کی علمی تحریک عروج پر ہے۔ یہاں جدید لائبریریوں کا قیام، اسکالرشپ پروگرامز، اور صحت کے شعبے میں فری میڈیکل کیمپس کے ذریعے ہزاروں خاندانوں کو مفت علاج اور ادویات پہنچائی جا رہی ہیں۔"
  },
  {
    id: "cm",
    name: "کیمرون",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781774147/%DA%A9%DB%8C%D9%85%D8%B1%D9%88%D9%86_eta6kx.png",
    x: 210, y: 180, width: 80, height: 80,
    hoverClass: "hover:-translate-x-6 hover:translate-y-3",
    labelYOffset: 95,
    details: "کیمرون کے ساحلی اور پہاڑی علاقوں میں مرکز کے فلاحی نیٹ ورک نے دور دراز کے قبیلوں تک رسائی حاصل کی ہے۔ یہاں بنیادی صحت کے مراکز (Dispensaries) کا قیام عمل میں لایا گیا ہے، جہاں بچوں اور ماؤں کو مفت طبی سہولیات فراہم کی جاتی ہیں۔"
  },
  {
    id: "bf",
    name: "برکینا فاسو",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781774147/%D8%A8%D8%B1%DA%A9%DB%8C%D9%86%D8%A7_%D9%81%D8%A7%D8%B3%D9%88_uakvnl.png",
    x: 80, y: 120, width: 70, height: 70,
    hoverClass: "hover:-translate-y-6 hover:-translate-x-4",
    labelYOffset: -10,
    details: "برکینا فاسو میں مرکز نے اپنی اعلیٰ اخلاقی اور علمی روایات کے مطابق یتیم بچوں کی کفالت کا ایک مستقل پروگرام شروع کیا ہے۔ ان بچوں کو اعلیٰ تعلیم کے ساتھ ساتھ رہائش اور خوراک کا مکمل تحفظ دیا جا رہا ہے تاکہ وہ معاشرے کے مفید شہری بن سکیں۔"
  },
  {
    id: "ci",
    name: "آئیوری کوسٹ",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781774147/%D8%A2%D8%A6%DB%8C%D9%88%D8%B1%DB%8C_%DA%A9%D9%88%D8%B3%D9%B9_k15bi7.png",
    x: 45, y: 145, width: 65, height: 65,
    hoverClass: "hover:-translate-x-4 hover:translate-y-6",
    labelYOffset: 78,
    details: "آئیوری کوسٹ کے شہری اور دہی خطوں میں علمی و فلاحی خدمات کے تحت اسکولوں کی تعمیر نو کی گئی ہے۔ مرکز یہاں اساتذہ کی تربیت اور جدید تعلیمی نصاب کی فراہمی کو یقینی بنا رہا ہے تاکہ نسلِ نو کی فکری اور اخلاقی نشوونما بہتر ہو سکے۔"
  },
  {
    id: "gw",
    name: "گنی بساؤ",
    image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781774147/%DA%AF%D9%86%DB%8C_%D8%A8%D8%B3%D8%A7%D8%A4_s0l8lz.png",
    x: 15, y: 125, width: 55, height: 55,
    hoverClass: "hover:-translate-y-4 hover:-translate-x-4",
    labelYOffset: -10,
    details: "جزائر پر مشتمل چھوٹے ملک گنی بساؤ میں مرکز اصحاب الکساء نے غریب ماہی گیروں اور پسماندہ خاندانوں کے لیے معاشی خودمختاری کے چھوٹے پراجیکٹس متعارف کروائے ہیں، جس سے مقامی روزگار میں واضح بہتری دیکھنے کو مل رہی ہے۔"
  }
];

export default function PremiumAfricaMapPage() {
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // کلک کرنے پر پورا صفحہ کھلنے والا کامپوننٹ
  const CountryDetailPage = ({ country, onClose }: { country: any; onClose: () => void }) => {
    return (
      <div
        className="fixed inset-0 z- flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fadeIn"
        onClick={onClose}
        dir="rtl"
      >
        {/* اسکرد (Overlay) کو کلک کرنے سے بند ہوگا */}
        <div
          className="w-full h-full absolute top-0 left-0"
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        />

        {/* اصل پیج (Content) */}
        <div
          className="relative w-full max-w-4xl h-[95vh] bg-zinc-950 border border-amber-500/30 rounded-2xl shadow-[0_0_50px_rgba(245,158,11,0.15)] overflow-hidden flex flex-col animate-slideUp"
          onClick={(e) => e.stopPropagation()} // پیج کے اندر کلک کرنے سے بند نہ ہو
        >
          {/* ہیڈر */}
          <div className="bg-zinc-900/50 border-b border-amber-500/20 p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/40">
                <span className="text-2xl">🌍</span>
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                  {country.name}
                </h2>
                <p className="text-amber-500/80 text-sm mt-1">مرکز اصحاب الکساء کی خدمات</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-red-500/20 hover:text-red-400 text-zinc-400 flex items-center justify-center transition-all border border-zinc-700 hover:border-red-500/50"
            >
              ✕
            </button>
          </div>

          {/* کونٹینٹ (تفصیلات) */}
          <div className="flex-1 overflow-y-auto p-8 bg-gradient-to-b from-zinc-950 to-black">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl leading-relaxed text-zinc-200 font-medium">
                {country.details}
              </p>

              <div className="mt-8 p-6 rounded-xl bg-zinc-900/40 border border-dashed border-zinc-700">
                <h3 className="text-amber-400 font-bold mb-3 text-lg">📊 اعداد و شمار</h3>
                <p className="text-zinc-400 text-sm">
                  اس حصے میں آپ اس ملک سے متعلق اعداد و شمار، تصاویر، ویڈیوز یا گرافز شامل کر سکتے ہیں۔
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800 hover:border-amber-500/30 transition-colors cursor-pointer">
                  <div className="text-2xl mb-2">📷</div>
                  <div className="text-zinc-300 font-medium">فلاحی گیلری دیکھیں</div>
                </div>
                <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800 hover:border-amber-500/30 transition-colors cursor-pointer">
                  <div className="text-2xl mb-2">📹</div>
                  <div className="text-zinc-300 font-medium">ڈاکومنٹری دیکھیں</div>
                </div>
              </div>
            </div>
          </div>

          {/* فوٹر */}
          <div className="p-6 border-t border-amber-500/20 bg-zinc-900/30 flex justify-between items-center">
            <span className="text-zinc-500 text-sm">
              کلک کریں: {country.name}
            </span>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-lg transition-all shadow-lg hover:shadow-amber-500/20"
            >
              واپس جائیں
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white flex flex-col items-center justify-between py-6 px-4 overflow-hidden relative selection:bg-amber-500/20">

      {/* 🌍 مدہم بیک گراؤنڈ */}
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-screen opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1924&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.02)_0%,transparent_60%)] pointer-events-none" />

      {/* 🎨 کسٹم اسٹائلز */}
      <style dangerouslySetInnerHTML={{
        __html: `
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp { from { opacity: 0; transform: translateY(50px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
                .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
                .animate-slideUp { animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                
                .country-group { transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1); }
                .country-image { 
                    filter: drop-shadow(0px 6px 12px rgba(0,0,0,0.95)) drop-shadow(0px 0px 4px rgba(245, 158, 11, 0.25)); 
                    transition: filter 0.4s ease, opacity 0.4s ease; 
                    cursor: pointer; 
                    opacity: 0.88; 
                }
                .group:hover .country-image { 
                    filter: drop-shadow(0px 20px 40px rgba(245, 158, 11, 0.75)) drop-shadow(0px 0px 25px rgba(255, 255, 255, 0.55)); 
                    opacity: 1; 
                }
                .svg-canvas:hover .group:not(:hover) .country-image { opacity: 0.22; filter: grayscale(0.5) contrast(0.85); }
                @keyframes headerEntrance { from { opacity: 0; transform: translateY(-10px); filter: blur(3px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
                .animate-header { animation: headerEntrance 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .country-label { font-family: 'Arial', sans-serif; font-weight: bold; fill: #fbbf24; text-shadow: 0px 2px 5px rgba(0,0,0,1); font-size: 10px; pointer-events: none; opacity: 0; transition: opacity 0.3s ease; text-anchor: middle; }
                .group:hover .country-label { opacity: 1; }
              `}} />

      {/* 🔝 ہیڈنگ */}
      <header className="w-full text-center z-10 pt-2 animate-header">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-400 to-amber-100 drop-shadow-[0_2px_10px_rgba(245,158,11,0.15)]" style={{ fontFamily: "Noto Nastaliq Urdu, Arial, sans-serif" }}>
          مرکز اصحاب الکساء کی علمی و فلاحی خدمات
        </h1>
      </header>

      {/* 🗺️ مین نقشہ */}
      <div className="relative w-full max-w-5xl h-[68vh] flex items-center justify-center z-10">
        <svg viewBox="-10 -15 460 360" className="w-full h-full svg-canvas" xmlns="http://www.w3.org/2000/svg">
          {africanCountries.map((country) => (
            <g key={country.id} onClick={() => setSelectedCountry(country)} className="group cursor-pointer" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
              <g className={`country-group ${country.hoverClass}`}>
                <image href={country.image} x={country.x} y={country.y} width={country.width} height={country.height} className="country-image" preserveAspectRatio="xMidYMid meet" />
                <text x={country.x + country.width / 2} y={country.y + country.labelYOffset} className="country-label">{country.name}</text>
              </g>
            </g>
          ))}
        </svg>
      </div>

      {/* ⬇️ گائیڈ لائن */}
      <footer className="w-full text-center z-10 pb-2">
        <p className="text-zinc-400 text-sm tracking-wider text-shadow opacity-75 hover:opacity-100 hover:text-amber-400 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.5)] transition-all duration-300 cursor-default select-none" style={{ fontFamily: "Arial, sans-serif" }}>
          تفصیلات دیکھنے کے لیے مطلوبہ ملک کے اوپر کلک کریں
        </p>
      </footer>

      {/* 📜 پورا پیج (Overlay) کھلے گا */}
      {selectedCountry && (
        <CountryDetailPage
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
        />
      )}
    </div>
  );
}
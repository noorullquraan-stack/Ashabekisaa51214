"use client";

import { useState, useEffect } from "react";

// تمام 7 ممالک کا ڈیٹا (ریاضی اور درست پوزیشنز کے مطابق)
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
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // ملک منتخب کرنے پر صفحے کو سکرول لاک کرنا (تاکہ اوورلے کے پیچھے نقشہ نہ ہلے)
    useEffect(() => {
        if (selectedCountry) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedCountry]);

    const openCountry = (country: any) => {
        setIsClosing(false);
        setSelectedCountry(country);
    };

    const closeCountry = () => {
        setIsClosing(true);
        // اینیمیشن مکمل ہونے کے بعد اصل سٹیٹ صاف کریں
        setTimeout(() => {
            setSelectedCountry(null);
            setIsClosing(false);
        }, 380);
    };

    return (
        <div className="min-h-screen bg-[#020202] text-white flex flex-col items-center justify-between py-6 px-4 overflow-hidden relative selection:bg-amber-500/20">

            {/* 🌍 مدہم ورلڈ میپ بیک گراؤنڈ اوورلے */}
            <div
                className="absolute inset-0 bg-cover bg-center mix-blend-screen opacity-[0.015] pointer-events-none"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1924&auto=format&fit=crop')" }}
            />

            {/* سنہری امبیئنس لائٹ */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.02)_0%,transparent_60%)] pointer-events-none" />

            {/* 🎨 کسٹم اینیمیشنز اور ہوور سیٹنگز */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .country-group {
                  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
                }

                .country-image {
                  filter: drop-shadow(0px 6px 12px rgba(0,0,0,0.95)) 
                          drop-shadow(0px 0px 4px rgba(245, 158, 11, 0.25));
                  transition: filter 0.4s ease, opacity 0.4s ease;
                  cursor: pointer;
                  opacity: 0.88;
                }

                /* ہوور گلو */
                .group:hover .country-image {
                  filter: drop-shadow(0px 20px 40px rgba(245, 158, 11, 0.75)) 
                          drop-shadow(0px 0px 25px rgba(255, 255, 255, 0.55));
                  opacity: 1;
                }

                /* دوسرے ممالک کا مدہم ہونا */
                .svg-canvas:hover .group:not(:hover) .country-image {
                  opacity: 0.22;
                  filter: grayscale(0.5) contrast(0.85);
                }

                @keyframes headerEntrance {
                  from { opacity: 0; transform: translateY(-10px); filter: blur(3px); }
                  to { opacity: 1; transform: translateY(0); filter: blur(0); }
                }

                @keyframes floatIn {
                  0% { opacity: 0; transform: scale(0.99); }
                  100% { opacity: 1; transform: scale(1); }
                }

                @keyframes slideLeft {
                  from { opacity: 0; transform: translateX(-40px); }
                  to { opacity: 1; transform: translateX(0); }
                }

                .animate-header {
                  animation: headerEntrance 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                /* کلاسک اردو لیبلز */
                .country-label {
                  font-family: 'Arial', sans-serif;
                  font-weight: bold;
                  fill: #fbbf24;
                  text-shadow: 0px 2px 5px rgba(0,0,0,1);
                  font-size: 10px;
                  pointer-events: none;
                  opacity: 0;
                  transition: opacity 0.3s ease;
                  text-anchor: middle;
                }
                
                .group:hover .country-label {
                  opacity: 1;
                }

                /* === تفصیلاتی پیج (فل سکرین اوورلے) اینیمیشنز === */
                @keyframes overlayFadeIn {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }
                @keyframes overlayFadeOut {
                  from { opacity: 1; }
                  to { opacity: 0; }
                }
                @keyframes panelRiseIn {
                  from { opacity: 0; transform: translateY(28px) scale(0.985); }
                  to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes panelDropOut {
                  from { opacity: 1; transform: translateY(0) scale(1); }
                  to { opacity: 0; transform: translateY(28px) scale(0.985); }
                }

                .detail-overlay {
                  animation: overlayFadeIn 0.32s ease forwards;
                }
                .detail-overlay.closing {
                  animation: overlayFadeOut 0.32s ease forwards;
                }
                .detail-panel {
                  animation: panelRiseIn 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .detail-panel.closing {
                  animation: panelDropOut 0.32s cubic-bezier(0.4, 0, 1, 1) forwards;
                }
              `}} />

            {/* 🔝 ۱۔ ہیڈنگ (مرکز اصحاب الکساء کی علمی و فلاحی خدمات) */}
            <header className="w-full text-center z-10 pt-2 animate-header">
                <h1
                    className="text-2xl sm:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-400 to-amber-100 drop-shadow-[0_2px_10px_rgba(245,158,11,0.15)]"
                    style={{ fontFamily: "Noto Nastaliq Urdu, Arial, sans-serif" }}
                >
                    مرکز اصحاب الکساء کی علمی و فلاحی خدمات
                </h1>
            </header>

            {/* 🗺️ مین نقشہ فریم */}
            <div className="relative w-full max-w-5xl h-[68vh] flex items-center justify-center z-10">
                <svg
                    viewBox="-10 -15 460 360"
                    className="w-full h-full svg-canvas"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {africanCountries.map((country) => (
                        <g
                            key={country.id}
                            className="group cursor-pointer"
                            style={{
                                transformBox: 'fill-box',
                                transformOrigin: 'center'
                            }}
                            onClick={() => openCountry(country)}
                        >
                            {/* کلک کا رقبہ بڑھانے کے لیے ایک ٹھوس مگر نظر نہ آنے والا hit-area، تاکہ پورا بلاک ہمیشہ کلک ایبل رہے */}
                            <rect
                                x={country.x - 6}
                                y={country.y - 6}
                                width={country.width + 12}
                                height={country.height + 12}
                                fill="transparent"
                                style={{ pointerEvents: 'all', cursor: 'pointer' }}
                            />
                            <g className={`country-group ${country.hoverClass}`} style={{ pointerEvents: 'none' }}>
                                <image
                                    href={country.image}
                                    x={country.x}
                                    y={country.y}
                                    width={country.width}
                                    height={country.height}
                                    className="country-image"
                                    preserveAspectRatio="xMidYMid meet"
                                    style={{ pointerEvents: 'none' }}
                                />
                                <text
                                    x={country.x + country.width / 2}
                                    y={country.y + country.labelYOffset}
                                    className="country-label"
                                    style={{ pointerEvents: 'none' }}
                                >
                                    {country.name}
                                </text>
                            </g>
                        </g>
                    ))}
                </svg>
            </div>

            {/* ⬇️ ۲۔ نیچے والا گائیڈ لائن جملہ */}
            <footer className="w-full text-center z-10 pb-2">
                <p
                    className="text-zinc-400 text-sm tracking-wider text-shadow opacity-75 hover:opacity-100 hover:text-amber-400 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.5)] transition-all duration-300 cursor-default select-none"
                    style={{ fontFamily: "Arial, sans-serif" }}
                >
                    تفصیلات دیکھنے کے لیے مطلوبہ ملک کے اوپر کلک کریں
                </p>
            </footer>

            {/* 📜 کلک کرنے پر اسی پیج کے اندر فل سکرین تفصیلاتی پیج کھلتا ہے */}
            {selectedCountry && (
                <div
                    className={`detail-overlay fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md ${isClosing ? "closing" : ""}`}
                    onClick={closeCountry}
                >
                    <div
                        className={`detail-panel relative w-full max-w-4xl max-h-[88vh] overflow-y-auto bg-[#0d0d0d] border border-amber-500/25 rounded-3xl shadow-[0_0_90px_rgba(255,189,0,0.12)] ${isClosing ? "closing" : ""}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* اوپر بند کرنے کا بٹن، ہمیشہ نظر آنے والا */}
                        <button
                            onClick={closeCountry}
                            aria-label="بند کریں"
                            className="absolute top-4 left-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-200 hover:text-amber-300 hover:border-amber-400/60 hover:bg-white/10 transition-all"
                        >
                            ✕
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-6 p-6 md:p-10">
                            <div className="space-y-5">
                                <div>
                                    <p className="text-amber-300 text-sm uppercase tracking-[0.28em] mb-1">تفصیل</p>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">{selectedCountry?.name}</h2>
                                </div>

                                <div className="rounded-3xl overflow-hidden border border-white/5 shadow-[inset_0_0_40px_rgba(255,189,0,0.12)]">
                                    <img
                                        src={selectedCountry?.image}
                                        alt={selectedCountry?.name}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>

                                <p className="text-zinc-300 leading-relaxed text-lg">{selectedCountry?.details}</p>
                            </div>

                            <div className="space-y-5">
                                <div className="rounded-3xl bg-amber-500/10 border border-amber-500/20 p-5">
                                    <h3 className="text-xl font-semibold text-amber-200 mb-3">مختصر معلومات</h3>
                                    <p className="text-zinc-300 text-sm leading-7">یہ تفصیلاتی پیج اسی صفحے کے اندر کھلتا ہے جب آپ نقشے میں کسی ملک پر کلک کرتے ہیں۔ یہاں آپ مزید تفصیل یا اضافی لنکس بھی خود شامل کر سکتے ہیں۔</p>
                                </div>

                                <div className="rounded-3xl bg-[#151515] border border-white/10 p-5 space-y-3">
                                    <div className="flex items-center justify-between text-zinc-300">
                                        <span>ملک</span>
                                        <strong className="text-white">{selectedCountry?.name}</strong>
                                    </div>
                                    <div className="flex items-center justify-between text-zinc-300">
                                        <span>جغرافیائی پوزیشن</span>
                                        <strong className="text-white">{selectedCountry?.x}, {selectedCountry?.y}</strong>
                                    </div>
                                    <div className="flex items-center justify-between text-zinc-300">
                                        <span>متعلقہ رنگ</span>
                                        <strong className="text-amber-300">سونے جیسا</strong>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold hover:from-amber-400 hover:to-yellow-300 transition-all">مزید معلومات</button>
                                    <button onClick={closeCountry} className="flex-1 py-3 rounded-2xl border border-white/10 text-zinc-200 hover:border-amber-400 hover:text-amber-300 transition-all">بند کریں</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

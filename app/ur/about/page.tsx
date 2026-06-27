"use client";

import { useState, useRef } from "react";

const introVideoUrl = "https://res.cloudinary.com/dmqej8n4z/video/upload/v1782393066/Markaz-e-Ashab-e-kisa-farsi-ezgif.com-gif-maker_q65doe.webm";
const clicksVideoUrl = "https://res.cloudinary.com/dmqej8n4z/video/upload/v1782554788/clicks-ezgif.com-gif-to-webm-converter_wgciov.webm";

export default function UrAboutPage() {
    return (
        <div dir="rtl" className="w-full bg-[#0a0a0a] min-h-screen text-zinc-100 p-4 md:p-8 flex flex-col items-center antialiased select-none">
            <div className="w-full max-w-6xl flex flex-col gap-10">

                {/* 👑 ہیڈر اور انتظامیہ */}
                <div className="w-full border-b border-yellow-400/20 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="text-right">
                        <h1 className="font-serif font-bold text-2xl md:text-4xl text-yellow-400 mb-2 leading-tight tracking-wide drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
                            مرکز اصحاب الکساء عالمی برائے رہنمائی و ارشادِ بین الاقوامی
                        </h1>
                        <p className="text-zinc-400 text-xs md:text-sm font-sans tracking-wider uppercase">
                            زیر نگرانی: حرم مطہر امام حسین علیہ السلام — کربلائے معلی، عراق
                        </p>
                    </div>

                    <div className="flex flex-col gap-1 bg-zinc-900/60 border border-zinc-800/80 p-3 rounded-xl text-right text-xs font-serif min-w-[240px]">
                        <div><span className="text-yellow-400/90 font-bold">مدیر مرکز:</span> جناب الشیخ احمد رشید طرفی <span className="text-[10px] text-zinc-500">(دامت توفیقاتہ)</span></div>
                        <div><span className="text-yellow-400/90 font-bold">تیار کنندہ شعبہ:</span> شعبہ تحقیقات و مطالعات</div>
                    </div>
                </div>

                {/* 🎥 پہلا سیکشن: پس منظر اور شرعی بنیاد */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 flex flex-col gap-5 order-2 lg:order-1 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300">
                        <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-r-4 border-yellow-500 pr-3 mb-1">
                            پس منظر اور شرعی بنیاد (تبلیغ کی اہمیت)
                        </h2>
                        <p>
                            دینِ مبین islam میں تبلیغ، ارشاد اور الٰہی پیغامات کو انسانوں تک پہنچانا سب سے عظیم ترین فرائض میں شمار کیا گیا ہے۔ یہی وہ مقدس مشن ہے جس کے لیے اللہ تعالیٰ نے انبیاء اور رسل کو مبعوث فرمایا اور اسی خدمت کو اولیاء کرام اور علمائے عظام نے اپنے لیے سب سے بڑا فخر اور عزت کا سرمایہ سمجھا۔
                        </p>

                        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-5 my-2 text-center shadow-inner">
                            <p className="text-yellow-400 text-base md:text-xl font-bold font-serif mb-3 leading-loose tracking-wide">
                                ﴿وَمَا كَانَ الْمُؤْمِنُونَ لِيَنْفِرُوا كَافَّةً فَلَوْلَا نَفَرَ مِنْ كُلِّ فِرْقَةٍ مِنْهُمْ طَائِفَةٌ لِيَتَفَقَّهُوا فِي الدِّينِ وَلِيُنْذِرُوا قَوْمَهُمْ إِذَا رَجَعُوا إِلَيْهِمْ لَعَلَّهُمْ يَحْذَرُونَ﴾
                            </p>
                            <span className="text-xs text-zinc-500 font-sans tracking-widest uppercase">— سورۃ التوبہ، آیت ۱۲۲</span>
                        </div>
                    </div>

                    {/* تعارفی ویڈیو پلیئر مع اوریجنل کنٹرولز */}
                    <div className="lg:col-span-5 w-full order-1 lg:order-2 flex flex-col gap-2">
                        <span className="text-[10px] font-sans text-yellow-400/80 block uppercase tracking-widest font-bold mr-1">
                            • مرکز کا تعارفی خاکہ
                        </span>

                        <div className="w-full rounded-2xl overflow-hidden border border-yellow-400/30 bg-zinc-950 aspect-video shadow-[0_0_40px_rgba(212,175,55,0.12)] hover:border-yellow-400/60 transition-all duration-300">
                            <video
                                src={introVideoUrl}
                                controls
                                playsInline
                                preload="metadata"
                                className="w-full h-full object-contain bg-black"
                            />
                        </div>
                    </div>
                </div>

                {/* 📖 دوسرا سیکشن: احادیث اور عصر حاضر کے چیلنجز */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900/20 border border-zinc-900 rounded-2xl p-6 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-yellow-400 font-bold text-base md:text-lg border-r-2 border-yellow-500/50 pr-2">احادیثِ معصومینؑ کی روشنی میں</h3>
                        <p>
                            امام علی بن موسیٰ الرضا علیہ السلام نے اہل بیتؑ کے علوم کو عام کرنے والے مبلغین کے لیے خصوصی دعا فرمائی ہے: <span className="text-yellow-400 font-bold font-serif">«رَحِمَ اللهُ عَبداً أَحيَا أَمْرَنَا»</span>۔ جب آپؑ سے پوچھا گیا کہ آپ کا امر کیسے زندہ ہوتا ہے؟ تو آپؑ نے فرمایا: <span className="text-zinc-100 font-bold font-serif">«يَتَعَلَّمُ عُلُومَنَا وَيُعَلِّمُهَا النَّاسَ، فَإِنَّ النَّاسَ لَوْ عَلِمُوا حُسْنَ كَلَامِنَا لَاتَّبَعُونَا»</span>۔
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-yellow-400 font-bold text-base md:text-lg border-r-2 border-yellow-500/50 pr-2">عصرِ حاضر کے چیلنجز</h3>
                        <p>
                            آج کا دور شدید فکری یلغار، شکوک و شبہات اور باطل نظریات کا دور ہے جو انسان کے ایمان اور عقیدے کو کمزور کرنے کی کوشش کر رہے ہیں۔ ایسے حالات میں مخلص، سچے اور حسنِ کردار کے مالک مبلغین کی ضرورت پہلے سے کہیں زیادہ بڑھ چکی ہے تاکہ دلوں کو یقین اور سچے ایمان سے منور کیا جا سکے۔
                        </p>
                    </div>
                </div>

                {/* 🏛️ تیسرا سیکشن: تاریخ اور ڈھانچہ */}
                <div className="flex flex-col gap-4 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300 border-t border-zinc-900 pt-6">
                    <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-r-4 border-yellow-500 pr-3 mb-2">
                        مرکز کا تعارف، تاریخ اور ڈھانچہ
                    </h2>
                    <p>
                        مرکز اصحاب الکساء کا آغاز ابتدائی طور پر ایک آزاد ادارے کے طور پر جناب الشیخ احمد الطرفی کی قیادت میں سنہ 2016 میلادی (1437 ہجری) میں ہوا۔ مرکز کی بہترین کارکردگی کو دیکھتے ہوئے سنہ 2022 میلادی (1444 ہجری) سے اسے حرم مطہر امام حسین علیہ السلام کی مستقل سرپرستی حاصل ہوئی اور حرم کے شرعی متولی جناب شیخ عبدالمہدی الکربلائی نے خصوصی تعاون فراہم کیا۔
                    </p>
                    <p>
                        اگست 2022 میں اس مرکز کو باقاعدہ طور پر حرم مطہر امام حسینؑ کے انتظامی ڈھانچے کا حصہ بنا دیا گیا، جس کے بعد اس کے کاموں میں مزید وسعت آئی۔ مرکز کا بنیادی مشن مولا امیر المؤمنین علی علیہ السلام کے اس آفاقی اصول پر قائم ہے: <span className="text-zinc-100 font-bold italic font-serif">"الناس صنفان: إما أخ لك في الدين وإما نظير لك في الخلق"</span>۔
                    </p>
                </div>

                {/* 🛠️ چوتھا سیکشن: علمی اور فلاحی کردار */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-zinc-900 pt-6">
                    <div className="lg:col-span-5 w-full flex flex-col gap-2">
                        <span className="text-[10px] font-sans text-yellow-400/80 block uppercase tracking-widest font-bold mr-1">
                            • میدانی خدمات کی جھلکیاں
                        </span>
                        <div className="w-full rounded-2xl overflow-hidden border border-yellow-400/30 bg-zinc-950 aspect-video shadow-[0_0_40px_rgba(212,175,55,0.12)] hover:border-yellow-400/60 transition-all duration-300">
                            <video src={clicksVideoUrl} controls autoPlay muted loop preload="metadata" className="w-full h-full object-contain bg-black" />
                        </div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col gap-4 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300">
                        <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-r-4 border-yellow-500 pr-3 mb-1">
                            مرکز کی خدمات اور دائرہ کار
                        </h2>
                        <div className="flex flex-col gap-3">
                            <div>
                                <h4 className="text-zinc-100 font-bold text-sm md:text-base mb-1 text-yellow-400/80">۱۔ علمی و فکری سرگرمیاں:</h4>
                                <p className="text-xs md:text-sm text-zinc-400">
                                    دور دراز کے دیہاتوں اور پسماندہ علاقوں کے میدانی دورے، سیمینارز اور مجالس کا انعقاد؛ تعلیمی نصاب کی تیاری اور دینی مدارس و ثقافتی مراکز کی علمی نگرانی؛ مساجد کی تعمیر و مرمت اور مدارس کو مادی وسائل کی فراہمی؛ نیز دنیا بھر سے مقاماتِ مقدسہ آنے والے علمی وفود کا استقبال۔
                                </p>
                            </div>
                            <div>
                                <h4 className="text-zinc-100 font-bold text-sm md:text-base mb-1 text-yellow-400/80">۲۔ فلاحی و انسانی اقدامات:</h4>
                                <p className="text-xs md:text-sm text-zinc-400">
                                    براعظم افریقہ میں پانی کے بحران کا حل؛ شدید قلت سے نمٹنے کے لیے افریقہ کے مختلف ممالک (جیسے آئیوری کوسٹ کے علاقوں زوکوجیہ اور موسسندرا وغیرہ) میں امام حسینؑ اور حضرت ابوالفضل العباسؑ کی یاد میں سینکڑوں کنویں کھدوانا، اور مستحق و غریب خاندانوں کی باوقار مادی معاونت۔
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 📞 پانچواں سیکشن: رابطہ کی معلومات */}
                <div className="w-full bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 font-sans">
                    <div className="text-right flex flex-col gap-1">
                        <span className="text-[10px] text-yellow-400 font-bold tracking-widest uppercase">رابطہ کے ذرائع</span>
                        <h3 className="font-serif font-bold text-zinc-200 text-base md:text-lg">مرکز سے براہِ راست رابطہ کریں</h3>
                        <p className="text-xs text-zinc-500 font-serif">مرکزی دفتر: کربلائے معلی، عراق</p>
                    </div>
                    <div className="flex flex-col gap-2 text-xs md:text-sm text-zinc-300">
                        <div className="flex items-center gap-2 justify-end">
                            <span className="font-bold text-yellow-400 select-all tracking-wide">009647807818164</span>
                            <span className="text-zinc-500 font-serif">:فون نمبر ۱</span>
                        </div>
                        <div className="flex items-center gap-2 justify-end">
                            <span className="font-bold text-yellow-400 select-all tracking-wide">009647810005096</span>
                            <span className="text-zinc-500 font-serif">:فون نمبر ۲</span>
                        </div>
                        <div className="flex items-center gap-2 justify-end">
                            <span className="text-zinc-400 select-all font-medium">aacenter86@gmail.com</span>
                            <span className="text-zinc-500 font-serif">:ای میل ایڈریس</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
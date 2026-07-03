import React from 'react';

export default function WelfareFa() {
    const projects = [
        { country: "نیجر", tag: "آب", icon: "💧", title: "چاه در دانشگاه المصطفی", desc: "احداث چاه آب بزرگ در دانشگاه المصطفی برای تأمین آب سالم برای دانشجویان و مردم محلی.", link: "https://www.facebook.com/share/r/1D5cjZH46d/" },
        { country: "نیجر", tag: "آموزش", icon: "📖", title: "۴۰۰ قرآن کریم", desc: "اهدای ۴۰۰ نسخه چاپی قرآن کریم به دانش‌آموزانی که قبلاً از لوح‌های چوبی استفاده می‌کردند.", link: "https://www.facebook.com/share/r/1ADZTzupWK/" },
        { country: "نیجر", tag: "زیرساخت", icon: "🏗️", title: "مدرسه امام حسن زکی (ع)", desc: "نهادن سنگ بنای مدرسه جدید امام حسن زکی (ع) در پایتخت، شهر نیامی.", link: "https://www.facebook.com/photo?fbid=894338630295275" },
        { country: "نیجر", tag: "زیرساخت", icon: "🏫", title: "مدرسه بزرگ امام حسین (ع)", desc: "افتتاح موسسه آموزشی پیشرو در پایتخت اقتصادی، شهر مرادی.", link: "https://www.facebook.com/share/r/1DzyZdC3g7/" },
        { country: "نیجر", tag: "آموزش", icon: "📚", title: "مدرسه امام باقر (ع)", desc: "افتتاح رسمی در شهر کونی و آغاز برنامه‌های آموزشی فقه و اخلاق.", link: "https://www.facebook.com/share/v/1E8zgXB87e/" },
        { country: "یمن", tag: "آب", icon: "💧", title: "چاه آب شماره ۱۱۵۱", desc: "تامین آب شیرین برای ۷۰۰ بهره‌بردار در روستای الربع، استان الحدیده.", link: "https://www.facebook.com/reel/1426832179075491" },
        { country: "یمن", tag: "آب", icon: "💧", title: "چاه آب شماره ۱۱۴۹", desc: "خدمت‌رسانی به ۸۰۰ بهره‌بردار در روستای الکملیه، وادی مور.", link: "https://www.facebook.com/share/v/19DNvgpbaG/" },
        { country: "تانزانیا", tag: "سلامت", icon: "🩸", title: "کمپ خون سیدالشهداء (ع)", desc: "کمپین بشردوستانه اهدای خون برای کمک به بیماران به یاد امام حسین (ع).", link: "https://www.facebook.com/reel/1817484032968327" },
        { country: "تانزانیا", tag: "آموزش", icon: "🏫", title: "مدرسه امام جعفر صادق (ع)", desc: "ساخت مدرسه دینی برای تربیت نسل‌های آینده با نور دانش.", link: "https://www.facebook.com/share/r/1GVPmwQ7y4/" },
        { country: "گینه بیسائو", tag: "مسجد", icon: "🕌", title: "مسجد امام مهدی (عج)", desc: "آغاز ساخت مسجد امام مهدی (عج) در کنار مدرسه امام حسین (ع).", link: "https://www.facebook.com/share/r/1BS5ZYyEFc/" },
        { country: "گینه بیسائو", tag: "زیرساخت", icon: "🏗️", title: "مدرسه امام حسین (ع)", desc: "غرب آفریقا - ایجاد یک مرکز معنوی و آموزشی برای جامعه.", link: "https://www.facebook.com/reel/757278857246463" },
        { country: "کامرون", tag: "مدرسه", icon: "🏫", title: "مدرسه الحبیب المصطفی", desc: "تاسیس مدرسه راهنمایی جامع در روستای بانگورین، شهر فومبان.", link: "https://www.facebook.com/photo?fbid=886410567754748" },
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
            <main className="flex-1 p-6 md:p-12 lg:px-32 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" dir="rtl">
                <div className="relative mb-16 text-right">
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none"></div>
                    <span className="inline-block text-emerald-400 text-[10px] font-bold tracking-[0.2em] bg-emerald-400/5 px-4 py-2 rounded-full border border-emerald-400/10 mb-5 backdrop-blur-sm">ثبت خدمات بشردوستانه</span>
                    <h1 className="text-4xl md:text-6xl font-black mb-5 tracking-tight leading-tight">خدمات <span className="bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-600 bg-clip-text text-transparent">رفاهی</span></h1>
                    <p className="text-zinc-500 text-base md:text-lg max-w-2xl font-light leading-relaxed">بررسی جامع تلاش‌های بشردوستانه جهانی و پروژه‌های ارتقای جامعه مرکز اصحاب کساء.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((item, idx) => (
                        <div key={idx} className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/10 to-emerald-500/10 rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative h-full bg-[#0d0d0d] border border-zinc-800/40 rounded-[2rem] p-7 flex flex-col justify-between hover:bg-zinc-900/40 transition-all duration-500">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-2.5 bg-zinc-900/80 rounded-xl border border-zinc-800 text-2xl">{item.icon}</div>
                                        <div className="flex flex-col items-start gap-1.5 text-left">
                                            <span className="text-sm font-bold text-zinc-300 tracking-wider uppercase">{item.country}</span>
                                            <span className="text-[8px] font-black text-yellow-500/60 uppercase py-0.5 px-2 border border-yellow-500/10 rounded-full bg-yellow-500/5">{item.tag}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-zinc-100 mb-3 group-hover:text-yellow-400 transition-colors duration-300 leading-snug">{item.title}</h3>
                                    <p className="text-xs text-zinc-500 leading-relaxed font-light">{item.desc}</p>
                                </div>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center justify-center gap-2 py-3.5 bg-zinc-900/50 border border-zinc-800 rounded-xl text-[10px] font-bold tracking-widest text-zinc-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 uppercase">مشاهده رکورد 🎬</a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
import React from 'react';

export default function ReligiousServicesFa() {
    const activities = [
        { country: "جهانی", tag: "معرفی", icon: "✨", title: "معرفی مرکز اصحاب کساء", desc: "برنامه (به سوی نور) با شیخ احمد الفتلاوی - شرح کامل اهداف مرکز.", link: "https://www.facebook.com/alrwdha/videos/1888738388507562" },
        { country: "نیجریه", tag: "پرچم", icon: "🚩", title: "ورود پرچم حرم امام حسین (ع)", desc: "متبرک شدن خاک نیجریه به حضور پرچم مبارک اباعبدالله الحسین (ع).", link: "https://www.facebook.com/share/r/1EcZTbMfqP/" },
        { country: "نیجریه", tag: "علمی", icon: "🎓", title: "بازدید از دانشگاه خاتم الانبیاء", desc: "بازدید هیئت ارشاد بین‌الملل مرکز اصحاب کساء از دانشگاه خاتم الانبیاء.", link: "https://www.facebook.com/photo?fbid=911989808530157" },
        { country: "گینه بیسائو", tag: "مجلس", icon: "🏴", title: "مجلس عزای سیدالشهداء (ع)", desc: "برگزاری مجلس رثای سیدالشهداء در مدرسه ابوتراب گینه بیسائو.", link: "https://www.facebook.com/share/r/18dduhKRem/" },
        { country: "گینه بیسائو", tag: "ساخت‌وساز", icon: "🕌", title: "ساخت مسجد امام مهدی (عج)", desc: "آغاز عملیات احداث مسجد امام مهدی (عج) در گینه بیسائو توسط مرکز.", link: "https://www.facebook.com/share/r/1BS5ZYyEFc/" },
        { country: "گینه بیسائو", tag: "ساخت‌وساز", icon: "🏗️", title: "تاسیس مسجد و مدرسه امام حسین", desc: "احداث مسجد و مدرسه علمیه امام حسین (ع) در کنار یکدیگر.", link: "https://www.facebook.com/reel/757278857246463" },
        { country: "ساحل عاج", tag: "شعار", icon: "🗣️", title: "لبیک یا حسین - میاجی", desc: "فریاد لبیک یا حسین توسط دانش‌آموزان مدرسه فاطمه زهرا (س).", link: "https://www.facebook.com/share/r/18fxRCobVs/" },
        { country: "نیجر", tag: "پرچم", icon: "🚩", title: "اهدای پرچم به رهبر تیجانیه", desc: "تقدیم پرچم مبارک امام حسین (ع) به شیخ موسی ابوبکر هاشم.", link: "https://www.facebook.com/share/r/1HQdTUcy1Q/" },
        { country: "نیجر", tag: "دیدار", icon: "🤝", title: "ملاقات با رهبر تیجانیه", desc: "دیدار هیئت اعزامی و ابلاغ سلام و تحیات عتبه حسینیه.", link: "https://www.facebook.com/share/v/1FFBWsqfZJ/" },
        { country: "نیجر", tag: "تبلیغ", icon: "📜", title: "فضیلت تربت کربلا", desc: "گفتگو پیرامون قداست و برکات تربت سیدالشهداء (ع).", link: "https://www.facebook.com/share/v/17naQSWiRS/" },
        { country: "نیجر", tag: "نماز جمعه", icon: "🛐", title: "نماز جمعه در مسجد مرادی", desc: "شرکت در نماز جمعه بزرگترین مسجد پایتخت اقتصادی نیجر.", link: "https://www.facebook.com/reel/1446399637264363" },
        { country: "نیجر", tag: "نماز جمعه", icon: "🕌", title: "نماز جمعه در دانشگاه مصطفی", desc: "اقامه نماز جمعه و سخنرانی سید علی الیاسری در دانشگاه.", link: "https://www.facebook.com/share/r/1CFofANMje/" },
        { country: "نیجر", tag: "بازدید", icon: "📚", title: "بازدید از دانشگاه المصطفی", desc: "تشویق دانشجویان به کسب علم و دانش توسط هیئت اعزامی.", link: "https://www.facebook.com/share/v/18Xqf8jBgh/" },
        { country: "نیجر", tag: "درس", icon: "🎙️", title: "روایت و سلام بر امام", desc: "حدیث یونس بن ظبیان و فضیلت سلام بر امام حسین (ع).", link: "https://www.facebook.com/share/v/1AMXrFM1Kq/" },
        { country: "نیجر", tag: "درس", icon: "📖", title: "بیان اصول دین", desc: "تبیین اصول اعتقادی مورد اتفاق مسلمانان در مدرسه امام حسین.", link: "https://www.facebook.com/share/r/1D7hUepxWk/" },
        { country: "نیجر", tag: "اعتقادات", icon: "🛡️", title: "پاسخ به شبهات - شرک (۱)", desc: "بررسی اقسام شرک جلی، خفی و اخفی.", link: "https://www.facebook.com/share/v/18BkkS4Z7b/" },
        { country: "نیجر", tag: "اعتقادات", icon: "🛡️", title: "پاسخ به شبهات - شرک (۲)", desc: "ادامه بررسی اقسام شرک و حفاظت از توحید.", link: "https://www.facebook.com/share/v/18XKKrNfbR/" },
        { country: "نیجر", tag: "اعتقادات", icon: "⚖️", title: "تفسیر توحید در عبودیت", desc: "تبیین توحید عبادی طبق آموزه‌های مکتب اهل بیت (ع).", link: "https://www.facebook.com/share/v/1Dkg7K3Grr/" },
        { country: "نیجر", tag: "درس", icon: "📘", title: "معرفی کتاب 'بدایة المعرفة'", desc: "معرفی کتاب پایه عقاید و نویسنده بزرگوار آن.", link: "https://www.facebook.com/reel/2251701185635993" },
        { country: "نیجر", tag: "درس", icon: "🔄", title: "نظریه 'الامر بین الامرین'", desc: "تبیین نظریه شیعی در مقابل جبر و تفویض.", link: "https://www.facebook.com/share/r/1GCgkUaLCV/" },
        { country: "نیجر", tag: "درس", icon: "👑", title: "بحث‌های تخصصی امامت", desc: "پژوهش‌هایی در باب امامت عامه و خاصه.", link: "https://www.facebook.com/share/v/1C28PQtun6/" },
        { country: "نیجر", tag: "درس", icon: "✨", title: "تقسیم صفات الهی", desc: "بحث پیرامون صفات ذاتیه، فعلیه و سلبیه خداوند.", link: "https://www.facebook.com/share/v/18yYDiACZg/" },
        { country: "نیجر", tag: "درس", icon: "🚫", title: "ابطال جبر اشعری", desc: "نقد و ابطال نظریه جبر اشعری با دلایل عقلی.", link: "https://www.facebook.com/share/v/1BWo6KMiQL/" },
        { country: "نیجر", tag: "افتتاح", icon: "🏫", title: "افتتاح مدرسه امام حسین", desc: "گشایش رسمی مدرسه علمیه امام حسین (ع) در شهر مرادی.", link: "https://www.facebook.com/share/r/1DzyZdC3g7/" },
        { country: "نیجر", tag: "گفتگو", icon: "🏛️", title: "گفتگو با مجمع علما (۱)", desc: "تبادل نظر پیرامون ضرورت تمسک به قرآن و عترت.", link: "https://www.facebook.com/share/v/18tBrwPZtd/" },
        { country: "نیجر", tag: "گفتگو", icon: "🏛️", title: "گفتگو با مجمع علما (۲)", desc: "تبیین عترت طاهره به عنوان مفسران حقیقی وحی.", link: "https://www.facebook.com/share/v/1981fxTJas/" },
        { country: "نیجر", tag: "بنیاد", icon: "🏗️", title: "مدرسه امام حسن زکی (ع)", desc: "کلنگ‌زنی احداث مدرسه جدید امام حسن زکی (ع) در نیامی.", link: "https://www.facebook.com/photo?fbid=894338630295275" },
        { country: "نیجر", tag: "آموزش", icon: "📖", title: "حفظ قرآن مدرسه امام باقر", desc: "فعالیت‌ها و برنامه‌های قرآنی و آموزش حفظ قرآن کریم.", link: "https://www.facebook.com/share/r/1HebzEwdtc/" },
        { country: "نیجر", tag: "آموزش", icon: "🎙️", title: "تلاوت دانش‌آموز", desc: "تلاوت زیبای یکی از دانش‌آموزان در حضور هیئت اعزامی.", link: "https://www.facebook.com/share/r/1CddRrwdTb/" },
        { country: "نیجر", tag: "افتتاح", icon: "🏫", title: "افتتاح مدرسه امام باقر", desc: "گشایش مدرسه در شهر قنی و آغاز دروس عقاید و اخلاق.", link: "https://www.facebook.com/share/v/1E8zgXB87e/" },
        { country: "نیجر", tag: "تبلیغ", icon: "📜", title: "سخنرانی در محضر سلطان", desc: "بیان اهداف مرکز در نشر علوم آل محمد (ع).", link: "https://www.facebook.com/share/r/1HC8j9TjEQ/" },
        { country: "نیجر", tag: "دیدار", icon: "🤝", title: "دیدار با اساتید و ائمه", desc: "رهنمودهای هیئت به امامان مساجد برای استقامت در مسیر علم.", link: "https://www.facebook.com/share/r/1Adi14MSFn/" },
        { country: "نیجر", tag: "آموزش", icon: "📚", title: "بازدید از مکتب قرآن", desc: "بررسی وضعیت دانش‌آموزانی که روی لوح‌های چوبی قرآن می‌خوانند.", link: "https://www.facebook.com/reel/1226163682319681" },
        { country: "نیجر", tag: "توزیع", icon: "📘", title: "اهدای ۴۰۰ جلد قرآن", desc: "توزیع نسخه‌های چاپی قرآن کریم بین دانش‌آموزان نیجر.", link: "https://www.facebook.com/share/r/1ADZTzupWK/" },
        { country: "نیجر", tag: "دیدار", icon: "🤝", title: "دیدار با مشاور سلطان", desc: "گفتگو پیرامون گسترش تعالیم اسلام با مشاور سلطنتی.", link: "https://www.facebook.com/share/r/1JM5pSZNa7/" },
        { country: "تانزانیا", tag: "پرچم", icon: "🚩", title: "پرچم حسینی در مدرسه الزهرا", desc: "اهتزاز پرچم اباعبدالله الحسین (ع) در مدرسه الزهرا (س) تانزانیا.", link: "https://www.facebook.com/share/r/1CFYaxnvV3/" },
        { country: "تانزانیا", tag: "دعا", icon: "🤲", title: "دعای فرج با دانش‌آموزان", desc: "قرائت دعای فرج توسط دانش‌آموزان مدرسه الزهرا (س).", link: "https://www.facebook.com/share/r/18f9zyBtFi/" },
        { country: "تانزانیا", tag: "آموزش", icon: "🏫", title: "تاسیس مدرسه امام صادق (ع)", desc: "احداث مدرسه دینی برای تربیت نسل‌های آینده.", link: "https://www.facebook.com/share/r/1GVPmwQ7y4/" },
        { country: "اندونزی", tag: "نماز عید", icon: "🌙", title: "نماز عید فطر و خطبه", desc: "اقامه نماز عید در اندونزی و متبرک شدن مومنین به پرچم حسینی.", link: "https://www.facebook.com/share/r/18hP2NvL3Q/" },
        { country: "اندونزی", tag: "استقبال", icon: "🤝", title: "استقبال از زائران در کربلا", desc: "میزبانی از زائران اندونزیایی در کربلا و ترغیب به کسب علم.", link: "https://www.facebook.com/photo?fbid=871259829269822" },
        { country: "پاکستان", tag: "قرآن", icon: "🧕", title: "برنامه قرآنی بانوان", desc: "جلسات رمضان ویژه بانوان (تفسیر و ترجمه) در شمال پاکستان.", link: "https://www.facebook.com/photo/?fbid=877487521980386" },
        { country: "پاکستان", tag: "دیدار", icon: "📜", title: "دیدار با نماینده مرجعیت", desc: "ملاقات مدیر مرکز با نماینده مرجعیت پاکستان در کربلا.", link: "https://www.facebook.com/photo/?fbid=870541036008368" },
        { country: "کامرون", tag: "آموزش", icon: "🏫", title: "مدرسه الحبیب المصطفی", desc: "نظارت بر مدرسه راهنمایی روستای بانگورین کامرون.", link: "https://www.facebook.com/photo?fbid=886410567754748" },
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-white font-sans">
            <main className="flex-1 p-6 md:p-12 lg:px-32 bg-gradient-to-b from-[#0a0a0a] via-black to-[#050505]" dir="rtl">
                <div className="relative mb-14 text-right">
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
                    <span className="inline-block text-emerald-400 text-[9px] font-bold tracking-[0.2em] bg-emerald-400/10 px-4 py-1.5 rounded-full border border-emerald-400/20 mb-5 backdrop-blur-sm uppercase">فعالیت‌های مذهبی و تبلیغی</span>
                    <h1 className="text-3xl md:text-5xl font-black mb-5 tracking-tight leading-tight italic">خدمات <span className="bg-gradient-to-r from-emerald-400 to-yellow-500 bg-clip-text text-transparent">مذهبی</span></h1>
                    <p className="text-zinc-500 text-sm md:text-base max-w-2xl font-light leading-relaxed text-right">ترویج علوم آل محمد (ع)، تأسیس مساجد و مدارس و ثبت فعالیت‌های دینی در سراسر جهان.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {activities.map((item, idx) => (
                        <div key={idx} className="group relative text-right">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/10 to-yellow-500/10 rounded-[1.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative h-full bg-[#0d0d0d] border border-zinc-800/60 rounded-[1.5rem] p-6 flex flex-col justify-between hover:bg-zinc-900/40 transition-all duration-500">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 flex items-center justify-center bg-zinc-900/80 rounded-xl border border-zinc-700 text-2xl group-hover:border-emerald-500/50 transition-all duration-300">{item.icon}</div>
                                        <div className="flex flex-col items-start gap-1">
                                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">{item.country}</span>
                                            <span className="text-[8px] font-medium text-yellow-500/60 py-0.5 px-2 border border-yellow-500/10 rounded-full bg-yellow-500/5 uppercase">{item.tag}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-zinc-100 mb-3 group-hover:text-yellow-400 transition-colors duration-300 leading-snug">{item.title}</h3>
                                    <p className="text-xs text-zinc-500 leading-relaxed font-light line-clamp-3">{item.desc}</p>
                                </div>
                                <a href={item.link} target="_blank" className="mt-8 flex items-center justify-center gap-2 py-3 bg-zinc-800/40 border border-zinc-700/50 rounded-xl text-[9px] font-bold tracking-widest text-zinc-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 uppercase shadow-lg">مشاهده رکورد 🎬</a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
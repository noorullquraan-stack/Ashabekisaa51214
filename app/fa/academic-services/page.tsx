export default function EducationalPageFa() {
    // نیجر: لیست دروس تخصصی (۹ درس)
    const nigerLessons = [
        { id: 1, title: "درس اول: مباحثه‌ای درباره سلام", desc: "بر اساس فرمایش امام صادق (ع) به یونس بن ظبیان: 'السلام علیک یا ابا عبدالله...'", link: "https://www.facebook.com/" },
        { id: 2, title: "درس دوم: اصول دین", desc: "بیان اصول دینِ مورد اتفاق میان مسلمانان و ویژگی‌های اختصاصی مذهب امامیه.", link: "https://www.facebook.com/" },
        { id: 3, title: "درس سوم: پاسخ به شبهات (انواع شرک)", desc: "ادامه بررسی تفصیلی پیرامون شرک جلی، شرک خفی و شرک اخفی.", link: "https://www.facebook.com/" },
        { id: 4, title: "درس چهارم: پاسخ به شبهات (مراتب شرک)", desc: "دسته‌بندی دقیق و تحلیل علمی شبهات مطرح شده درباره اشکال مختلف شرک.", link: "https://www.facebook.com/" },
        { id: 5, title: "درس پنجم: معرفی کتاب 'بدایة المعرفة'", desc: "آشنایی با کتاب 'بدایة المعرفة'، مؤلف آن و اهمیت ادبیات کلامی و عقایدی.", link: "https://www.facebook.com/" },
        { id: 6, title: "درس ششم: نظریه 'الامر بین الامرین'", desc: "تبیین نظریه کلامی 'الامر بین الامرین' (نه جبر و نه تفویض) در هنگام تلاوت نماز.", link: "https://www.facebook.com/" },
        { id: 7, title: "درس هفتم: مباحث امامت", desc: "تحقیق علمی جامع و مباحث عمیق در باب امامت عامه و امامت خاصه.", link: "https://www.facebook.com/" },
        { id: 8, title: "درس هشتم: تقسیم‌بندی صفات الهی", desc: "بررسی و مطالعه عمیق در تقسیم صفات خداوند به ذاتیه، فعلیه و سلبیه.", link: "https://www.facebook.com/" },
        { id: 9, title: "درس نهم: رد نظریه جبر اشعری", desc: "پاسخ فکری و عقلی به نظریه جبر اشاعره با استفاده از براهین محکم منطقی.", link: "https://www.facebook.com/" }
    ];

    // نیجر: سایر فعالیت‌های آموزشی (۱۵ فعالیت)
    const nigerActivities = [
        { title: "دیدار با علما (مباحثه درباره عقیده وسیله)", desc: "تبادل فکری و بحث علمی درباره مفهوم کلامی 'وسیله' و توسل.", link: "https://www.facebook.com/" },
        { title: "دیدار با علما (قرآن و عترت)", desc: "گفتگوی مستمر درباره پیوند ناگسستنی میان قرآن کریم و اهل بیت (ع).", link: "https://www.facebook.com/" },
        { title: "خطبه نماز جمعه و سخنرانی هیئت در جامعة المصطفی", desc: "سخنرانی رسمی هیئت اعزامی مرکز برای علما و طلاب در مراسم نماز جمعه.", link: "https://www.facebook.com/" },
        { title: "مدرسه امام باقر (ع) - حفظ قرآن", desc: "نگاهی کلی به برنامه درسی و فعالیت‌های منظم آموزشی در مرکز حفظ قرآن.", link: "https://www.facebook.com/" },
        { title: "مدرسه امام باقر (ع) - تلاوت قرآن دانش‌آموز", desc: "نمایش تلاوت زیبا و دقیق آیات کلام‌الله مجید توسط یک دانش‌آموز خردسال.", link: "https://www.facebook.com/" },
        { title: "افتتاح مدرسه امام باقر (ع) در شهر کونی", desc: "راه‌اندازی مدرسه با برنامه درسی جامع شامل عقاید، فقه، اخلاق و سیره.", link: "https://www.facebook.com/" },
        { title: "بازدید از مدرسه حفظ قرآن (گزارش ویدئویی)", desc: "پوشش ویژه ویدئویی از نحوه حفظ قرآن توسط دانش‌آموزان بومی با استفاده از لوح‌های چوبی سنتی.", link: "https://www.facebook.com/" },
        { title: "توزیع ۴۰۰ جلد کلام‌الله مجید", desc: "اهدای ۴۰۰ نسخه چاپی قرآن کریم به دانش‌آموزانی که پیشتر تنها روی لوح‌های چوبی می‌نوشتند.", link: "https://www.facebook.com/" },
        { title: "افتتاح رسمی مدرسه بزرگ امام حسین (ع) در مارادی", desc: "مراسم باشکوه افتتاحیه مؤسسه آموزشی پیشگام که توسط مرکز تأسیس شده است.", link: "https://www.facebook.com/" },
        { title: "پایه‌گذاری مدرسه امام حسن مجتبی (ع) در نیامی", desc: "آغاز عملیات ساخت یک مجتمع آموزشی راهبردی و جدید در پایتخت.", link: "https://www.facebook.com/" },
        { title: "بازدید از جامعة المصطفی و دیدار با طلاب", desc: "تعامل علمی، گفتمان و توزیع بسته‌های فرهنگی و هدایتی میان پژوهشگران دانشگاه.", link: "https://www.facebook.com/" },
        { title: "دیدار با سلطان دان باسکوره احمد", desc: "نشست عالی‌رتبه برای تبیین اهداف بنیادین، آموزشی و صلح‌آمیز مدارس مرکز.", link: "https://www.facebook.com/" },
        { title: "دیدار با علما و ائمه جماعات مساجد", desc: "سخنرانی الهام‌بخش با تأکید بر صبر، استقامت و ترویج حقیقی ارزش‌های ناب اسلامی.", link: "https://www.facebook.com/" },
        { title: "دیدار با مشاور سلطان", desc: "گفتگوی راهبردی درباره نهادینه‌سازی و ترویج آموزه‌های اصیل اسلامی.", link: "https://www.facebook.com/" },
        { title: "دیدار با شیخ موسی ابوبکر هاشم (رئیس طریقت تیجانیه)", desc: "گفتگوی تقریب مذاهب و ایجاد همبستگی با رهبر برجسته طریقت تیجانیه.", link: "https://www.facebook.com/" }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-black text-white font-sans antialiased" dir="rtl">

            <main className="flex-1 p-6 md:p-12 lg:px-32 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">

                {/* بخش هدر */}
                <div className="mb-16 border-b border-zinc-900 pb-10 text-center md:text-right">
                    <span className="inline-block text-yellow-500 text-xs font-bold tracking-widest uppercase bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/20 mb-4">
                        سوابق علمی و آموزشی
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 bg-clip-text text-transparent tracking-tight">
                        خدمات آموزشی
                    </h1>
                    <h2 className="text-lg md:text-xl font-medium text-zinc-400 mb-6 max-w-4xl">
                        مرکز بین‌المللی تبلیغی اصحاب کسا / آستان قدس حسینی (ع)
                    </h2>
                    <p className="text-zinc-400 leading-relaxed max-w-3xl border-s-4 border-yellow-500 ps-4 text-right inline-block text-sm md:text-base bg-zinc-900/20 py-3 rounded-l-xl">
                        ارائه‌ای جامع از مأموریت‌های علمی مرکز، مؤسسات تأسیس‌شده، دروس تخصصی و فعالیت‌های پژوهشی در سطح جهانی.
                    </p>
                </div>

                {/* محتوای اصلی */}
                <div className="space-y-16">

                    {/* 1. NIGERIA (نیجریه) */}
                    <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                            <span className="text-3xl">🇳🇬</span>
                            <div>
                                <h2 className="text-2xl font-extrabold text-yellow-500">نیجریه</h2>
                                <p className="text-xs text-zinc-500">همکاری با دانشگاه خاتم الانبیاء</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-900/20 border border-zinc-900 p-6 rounded-2xl">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-zinc-200">بازدید از دانشگاه خاتم الانبیاء</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                    بازدید رسمی علمی هیئت اعزامی مرکز اصحاب کسا (وابسته به آستان قدس حسینی) از دانشگاه، جهت تقویت همکاری‌های فکری دوجانبه و مراسم استقبال ویژه.
                                </p>
                            </div>

                            {/* کارت ویدئو */}
                            <div className="relative group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 aspect-video flex flex-col justify-center items-center p-4 text-center">
                                <div className="absolute inset-0 bg-gradient-to-bl from-yellow-500/10 via-transparent to-black pointer-events-none"></div>
                                <div className="w-16 h-16 rounded-full bg-yellow-500/10 group-hover:bg-yellow-500 text-yellow-500 group-hover:text-black flex items-center justify-center text-2xl font-bold transition-all duration-300 mb-3 shadow-lg shadow-yellow-500/5">
                                    ▶
                                </div>
                                <span className="font-bold text-sm text-zinc-200 block mb-1">گزارش ویدئویی رسمی</span>
                                <span className="text-xs text-zinc-500 mb-4 block">برای پخش مستقیم در فیس‌بوک کلیک کنید</span>
                                <a href="https://www.facebook.com/photo?fbid=911989808530157" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-bold rounded-lg shadow-md transition">
                                    تماشای ویدئو 🎬
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* 2. NIGER (نیجر - دروس تخصصی) */}
                    <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                            <span className="text-3xl">🇳🇪</span>
                            <div>
                                <h2 className="text-2xl font-extrabold text-yellow-500">نیجر — مدرسه بزرگ امام حسین (ع)</h2>
                                <p className="text-xs text-zinc-500">مجموعه دوره‌های کلامی و عقایدی (۹ درس ویدئویی)</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {nigerLessons.map((lesson) => (
                                <div key={lesson.id} className="bg-zinc-900/30 border border-zinc-850 p-5 rounded-2xl flex flex-col justify-between hover:border-yellow-500/30 transition group relative">
                                    <div className="mb-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-[10px] font-bold text-yellow-500/80 tracking-wider uppercase bg-yellow-500/5 px-2 py-0.5 rounded border border-yellow-500/10">واحد آکادمیک</span>
                                            <span className="text-xs text-zinc-600 font-mono">#{lesson.id}</span>
                                        </div>
                                        <h3 className="text-base font-bold text-zinc-200 mb-2 group-hover:text-yellow-500 transition-colors line-clamp-1">{lesson.title}</h3>
                                        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">{lesson.desc}</p>
                                    </div>

                                    <a href={lesson.link} target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 bg-zinc-950 hover:bg-yellow-500 border border-zinc-800 hover:border-yellow-500 text-zinc-300 hover:text-black font-bold text-xs rounded-xl transition duration-200 flex items-center justify-center gap-2">
                                        <span>تماشای درس ویدئویی</span> 🎬
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 3. NIGER (نیجر - سایر فعالیت‌های آموزشی) */}
                    <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                            <span className="text-3xl">🇳🇪</span>
                            <div>
                                <h2 className="text-2xl font-extrabold text-yellow-500">نیجر — زیرساخت‌ها و گزارش‌های عمومی</h2>
                                <p className="text-xs text-zinc-500">افتتاح مؤسسات، برنامه‌های عمومی و مستندها</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {nigerActivities.map((act, index) => (
                                <div key={index} className="bg-zinc-900/40 border border-zinc-850 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-zinc-900/70 hover:border-zinc-800 transition">
                                    <div className="space-y-1">
                                        <h3 className="text-sm md:text-base font-bold text-zinc-200">{act.title}</h3>
                                        <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">{act.desc}</p>
                                    </div>
                                    <a href={act.link} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto whitespace-nowrap px-4 py-2.5 bg-zinc-950 hover:bg-yellow-500 border border-zinc-800 hover:border-yellow-500 text-zinc-300 hover:text-black font-bold text-xs rounded-xl transition flex items-center justify-center gap-1">
                                        مشاهده گزارش 📺
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. CAMEROON (کامرون) */}
                    <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                            <span className="text-3xl">🇨🇲</span>
                            <div>
                                <h2 className="text-2xl font-extrabold text-yellow-500">کامرون</h2>
                                <p className="text-xs text-zinc-500">مدیریت مدارس راهنمایی</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-900/20 border border-zinc-900 p-6 rounded-2xl">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-zinc-200">مدرسه راهنمایی الحبیب المصطفی</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                    چارچوب آموزشی جامع که تحت هدایت و نظارت مستقیم مرکز در روستای بانگورین، شهر فومبان، کامرون فعالیت می‌کند.
                                </p>
                            </div>

                            <div className="relative group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 aspect-video flex flex-col justify-center items-center p-4 text-center">
                                <div className="absolute inset-0 bg-gradient-to-bl from-yellow-500/10 via-transparent to-black pointer-events-none"></div>
                                <div className="w-16 h-16 rounded-full bg-yellow-500/10 group-hover:bg-yellow-500 text-yellow-500 group-hover:text-black flex items-center justify-center text-2xl font-bold transition-all duration-300 mb-3 shadow-lg shadow-yellow-500/5">
                                    📸
                                </div>
                                <span className="font-bold text-sm text-zinc-200 block mb-1">گزارش تصویری رسمی</span>
                                <span className="text-xs text-zinc-500 mb-4 block">برای مشاهده گزارش کامل کلیک کنید</span>
                                <a href="https://www.facebook.com/photo?fbid=886410567754748" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-bold rounded-lg shadow-md transition">
                                    مشاهده گزارش 📸
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* 5. TANZANIA (تانزانیا) */}
                    <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                            <span className="text-3xl">🇹🇿</span>
                            <div>
                                <h2 className="text-2xl font-extrabold text-yellow-500">تانزانیا</h2>
                                <p className="text-xs text-zinc-500">حوزه‌های علمیه و معنوی</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-zinc-900/40 border border-zinc-850 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h3 className="text-base font-bold text-zinc-200">مدرسه الزهراء (س) — تلاوت دعای فرج</h3>
                                    <p className="text-xs text-zinc-400">آموزش معنوی مستمر و قرائت دسته‌جمعی در روستای کاغیرا، منطقه کیگوما.</p>
                                </div>
                                <a href="https://www.facebook.com/share/r/1GVPmwQ7y4/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center px-4 py-2.5 bg-zinc-950 hover:bg-yellow-500 border border-zinc-800 hover:border-yellow-500 text-zinc-300 hover:text-black font-bold text-xs rounded-xl transition flex items-center justify-center gap-1">
                                    تماشای ویدئو 🎬
                                </a>
                            </div>
                            <div className="bg-zinc-900/40 border border-zinc-850 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h3 className="text-base font-bold text-zinc-200">تأسیس مدرسه امام جعفر صادق (ع)</h3>
                                    <p className="text-xs text-zinc-400">پایه‌گذاری تاریخی و راه‌اندازی مراکز آموزشی پیشرفته در تانزانیا.</p>
                                </div>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center px-4 py-2.5 bg-zinc-950 hover:bg-yellow-500 border border-zinc-800 hover:border-yellow-500 text-zinc-300 hover:text-black font-bold text-xs rounded-xl transition flex items-center justify-center gap-1">
                                    باز کردن لینک 🔗
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* 6. PAKISTAN (پاکستان) */}
                    <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl mb-12">
                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                            <span className="text-3xl">🇵🇰</span>
                            <div>
                                <h2 className="text-2xl font-extrabold text-yellow-500">پاکستان</h2>
                                <p className="text-xs text-zinc-500">سمینارهای معارف قرآن کریم</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-900/20 border border-zinc-900 p-6 rounded-2xl">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-zinc-200">برنامه‌های قرآنی بانوان در شمال پاکستان</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                    دوره‌های ویژه درک قرآن کریم، فنون تلاوت، ترجمه و تفسیر ساختاریافته که به صورت جامع در ماه مبارک رمضان برگزار شد.
                                </p>
                            </div>

                            <div className="relative group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 aspect-video flex flex-col justify-center items-center p-4 text-center">
                                <div className="absolute inset-0 bg-gradient-to-bl from-yellow-500/10 via-transparent to-black pointer-events-none"></div>
                                <div className="w-16 h-16 rounded-full bg-yellow-500/10 group-hover:bg-yellow-500 text-yellow-500 group-hover:text-black flex items-center justify-center text-2xl font-bold transition-all duration-300 mb-3 shadow-lg shadow-yellow-500/5">
                                    📖
                                </div>
                                <span className="font-bold text-sm text-zinc-200 block mb-1">گالری تصاویر پروژه رمضان</span>
                                <span className="text-xs text-zinc-500 mb-4 block">برای مشاهده تصاویر کلیک کنید</span>
                                <a href="https://www.facebook.com/photo?fbid=877487521980386" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-bold rounded-lg shadow-md transition">
                                    مشاهده برنامه 📖
                                </a>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
export default function EducationalPageUr() {
  // نائجر کے دروس کا مکمل ڈیٹا (9 دروس)
  const nigerLessons = [
    { id: 1, title: "پہلا درس: سلام کے موضوع پر مباحثہ", desc: "امام صادق (ع) کے یونس بن ظبیان کو فرمائے گئے قول 'السلام علیک یا ابا عبداللہ...' کی روشنی میں۔", link: "https://www.facebook.com/" },
    { id: 2, title: "دوسرا درس: اصولِ دین", desc: "مسلمانوں کے درمیان متفقہ اصولِ دین اور مذہبِ امامیہ کی خصوصیات پر تفصیلی گفتگو۔", link: "https://www.facebook.com/" },
    { id: 3, title: "تیسرا درس: شبہات کا رد (شرک کی اقسام)", desc: "شرکِ جلی، شرکِ خفی، اور شرکِ اخفیٰ کے حوالے سے تفصیلی بیان اور شبہات کا ازالہ۔", link: "https://www.facebook.com/" },
    { id: 4, title: "چوتھا درس: شبہات کا رد (شرک کے درجات)", desc: "شرک کی مختلف شکلوں اور درجات کے حوالے سے پیدا کیے گئے شبہات کا علمی و منطقی تجزیہ۔", link: "https://www.facebook.com/" },
    { id: 5, title: "پانچواں درس: کتاب 'بدایۃ المعرفہ' کا تعارف", desc: "کتاب 'بدایۃ المعرفہ' اور اس کے مصنف کا تعارف، نیز عقائدی لٹریچر کی اہمیت پر گفتگو۔", link: "https://www.facebook.com/" },
    { id: 6, title: "چھٹا درس: نظریہ 'الامر بین الامرین'", desc: "نماز کی تلاوت کے دوران عقائدی نظریے 'الامر بین الامرین' (جبر و قدر کے درمیان کا راستہ) کی وضاحت۔", link: "https://www.facebook.com/" },
    { id: 7, title: "ساتواں درس: مباحثِ امامت", desc: "امامتِ عامہ اور امامتِ خاصہ کے حوالے سے جامع اور گہری علمی تحقیق۔", link: "https://www.facebook.com/" },
    { id: 8, title: "آٹھواں درس: صفاتِ الٰہی کی تقسیم", desc: "اللہ تعالیٰ کی صفات کو ذاتی، فعلی اور سلبی صفات میں تقسیم کرنے کا گہرا مطالعہ۔", link: "https://www.facebook.com/" },
    { id: 9, title: "نواں درس: اشعری نظریہ جبر کا رد", desc: "عقلی اور منطقی دلائل کی روشنی میں اشعریوں کے نظریہ جبر کا مدلل رد۔", link: "https://www.facebook.com/" }
  ];

  // نائجر کی دیگر تعلیمی سرگرمیاں (15 سرگرمیاں)
  const nigerActivities = [
    { title: "علماء سے ملاقات (وسیلہ کے موضوع پر مباحثہ)", desc: "عقیدہِ وسیلہ کے موضوع پر علماء کے ساتھ فکری تبادلہ اور علمی گفتگو۔", link: "https://www.facebook.com/" },
    { title: "علماء سے ملاقات (قرآن اور عترت)", desc: "قرآن مجید اور اہل بیت (ع) کے درمیان لازوال اور نہ ٹوٹنے والے تعلق پر مسلسل مباحثہ۔", link: "https://www.facebook.com/" },
    { title: "جامعہ المصطفیٰ میں خطبہ جمعہ اور وفد کا خطاب", desc: "نماز جمعہ کے دوران علماء اور طلباء کے اجتماع سے مرکز کے وفد کا باضابطہ خطاب۔", link: "https://www.facebook.com/" },
    { title: "مدرسہ امام باقر (ع) - حفظِ قرآن", desc: "حفظِ قرآن کے مرکز میں نصاب اور باقاعدہ تعلیمی سرگرمیوں کا عمومی جائزہ۔", link: "https://www.facebook.com/" },
    { title: "مدرسہ امام باقر (ع) - طالب علم کی تلاوت", desc: "ایک کمسن طالب علم کی جانب سے قرآن مجید کی انتہائی خوبصورت اور درست تلاوت کا مظاہرہ۔", link: "https://www.facebook.com/" },
    { title: "کونی شہر میں مدرسہ امام باقر (ع) کا افتتاح", desc: "عقائد، فقہ، اخلاق اور سیرت کے جامع نصاب پر مبنی اسکول کا باقاعدہ آغاز۔", link: "https://www.facebook.com/" },
    { title: "حفظِ قرآن اسکول کا دورہ (اردو ویڈیو رپورٹ)", desc: "روایتی لکڑی کی تختیوں پر مقامی طلباء کے قرآن حفظ کرنے کے طریقے پر خصوصی کوریج۔", link: "https://www.facebook.com/" },
    { title: "قرآن مجید کے 400 نسخوں کی تقسیم", desc: "لکڑی کی تختیوں پر انحصار کرنے والے طلباء کو قرآن مجید کے 400 مطبوعہ نسخوں کی فراہمی۔", link: "https://www.facebook.com/" },
    { title: "مارادی میں مدرسہ امام حسین (ع) کا عظیم الشان افتتاح", desc: "مرکز کی جانب سے قائم کردہ اس اہم ترین تعلیمی ادارے کی افتتاحی تقریب۔", link: "https://www.facebook.com/" },
    { title: "نیامی میں مدرسہ امام حسن مجتبیٰ (ع) کا سنگِ بنیاد", desc: "دارالحکومت میں ایک نئے اسٹریٹجک تعلیمی کمپلیکس کی تعمیر کا آغاز۔", link: "https://www.facebook.com/" },
    { title: "جامعہ المصطفیٰ کا دورہ اور طلباء سے ملاقات", desc: "یونیورسٹی کے محققین کے ساتھ علمی گفتگو، رہنمائی اور تعلیمی مواد کی تقسیم۔", link: "https://www.facebook.com/" },
    { title: "سلطان دان باسکورے احمد سے ملاقات", desc: "مرکز کے اسکولوں کے بنیادی، تعلیمی اور پرامن مقاصد پر اعلیٰ سطحی بریفنگ۔", link: "https://www.facebook.com/" },
    { title: "علماء اور آئمہ مساجد سے گفتگو", desc: "صبر، استقامت اور حقیقی اسلامی اقدار کی تبلیغ کے موضوع پر ایک متاثر کن خطاب۔", link: "https://www.facebook.com/" },
    { title: "سلطان کے مشیر سے ملاقات", desc: "مستند اسلامی تعلیمات کی ترویج کو ادارہ جاتی شکل دینے پر اسٹریٹجک گفتگو۔", link: "https://www.facebook.com/" },
    { title: "شیخ موسیٰ ابوبکر ہاشم (سربراہ طریقہ تجانیہ) سے ملاقات", desc: "طریقہ تجانیہ کے ممتاز رہنما کے ساتھ بین المذاہب ہم آہنگی کے فروغ پر ڈائیلاگ۔", link: "https://www.facebook.com/" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans antialiased" dir="rtl">

      <main className="flex-1 p-6 md:p-12 lg:px-32 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">

        {/* ہیڈر کا حصہ */}
        <div className="mb-16 border-b border-zinc-900 pb-10 text-center md:text-right">
          <span className="inline-block text-yellow-500 text-xs font-bold tracking-widest uppercase bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/20 mb-4">
            اکیڈمک اور تعلیمی ریکارڈ
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 bg-clip-text text-transparent tracking-tight">
            تعلیمی خدمات
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-zinc-400 mb-6 max-w-4xl">
            مرکز اصحابِ کساء برائے بین الاقوامی تبلیغ / حرم امام حسین (ع)
          </h2>
          <p className="text-zinc-400 leading-relaxed max-w-3xl border-s-4 border-yellow-500 ps-4 text-right inline-block text-sm md:text-base bg-zinc-900/20 py-3 rounded-l-xl">
            مرکز کی تعلیمی سرگرمیوں، قائم کردہ اداروں، خصوصی تدریسی کلاسوں اور عالمی تحقیقی کاوشوں کا ایک جامع تعارف۔
          </p>
        </div>

        {/* مین کنٹینٹ (Main Content) */}
        <div className="space-y-16">

          {/* 1. NIGERIA (نائجیریا) */}
          <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
              <span className="text-3xl">🇳🇬</span>
              <div>
                <h2 className="text-2xl font-extrabold text-yellow-500">نائجیریا</h2>
                <p className="text-xs text-zinc-500">جامعہ خاتم الانبیاء کا اشتراک</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-900/20 border border-zinc-900 p-6 rounded-2xl">
              <div>
                <h3 className="text-xl font-bold mb-3 text-zinc-200">جامعہ خاتم الانبیاء کا دورہ</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  مرکز اصحابِ کساء (حرم امام حسین ع) کے وفد کا جامعہ کا باضابطہ تعلیمی دورہ، جس میں باہمی فکری تعاون کو فروغ دینے پر گفتگو ہوئی اور وفد کا شاندار استقبال کیا گیا۔
                </p>
              </div>

              {/* ویڈیو کارڈ */}
              <div className="relative group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 aspect-video flex flex-col justify-center items-center p-4 text-center">
                <div className="absolute inset-0 bg-gradient-to-bl from-yellow-500/10 via-transparent to-black pointer-events-none"></div>
                <div className="w-16 h-16 rounded-full bg-yellow-500/10 group-hover:bg-yellow-500 text-yellow-500 group-hover:text-black flex items-center justify-center text-2xl font-bold transition-all duration-300 mb-3 shadow-lg shadow-yellow-500/5">
                  ▶
                </div>
                <span className="font-bold text-sm text-zinc-200 block mb-1">آفیشل ویڈیو رپورٹ</span>
                <span className="text-xs text-zinc-500 mb-4 block">فیس بک پر براہ راست دیکھنے کے لیے کلک کریں</span>
                <a href="https://www.facebook.com/photo?fbid=911989808530157" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-bold rounded-lg shadow-md transition">
                  ویڈیو دیکھیں 🎬
                </a>
              </div>
            </div>
          </section>

          {/* 2. NIGER (نائجر - خصوصی دروس) */}
          <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
              <span className="text-3xl">🇳🇪</span>
              <div>
                <h2 className="text-2xl font-extrabold text-yellow-500">نائجر — مدرسہ امام حسین (ع)</h2>
                <p className="text-xs text-zinc-500">عقائدی اور تدریسی کورسز کی سیریز (9 ویڈیو دروس)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nigerLessons.map((lesson) => (
                <div key={lesson.id} className="bg-zinc-900/30 border border-zinc-850 p-5 rounded-2xl flex flex-col justify-between hover:border-yellow-500/30 transition group relative">
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-bold text-yellow-500/80 tracking-wider uppercase bg-yellow-500/5 px-2 py-0.5 rounded border border-yellow-500/10">اکیڈمک ماڈیول</span>
                      <span className="text-xs text-zinc-600 font-mono">#{lesson.id}</span>
                    </div>
                    <h3 className="text-base font-bold text-zinc-200 mb-2 group-hover:text-yellow-500 transition-colors line-clamp-1">{lesson.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">{lesson.desc}</p>
                  </div>

                  <a href={lesson.link} target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 bg-zinc-950 hover:bg-yellow-500 border border-zinc-800 hover:border-yellow-500 text-zinc-300 hover:text-black font-bold text-xs rounded-xl transition duration-200 flex items-center justify-center gap-2">
                    <span>ویڈیو درس دیکھیں</span> 🎬
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* 3. NIGER (نائجر - دیگر تعلیمی سرگرمیاں) */}
          <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
              <span className="text-3xl">🇳🇪</span>
              <div>
                <h2 className="text-2xl font-extrabold text-yellow-500">نائجر — انفراسٹرکچر اور تعلیمی رپورٹس</h2>
                <p className="text-xs text-zinc-500">اداروں کا افتتاح، عوامی اجتماعات اور دستاویزی رپورٹس</p>
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
                    رپورٹ دیکھیں 📺
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* 4. CAMEROON (کیمرون) */}
          <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
              <span className="text-3xl">🇨🇲</span>
              <div>
                <h2 className="text-2xl font-extrabold text-yellow-500">کیمرون</h2>
                <p className="text-xs text-zinc-500">مڈل اسکولز کا انتظام</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-900/20 border border-zinc-900 p-6 rounded-2xl">
              <div>
                <h3 className="text-xl font-bold mb-3 text-zinc-200">مدرسہ الحبیب المصطفیٰ مڈل اسکول</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  کیمرون کے شہر فومبان (گاؤں بانگورین) میں مرکز کی براہ راست نگرانی اور رہنمائی میں چلنے والا ایک جامع تعلیمی فریم ورک۔
                </p>
              </div>

              <div className="relative group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 aspect-video flex flex-col justify-center items-center p-4 text-center">
                <div className="absolute inset-0 bg-gradient-to-bl from-yellow-500/10 via-transparent to-black pointer-events-none"></div>
                <div className="w-16 h-16 rounded-full bg-yellow-500/10 group-hover:bg-yellow-500 text-yellow-500 group-hover:text-black flex items-center justify-center text-2xl font-bold transition-all duration-300 mb-3 shadow-lg shadow-yellow-500/5">
                  📸
                </div>
                <span className="font-bold text-sm text-zinc-200 block mb-1">آفیشل تصویری رپورٹ</span>
                <span className="text-xs text-zinc-500 mb-4 block">مکمل رپورٹ دیکھنے کے لیے نیچے کلک کریں</span>
                <a href="https://www.facebook.com/photo?fbid=886410567754748" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-bold rounded-lg shadow-md transition">
                  رپورٹ دیکھیں 📸
                </a>
              </div>
            </div>
          </section>

          {/* 5. TANZANIA (تنزانیہ) */}
          <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
              <span className="text-3xl">🇹🇿</span>
              <div>
                <h2 className="text-2xl font-extrabold text-yellow-500">تنزانیہ</h2>
                <p className="text-xs text-zinc-500">روحانی و تعلیمی حوزات</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-zinc-900/40 border border-zinc-850 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-base font-bold text-zinc-200">مدرسہ الزہراء (ع) — دعائے فرج کی تلاوت</h3>
                  <p className="text-xs text-zinc-400">کیگوما ریجن کے گاؤں کاغیرا میں باقاعدہ روحانی تربیت اور دعائے فرج کی اجتماعی تلاوت۔</p>
                </div>
                <a href="https://www.facebook.com/share/r/1GVPmwQ7y4/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center px-4 py-2.5 bg-zinc-950 hover:bg-yellow-500 border border-zinc-800 hover:border-yellow-500 text-zinc-300 hover:text-black font-bold text-xs rounded-xl transition flex items-center justify-center gap-1">
                  ویڈیو دیکھیں 🎬
                </a>
              </div>
              <div className="bg-zinc-900/40 border border-zinc-850 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-base font-bold text-zinc-200">مدرسہ امام جعفر صادق (ع) کا قیام</h3>
                  <p className="text-xs text-zinc-400">تنزانیہ میں جدید تعلیمی مراکز کی باقاعدہ تشکیل اور تاریخی افتتاحی مراحل۔</p>
                </div>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center px-4 py-2.5 bg-zinc-950 hover:bg-yellow-500 border border-zinc-800 hover:border-yellow-500 text-zinc-300 hover:text-black font-bold text-xs rounded-xl transition flex items-center justify-center gap-1">
                  لنک کھولیں 🔗
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
                <p className="text-xs text-zinc-500">قرآن فہمی سیمینارز</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-900/20 border border-zinc-900 p-6 rounded-2xl">
              <div>
                <h3 className="text-xl font-bold mb-3 text-zinc-200">شمالی پاکستان میں خواتین کے قرآنی پروگرامز</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  ماہِ رمضان المبارک کے دوران قرآن مجید کو سمجھنے، فنونِ تلاوت، ترجمہ اور باقاعدہ تفسیر کے خصوصی کورسز کا انعقاد۔
                </p>
              </div>

              <div className="relative group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 aspect-video flex flex-col justify-center items-center p-4 text-center">
                <div className="absolute inset-0 bg-gradient-to-bl from-yellow-500/10 via-transparent to-black pointer-events-none"></div>
                <div className="w-16 h-16 rounded-full bg-yellow-500/10 group-hover:bg-yellow-500 text-yellow-500 group-hover:text-black flex items-center justify-center text-2xl font-bold transition-all duration-300 mb-3 shadow-lg shadow-yellow-500/5">
                  📖
                </div>
                <span className="font-bold text-sm text-zinc-200 block mb-1">پروجیکٹ کی تصویری جھلکیاں</span>
                <span className="text-xs text-zinc-500 mb-4 block">مکمل گیلری دیکھنے کے لیے نیچے کلک کریں</span>
                <a href="https://www.facebook.com/photo?fbid=877487521980386" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-bold rounded-lg shadow-md transition">
                  پروگرام دیکھیں 📖
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
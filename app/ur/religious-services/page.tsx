import React from 'react';

export default function ReligiousServicesUr() {
  const activities = [
    // مرکز کا تعارف
    { country: "عالمی", tag: "تعارف", icon: "✨", title: "مرکز اصحابِ کساء کا تعارف", desc: "برنامج (بإتجاه النور) مع الشيخ احمد الفتلاوي - مرکز کے اغراض و مقاصد کا جامع بیان۔", link: "https://www.facebook.com/alrwdha/videos/1888738388507562" },
    
    // نائیجیریا
    { country: "نائیجیریا", tag: "پرچمِ حسینی", icon: "🚩", title: "حرم امام حسین (ع) کے پرچم کی آمد", desc: "تتشرف أرض نيجيريا بحضور راية الإمام الحسين عليه السلام للتبرك بها۔", link: "https://www.facebook.com/share/r/1EcZTbMfqP/" },
    { country: "نائیجیریا", tag: "علمی دورہ", icon: "🎓", title: "جامعہ خاتم الانبیاء کا دورہ", desc: "مرکز اصحابِ کساء کے وفد کی جامعہ خاتم الانبیاء آمد اور علمی و ارشادی گفتگو۔", link: "https://www.facebook.com/photo?fbid=911989808530157" },
    
    // گنی بساؤ
    { country: "گنی بساؤ", tag: "مجلسِ عزاء", icon: "🏴", title: "مجلسِ عزائے سید الشہداء (ع)", desc: "مدرسہ ابی تراب میں ذکرِ آلِ محمد اور عزاداری سید الشہداء کا انعقاد۔", link: "https://www.facebook.com/share/r/18dduhKRem/" },
    { country: "گنی بساؤ", tag: "تعمیرات", icon: "🕌", title: "مسجد امام مہدی (عج) کی تعمیر", desc: "مرکز اصحابِ کساء کی جانب سے مسجد امام مہدی (عج) کی تعمیر کا باقاعدہ آغاز۔", link: "https://www.facebook.com/share/r/1BS5ZYyEFc/" },
    { country: "گنی بساؤ", tag: "تعمیرات", icon: "🏗️", title: "مسجد و مدرسہ امام حسین (ع)", desc: "مسجد امام حسین (ع) اور اس کے ساتھ ملحقہ مدرسے کا سنگِ بنیاد۔", link: "https://www.facebook.com/reel/757278857246463" },

    // آئیوری کوسٹ
    { country: "آئیوری کوسٹ", tag: "شعارِ حسینی", icon: "🗣️", title: "لبیک یا حسین (ع) - میاجی", desc: "مدرسہ فاطمہ الزہراء (ع) میاجی کے طلبہ کی جانب سے لبیک یا حسین کا نعرہ۔", link: "https://www.facebook.com/share/r/18fxRCobVs/" },

    // نائیجر
    { country: "نائیجر", tag: "پرچمِ حسینی", icon: "🚩", title: "زعیم تیجانیہ کو پرچمِ حسینی کا تحفہ", desc: "شیخ موسیٰ ابو بکر ہاشم کو پرچمِ حسینی پیش کیا گیا اور دینی امور پر تبادلہ خیال۔", link: "https://www.facebook.com/share/r/1HQdTUcy1Q/" },
    { country: "نائیجر", tag: "ملاقات", icon: "🤝", title: "زعیم تیجانیہ سے علمی ملاقات", desc: "وفد کی زعیم تیجانیہ سے ملاقات اور عتبہ حسینیہ کا پیغام و سلام۔", link: "https://www.facebook.com/share/v/1FFBWsqfZJ/" },
    { country: "نائیجر", tag: "تبلیغ", icon: "📜", title: "خاکِ شفا کی فضیلت پر گفتگو", desc: "تربتِ سید الشہداء (ع) کی قدامت اور اس سے تبرک کی فضیلت پر خصوصی گفتگو۔", link: "https://www.facebook.com/share/v/17naQSWiRS/" },
    { country: "نائیجر", tag: "نمازِ جمعہ", icon: "🛐", title: "مسجد مرادی میں نمازِ جمعہ", desc: "معاشی دارالحکومت مرادی کی سب سے بڑی مسجد (الوحدۃ الاسلامیہ) میں نمازِ جمعہ۔", link: "https://www.facebook.com/reel/1446399637264363" },
    { country: "نائیجر", tag: "نمازِ جمعہ", icon: "🕌", title: "جامعہ مصطفیٰ (ص) میں شرکت", desc: "جامعہ مصطفیٰ میں نمازِ جمعہ کی ادائیگی اور سید علی الیاسری کا خطاب۔", link: "https://www.facebook.com/share/r/1CFofANMje/" },
    { country: "نائیجر", tag: "علمی دورہ", icon: "📚", title: "جامعہ مصطفیٰ (ص) کا دورہ", desc: "وفد کا جامعہ کا دورہ اور طلبہ کو حصولِ علم کی اہمیت پر ترغیب۔", link: "https://www.facebook.com/share/v/18Xqf8jBgh/" },
    { country: "نائیجر", tag: "دروس", icon: "🎙️", title: "امام حسین (ع) کو سلام اور روایت", desc: "حدیثِ یونس بن ظبیان اور امام حسین علیہ السلام پر سلام کی فضیلت۔", link: "https://www.facebook.com/share/v/1AMXrFM1Kq/" },
    { country: "نائیجر", tag: "دروس", icon: "📖", title: "اصولِ دین کا بیان", desc: "مسلمانوں کے متفقہ اصولِ دین کی عقلی و نقلی تشریح۔", link: "https://www.facebook.com/share/r/1D7hUepxWk/" },
    { country: "نائیجر", tag: "دروس", icon: "🛡️", title: "ردِ شبہات - شرک کی اقسام (1)", desc: "شرکِ جلی، خفی اور اخفیٰ کے درمیان فرق کی وضاحت۔", link: "https://www.facebook.com/share/v/18BkkS4Z7b/" },
    { country: "نائیجر", tag: "دروس", icon: "🛡️", title: "ردِ شبہات - شرک کی اقسام (2)", desc: "شرک کی اقسام کے بیان کا تتمہ اور عقیدہ توحید کی حفاظت۔", link: "https://www.facebook.com/share/v/18XKKrNfbR/" },
    { country: "نائیجر", tag: "دروس", icon: "⚖️", title: "توحیدِ عبودیت کی تفسیر", desc: "مکتبِ اہل بیت (ع) کی روشنی میں توحیدِ عبودیت کی حقیقی تفسیر۔", link: "https://www.facebook.com/share/v/1Dkg7K3Grr/" },
    { country: "نائیجر", tag: "دروس", icon: "📘", title: "کتاب 'بداية المعرفة' کا تعارف", desc: "علمِ عقائد کی بنیادی کتاب اور اس کے مصنف کا تعارف۔", link: "https://www.facebook.com/reel/2251701185635993" },
    { country: "نائیجر", tag: "دروس", icon: "🔄", title: "نظریہ 'الأمر بين الأمرين'", desc: "جبر و قدر کے درمیان 'امر بین الامرین' کے نظریے کی تشریح۔", link: "https://www.facebook.com/share/r/1GCgkUaLCV/" },
    { country: "نائیجر", tag: "دروس", icon: "👑", title: "بحثِ امامتِ عامہ و خاصہ", desc: "عقیدہ امامت پر تفصیلی علمی اور کلامی بحوث۔", link: "https://www.facebook.com/share/v/1C28PQtun6/" },
    { country: "نائیجر", tag: "دروس", icon: "✨", title: "صفاتِ الٰہی کی تقسیم", desc: "صفاتِ ذاتیہ، فعلیہ اور سلبیہ کے درمیان علمی فرق کا بیان۔", link: "https://www.facebook.com/share/v/18yYDiACZg/" },
    { country: "نائیجر", tag: "دروس", icon: "🚫", title: "جبرِ اشعری کا بطلان", desc: "عقلی دلائل کے ساتھ نظریہ جبر کے بطلان پر گفتگو۔", link: "https://www.facebook.com/share/v/1BWo6KMiQL/" },
    { country: "نائیجر", tag: "افتتاح", icon: "🏫", title: "مدرسہ امام حسین (ع) کا افتتاح", desc: "مرادی شہر میں مدرسہ امام حسین الکبریٰ کا باقاعدہ افتتاح۔", link: "https://www.facebook.com/share/r/1DzyZdC3g7/" },
    { country: "نائیجر", tag: "علمی مکالمہ", icon: "🏛️", title: "رابطۃ العلماء سے مکالمہ (1)", desc: "رئیس رابطۃ العلماء سے قرآن و اہل بیت سے تمسک پر گفتگو۔", link: "https://www.facebook.com/share/v/18tBrwPZtd/" },
    { country: "نائیجر", tag: "علمی مکالمہ", icon: "🏛️", title: "رابطۃ العلماء سے مکالمہ (2)", desc: "عترتِ طاہرہ ہی قرآن کی حقیقی تفسیر ہے، اس موضوع پر مکالمہ۔", link: "https://www.facebook.com/share/v/1981fxTJas/" },
    { country: "نائیجر", tag: "سنگ بنیاد", icon: "🏗️", title: "مدرسہ امام حسن زکی (ع)", desc: "دارالحکومت نیامی میں مدرسہ امام حسن زکی (ع) کا سنگ بنیاد۔", link: "https://www.facebook.com/photo?fbid=894338630295275" },
    { country: "نائیجر", tag: "تعلیم", icon: "📖", title: "مدرسہ امام باقر (حفظ قرآن)", desc: "حفظِ قرآن اور علومِ قرآنی کے لیے خصوصی تعلیمی پروگرام۔", link: "https://www.facebook.com/share/r/1HebzEwdtc/" },
    { country: "نائیجر", tag: "تعلیم", icon: "🎙️", title: "طالبہ کی تلاوتِ قرآن", desc: "مدرسہ امام باقر (ع) کی طالبہ کی وفد کے سامنے خوبصورت تلاوت۔", link: "https://www.facebook.com/share/r/1CddRrwdTb/" },
    { country: "نائیجر", tag: "افتتاح", icon: "🏫", title: "مدرسہ امام باقر (ع) کا افتتاح", desc: "شہر قنی میں مدرسہ کا افتتاح اور باقاعدہ تعلیمی نصاب کا آغاز۔", link: "https://www.facebook.com/share/v/1E8zgXB87e/" },
    { country: "نائیجر", tag: "تبلیغ", icon: "📜", title: "سلطان دان باسکور سے خطاب", desc: "علومِ آلِ محمد (ع) کی اشاعت کے مقاصد پر خصوصی بیانیہ۔", link: "https://www.facebook.com/share/r/1HC8j9TjEQ/" },
    { country: "نائیجر", tag: "ملاقات", icon: "🤝", title: "اساتذہ اور ائمہ سے ملاقات", desc: "اساتذہ اور ائمہ مساجد کو علمی ثبات اور صبر کی تلقین۔", link: "https://www.facebook.com/share/r/1Adi14MSFn/" },
    { country: "نائیجر", tag: "تعلیم", icon: "📚", title: "حفظِ قرآن کے اسکول کا دورہ", desc: "تختیوں پر قرآن پڑھنے والے طلبہ کے حالات کا مشاہدہ۔", link: "https://www.facebook.com/reel/1226163682319681" },
    { country: "نائیجر", tag: "تقسیم", icon: "📘", title: "400 قرآن پاک کی تقسیم", desc: "نائیجر کے مستحق طلبہ میں 400 مطبوعہ مصاحف کی تقسیم۔", link: "https://www.facebook.com/share/r/1ADZTzupWK/" },
    { country: "نائیجر", tag: "ملاقات", icon: "🤝", title: "سلطان کے مشیر سے ملاقات", desc: "تعالیمِ اسلام کی اشاعت پر مستشار السلطان سے تبادلہ خیال۔", link: "https://www.facebook.com/share/r/1JM5pSZNa7/" },

    // تنزانیہ
    { country: "تنزانیہ", tag: "پرچمِ حسینی", icon: "🚩", title: "مدرسہ الزہراء میں پرچم کشائی", desc: "تنزانیہ کے مدرسہ الزہراء میں پرچمِ حسینی کی تنصیب۔", link: "https://www.facebook.com/share/r/1CFYaxnvV3/" },
    { country: "تنزانیہ", tag: "دعا", icon: "🤲", title: "طلبہ کے ساتھ دعائے فرج", desc: "مدرسہ الزہراء (ع) کے طلبہ کے ساتھ مل کر دعائے فرج کی تلاوت۔", link: "https://www.facebook.com/share/r/18f9zyBtFi/" },
    { country: "تنزانیہ", tag: "تعلیم", icon: "🏫", title: "مدرسہ امام جعفر صادق (ع)", desc: "آنے والی نسلوں کی علمی تربیت کے لیے جدید مذہبی مدرسے کا قیام۔", link: "https://www.facebook.com/share/r/1GVPmwQ7y4/" },

    // انڈونیشیا
    { country: "انڈونیشیا", tag: "نمازِ عید", icon: "🌙", title: "نمازِ عید الفطر اور خطبہ", desc: "عید الفطر کی ادائیگی اور مومنین میں پرچمِ حسینی کی زیارت۔", link: "https://www.facebook.com/share/r/18hP2NvL3Q/" },
    { country: "انڈونیشیا", tag: "استقبال", icon: "🤝", title: "انڈونیشی زائرین کا استقبال", desc: "کربلا معلیٰ میں انڈونیشیا سے آئے زائرین کا علمی استقبال۔", link: "https://www.facebook.com/photo?fbid=871259829269822" },

    // پاکستان
    { country: "پاکستان", tag: "تعلیم", icon: "🧕", title: "خواتین کا قرآنی پروگرام", desc: "شمالی پاکستان میں خواتین کے لیے رمضان کا خصوصی قرآنی پروگرام۔", link: "https://www.facebook.com/photo/?fbid=877487521980386" },
    { country: "پاکستان", tag: "ملاقات", icon: "📜", title: "معتمدِ مرجعیت سے ملاقات", desc: "کربلا میں پاکستان کے معتمدِ مرجعیت سے علمی و دینی ملاقات۔", link: "https://www.facebook.com/photo/?fbid=870541036008368" },

    // کیمرون
    { country: "کیمرون", tag: "تعلیم", icon: "🏫", title: "مدرسہ الحبیب المصطفیٰ (ص)", desc: "کیمرون کے گاؤں بنغورین میں علمی خدمات کا تسلسل۔", link: "https://www.facebook.com/photo?fbid=886410567754748" },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-white font-sans">
      <main className="flex-1 p-6 md:p-12 lg:px-32 bg-gradient-to-b from-[#0a0a0a] via-black to-[#050505]" dir="rtl">
        
        {/* ہیڈر */}
        <div className="relative mb-14 text-right">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          <span className="inline-block text-emerald-400 text-[9px] font-bold tracking-[0.2em] bg-emerald-400/10 px-4 py-1.5 rounded-full border border-emerald-400/20 mb-5 backdrop-blur-sm uppercase">Religious & Preaching Activities</span>
          <h1 className="text-3xl md:text-5xl font-black mb-5 tracking-tight leading-tight italic">مذہبی <span className="bg-gradient-to-r from-emerald-400 to-yellow-500 bg-clip-text text-transparent">خدمات</span></h1>
          <p className="text-zinc-500 text-sm md:text-base max-w-2xl font-light leading-relaxed">علومِ آلِ محمد (ع) کی ترویج، مساجد و مدارس کا قیام اور دنیا بھر میں پیغامِ کربلا کو عام کرنے کا ریکارڈ۔</p>
        </div>

        {/* کارڈز گرڈ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {activities.map((item, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/10 to-yellow-500/10 rounded-[1.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full bg-[#0d0d0d] border border-zinc-800/60 rounded-[1.5rem] p-6 flex flex-col justify-between hover:bg-zinc-900/40 transition-all duration-500">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-zinc-900/80 rounded-xl border border-zinc-700 text-2xl group-hover:border-emerald-500/50 transition-all duration-300">{item.icon}</div>
                    <div className="flex flex-col items-start gap-1 text-left">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">{item.country}</span>
                      <span className="text-[8px] font-medium text-yellow-500/60 py-0.5 px-2 border border-yellow-500/10 rounded-full bg-yellow-500/5 uppercase">{item.tag}</span>
                    </div>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-zinc-100 mb-3 group-hover:text-yellow-400 transition-colors duration-300 leading-snug">{item.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light line-clamp-3">{item.desc}</p>
                </div>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center justify-center gap-2 py-3 bg-zinc-800/40 border border-zinc-700/50 rounded-xl text-[9px] font-bold tracking-widest text-zinc-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 uppercase shadow-lg">ریکارڈ دیکھیں 🎬</a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

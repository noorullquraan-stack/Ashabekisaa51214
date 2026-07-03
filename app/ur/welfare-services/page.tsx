import React from 'react';

export default function WelfareUr() {
  const projects = [
    { country: "نائیجر", tag: "پانی", icon: "💧", title: "المصطفیٰ یونیورسٹی میں کنواں", desc: "طلباء اور مقامی لوگوں کو صاف پانی کی فراہمی کے لیے بڑے کنویں کا قیام۔", link: "https://www.facebook.com/share/r/1D5cjZH46d/" },
    { country: "نائیجر", tag: "تعلیم", icon: "📖", title: "400 قرآن پاک", desc: "ان طلباء کو قرآن پاک کے نسخے فراہم کرنا جو پہلے لکڑی کی تختیوں پر انحصار کرتے تھے۔", link: "https://www.facebook.com/share/r/1ADZTzupWK/" },
    { country: "نائیجر", tag: "تعمیرات", icon: "🏗️", title: "اسکول امام حسن زکی (ع)", desc: "دارالحکومت نیامی میں نئے اسکول امام حسن زکی (ع) کا سنگ بنیاد۔", link: "https://www.facebook.com/photo?fbid=894338630295275" },
    { country: "نائیجر", tag: "تعمیرات", icon: "🏫", title: "امام حسین گرینڈ اسکول", desc: "معاشی دارالحکومت مرادی میں فلیگ شپ تعلیمی ادارے کا افتتاح۔", link: "https://www.facebook.com/share/r/1DzyZdC3g7/" },
    { country: "نائیجر", tag: "تعلیم", icon: "📚", title: "اسکول امام باقر (ع)", desc: "کونی شہر میں باقاعدہ افتتاح، فقہ اور اخلاقیات کے نصاب کا آغاز۔", link: "https://www.facebook.com/share/v/1E8zgXB87e/" },
    { country: "یمن", tag: "پانی", icon: "💧", title: "پانی کا کنواں #1151", desc: "الحدیدہ صوبے کے گاؤں الربع میں 700 مستحقین کو صاف پانی کی فراہمی۔", link: "https://www.facebook.com/reel/1426832179075491" },
    { country: "یمن", tag: "پانی", icon: "💧", title: "پانی کا کنواں #1149", desc: "وادی مور کے گاؤں الکملیہ میں 800 مستحقین کی خدمت۔", link: "https://www.facebook.com/share/v/19DNvgpbaG/" },
    { country: "تنزانیہ", tag: "صحت", icon: "🩸", title: "سید الشہداء بلڈ کیمپ", desc: "امام حسین (ع) کی یاد میں خون کے عطیہ کی انسانی ہمدردی مہم۔", link: "https://www.facebook.com/reel/1817484032968327" },
    { country: "تنزانیہ", tag: "تعلیم", icon: "🏫", title: "اسکول امام جعفر صادق (ع)", desc: "علم کی روشنی کے ساتھ آنے والی نسلوں کی پرورش کے لیے مذہبی اسکول کی تعمیر۔", link: "https://www.facebook.com/share/r/1GVPmwQ7y4/" },
    { country: "گنی بساؤ", tag: "مسجد", icon: "🕌", title: "مسجد امام مہدی (عج)", desc: "اسکول امام حسین (ع) کے ساتھ مسجد امام مہدی (عج) کی تعمیر کا آغاز۔", link: "https://www.facebook.com/share/r/1BS5ZYyEFc/" },
    { country: "گنی بساؤ", tag: "تعمیرات", icon: "🏗️", title: "اسکول امام حسین (ع)", desc: "مغربی افریقہ - کمیونٹی کے لیے روحانی اور تعلیمی مرکز کا قیام۔", link: "https://www.facebook.com/reel/757278857246463" },
    { country: "کیمرون", tag: "مڈل اسکول", icon: "🏫", title: "الحبیب المصطفیٰ اسکول", desc: "فومبان شہر کے گاؤں بنگورین میں جامع مڈل اسکول کا قیام۔", link: "https://www.facebook.com/photo?fbid=886410567754748" },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      <main className="flex-1 p-6 md:p-12 lg:px-32 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" dir="rtl">
        <div className="relative mb-16 text-right">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          <span className="inline-block text-emerald-400 text-[10px] font-bold tracking-[0.2em] bg-emerald-400/5 px-4 py-2 rounded-full border border-emerald-400/10 mb-5 backdrop-blur-sm">انسانی ہمدردی کا ریکارڈ</span>
          <h1 className="text-4xl md:text-6xl font-black mb-5 tracking-tight leading-tight italic">فلاحی <span className="bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-600 bg-clip-text text-transparent">خدمات</span></h1>
          <p className="text-zinc-500 text-base md:text-lg max-w-2xl font-light leading-relaxed">اصحاب کساء سینٹر کی عالمی انسانی کوششوں اور کمیونٹی کی بہتری کے منصوبوں کا جائزہ۔</p>
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
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center justify-center gap-2 py-3.5 bg-zinc-900/50 border border-zinc-800 rounded-xl text-[10px] font-bold tracking-widest text-zinc-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 uppercase">ریکارڈ دیکھیں 🎬</a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
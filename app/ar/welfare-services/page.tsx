import React from 'react';

export default function WelfareAr() {
  const projects = [
    { country: "النيجر", tag: "مياه", icon: "💧", title: "بئر في جامعة المصطفى", desc: "إنشاء بئر ماء كبير في جامعة المصطفى لتوفير المياه النظيفة للطلاب والأهالي.", link: "https://www.facebook.com/share/r/1D5cjZH46d/" },
    { country: "النيجر", tag: "تعليم", icon: "📖", title: "400 مصحف شريف", desc: "توفير 400 نسخة مطبوعة من القرآن الكريم للطلاب الذين كانوا يعتمدون سابقاً على الألواح الخشبية.", link: "https://www.facebook.com/share/r/1ADZTzupWK/" },
    { country: "النيجر", tag: "بنية تحتية", icon: "🏗️", title: "مدرسة الإمام الحسن الزكي (ع)", desc: "وضع حجر الأساس لمدرسة الإمام الحسن الزكي (ع) الجديدة في العاصمة نيامي.", link: "https://www.facebook.com/photo?fbid=894338630295275" },
    { country: "النيجر", tag: "بنية تحتية", icon: "🏫", title: "مدرسة الإمام الحسين الكبرى", desc: "افتتاح المؤسسة التعليمية الرائدة في العاصمة الاقتصادية، مرادي.", link: "https://www.facebook.com/share/r/1DzyZdC3g7/" },
    { country: "النيجر", tag: "تعليم", icon: "📚", title: "مدرسة الإمام الباقر (ع)", desc: "الافتتاح الرسمي في مدينة كوني وتفعيل المناهج الدراسية للفقه والأخلاق.", link: "https://www.facebook.com/share/v/1E8zgXB87e/" },
    { country: "اليمن", tag: "مياه", icon: "💧", title: "بئر ماء رقم 1151", desc: "توفير المياه العذبة لـ 700 مستفيد في قرية الربع بمحافظة الحديدة.", link: "https://www.facebook.com/reel/1426832179075491" },
    { country: "اليمن", tag: "مياه", icon: "💧", title: "بئر ماء رقم 1149", desc: "خدمة 800 مستفيد في قرية الكمالية، وادي مور.", link: "https://www.facebook.com/share/v/19DNvgpbaG/" },
    { country: "تنزانيا", tag: "صحة", icon: "🩸", title: "حملة سيد الشهداء للتبرع بالدم", desc: "حملة إنسانية للتبرع بالدم لمساعدة المرضى إحياءً لذكرى الإمام الحسين (ع).", link: "https://www.facebook.com/reel/1817484032968327" },
    { country: "تنزانيا", tag: "تعليم", icon: "🏫", title: "مدرسة الإمام جعفر الصادق (ع)", desc: "بناء مدرسة دينية مخصصة لتربية الأجيال القادمة بنور العلم والمعرفة.", link: "https://www.facebook.com/share/r/1GVPmwQ7y4/" },
    { country: "غينيا بيساو", tag: "مسجد", icon: "🕌", title: "مسجد الإمام المهدي (عج)", desc: "البدء في بناء مسجد الإمام المهدي (عج) إلى جانب مدرسة الإمام الحسين (ع).", link: "https://www.facebook.com/share/r/1BS5ZYyEFc/" },
    { country: "غينيا بيساو", tag: "بنية تحتية", icon: "🏗️", title: "مدرسة الإمام الحسين (ع)", desc: "غرب أفريقيا - إنشاء مركز روحي وتعليمي للمجتمع.", link: "https://www.facebook.com/reel/757278857246463" },
    { country: "الكاميرون", tag: "مدرسة", icon: "🏫", title: "مدرسة الحبيب المصطفى", desc: "تأسيس مدرسة إعدادية شاملة في قرية بانغورين بمدينة فومبان.", link: "https://www.facebook.com/photo?fbid=886410567754748" },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      <main className="flex-1 p-6 md:p-12 lg:px-32 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" dir="rtl">
        <div className="relative mb-16 text-right">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          <span className="inline-block text-emerald-400 text-[10px] font-bold tracking-[0.2em] bg-emerald-400/5 px-4 py-2 rounded-full border border-emerald-400/10 mb-5 backdrop-blur-sm">سجل المساعدات الإنسانية</span>
          <h1 className="text-4xl md:text-6xl font-black mb-5 tracking-tight leading-tight">الخدمات <span className="bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-600 bg-clip-text text-transparent">الاجتماعية</span></h1>
          <p className="text-zinc-500 text-base md:text-lg max-w-2xl font-light leading-relaxed">نظرة شاملة على الجهود الإنسانية العالمية ومشاريع النهوض بالمجتمع لمركز أصحاب الكساء.</p>
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
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center justify-center gap-2 py-3.5 bg-zinc-900/50 border border-zinc-800 rounded-xl text-[10px] font-bold tracking-widest text-zinc-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 uppercase">عرض السجل 🎬</a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
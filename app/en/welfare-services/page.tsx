
import React from 'react';

export default function WelfareEn() {
  const projects = [
    { country: "Niger", tag: "Water", icon: "💧", title: "Well at Al-Mustafa University", desc: "Establishment of a large water well at Al-Mustafa University to provide clean water to students and locals.", link: "https://www.facebook.com/share/r/1D5cjZH46d/" },
    { country: "Niger", tag: "Education", icon: "📖", title: "400 Holy Qurans", desc: "Providing 400 printed copies of the Holy Quran to students who previously relied on traditional wooden slates.", link: "https://www.facebook.com/share/r/1ADZTzupWK/" },
    { country: "Niger", tag: "Infrastructure", icon: "🏗️", title: "Imam Hasan al-Zaki (as) School", desc: "Laying the foundation stone for the new Imam Hasan al-Zaki (as) School in the capital city, Niamey.", link: "https://www.facebook.com/photo?fbid=894338630295275" },
    { country: "Niger", tag: "Infrastructure", icon: "🏫", title: "Imam Hussain Grand School", desc: "Inauguration of the flagship educational institution in the economic capital, Maradi.", link: "https://www.facebook.com/share/r/1DzyZdC3g7/" },
    { country: "Niger", tag: "Education", icon: "📚", title: "Imam al-Baqir (as) School", desc: "Official opening in Kuni city, activating curriculums for Theology, Jurisprudence, Ethics, and Quran.", link: "https://www.facebook.com/share/v/1E8zgXB87e/" },
    { country: "Yemen", tag: "Water", icon: "💧", title: "Water Well #1151", desc: "Providing fresh water to 700 beneficiaries in Al-Rabu' village, Al-Hudaidah province.", link: "https://www.facebook.com/reel/1426832179075491" },
    { country: "Yemen", tag: "Water", icon: "💧", title: "Water Well #1149", desc: "Serving 800 beneficiaries in Al-Kamiliyah village, Wadi Moor.", link: "https://www.facebook.com/share/v/19DNvgpbaG/" },
    { country: "Tanzania", tag: "Health", icon: "🩸", title: "Syed al-Shuhada Blood Camp", desc: "Humanitarian blood donation campaign organized to assist patients, commemorating Imam Hussain (as).", link: "https://www.facebook.com/reel/1817484032968327" },
    { country: "Tanzania", tag: "Education", icon: "🏫", title: "Imam Jafar al-Sadiq (as) School", desc: "Construction of a religious school dedicated to raising future generations with the light of knowledge.", link: "https://www.facebook.com/share/r/1GVPmwQ7y4/" },
    { country: "Guinea-Bissau", tag: "Mosque", icon: "🕌", title: "Imam Mahdi (aj) Mosque", desc: "Initiation of the construction of Imam Mahdi (aj) Mosque alongside Imam Hussain (as) School.", link: "https://www.facebook.com/share/r/1BS5ZYyEFc/" },
    { country: "Guinea-Bissau", tag: "Infrastructure", icon: "🏗️", title: "Imam Hussain (as) School", desc: "West Africa - Establishing a spiritual and educational hub for the community.", link: "https://www.facebook.com/reel/757278857246463" },
    { country: "Cameroon", tag: "Middle School", icon: "🏫", title: "Al-Habib Al-Mustafa School", desc: "Comprehensive middle school established in Bangourain village, Foumban city.", link: "https://www.facebook.com/photo?fbid=886410567754748" },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      <main className="flex-1 p-6 md:p-12 lg:px-32 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" dir="ltr">
        <div className="relative mb-16">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          <span className="inline-block text-emerald-400 text-[10px] font-bold tracking-[0.2em] uppercase bg-emerald-400/5 px-4 py-2 rounded-full border border-emerald-400/10 mb-5 backdrop-blur-sm">Humanitarian Registry</span>
          <h1 className="text-4xl md:text-6xl font-black mb-5 tracking-tight leading-tight">Welfare <span className="bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-600 bg-clip-text text-transparent">Services</span></h1>
          <p className="text-zinc-500 text-base md:text-lg max-w-2xl font-light leading-relaxed">A comprehensive overview of the <span className="text-zinc-300 font-medium">Ashaab al-Kisaa Center's</span> global humanitarian efforts.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/10 to-emerald-500/10 rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full bg-[#0d0d0d] border border-zinc-800/40 rounded-[2rem] p-7 flex flex-col justify-between hover:bg-zinc-900/40 transition-all duration-500">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-2.5 bg-zinc-900/80 rounded-xl border border-zinc-800 text-2xl">{item.icon}</div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-sm font-bold text-zinc-300 tracking-wider uppercase">{item.country}</span>
                      <span className="text-[8px] font-black text-yellow-500/60 tracking-widest uppercase py-0.5 px-2 border border-yellow-500/10 rounded-full bg-yellow-500/5">{item.tag}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-100 mb-3 group-hover:text-yellow-400 transition-colors duration-300 leading-snug">{item.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">{item.desc}</p>
                </div>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center justify-center gap-2 py-3.5 bg-zinc-900/50 border border-zinc-800 rounded-xl text-[9px] font-bold tracking-widest text-zinc-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg uppercase">View Record 🎬</a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

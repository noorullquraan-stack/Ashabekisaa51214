import React from 'react';

export default function ZiyaratAr() {
  const liveZiyarat = {
    title: "البث المباشر لزيارة حرم الإمام الحسين (علیه السلام)",
    desc: "تابع الزيارة المباركة مباشرة من الحرم الشريف وعش الأجواء الروحية في كل وقت من أي مكان.",
    embedUrl: "https://www.youtube.com/embed/NDZaYVpZl4I?autoplay=0&controls=1&rel=0",
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-white font-sans">
      <main className="flex-1 p-6 md:p-12 lg:px-32 bg-gradient-to-b from-[#0a0a0a] via-black to-[#050505]" dir="rtl">
        <div className="relative mb-14 text-right">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          <span className="inline-block text-emerald-400 text-[9px] font-bold tracking-[0.2em] bg-emerald-400/10 px-4 py-1.5 rounded-full border border-emerald-400/20 mb-5 backdrop-blur-sm uppercase">Live Ziyarat</span>
          <h1 className="text-3xl md:text-5xl font-black mb-5 tracking-tight leading-tight italic">زيارات <span className="bg-gradient-to-r from-emerald-400 to-yellow-500 bg-clip-text text-transparent">مباركة</span></h1>
          <p className="text-zinc-500 text-sm md:text-base max-w-2xl font-light leading-relaxed text-right">البث المباشر من حرم الإمام الحسين (عليه السلام) في كربلاء المقدسة.</p>
        </div>

        <section className="relative mb-12 overflow-hidden rounded-[1.75rem] border border-emerald-400/20 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_35%),linear-gradient(135deg,rgba(9,9,11,0.96),rgba(17,24,39,0.92))] p-5 md:p-8 shadow-[0_0_40px_rgba(16,185,129,0.08)]">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(250,204,21,0.06),transparent)] pointer-events-none"></div>
          <div className="relative space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-[10px] font-bold tracking-[0.22em] text-yellow-400">
                LIVE ZIYARAT
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-white">
                {liveZiyarat.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-zinc-300">
                {liveZiyarat.desc}
              </p>
            </div>
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-emerald-400/30 shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src={liveZiyarat.embedUrl}
                title="Live Ziyarat"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://imamhussain.org/arabic/live"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-emerald-300/30 bg-emerald-400 px-6 py-3 text-sm font-extrabold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-400"
              >
                عرض في الموقع الأصلي
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

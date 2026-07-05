"use client";

// map/[country]/page.tsx

import React, { useState } from "react";
import { notFound } from "next/navigation";
import { countriesData } from "../countryPagesData";

export default function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: countrySlug } = React.use(params);
  const data = countriesData[countrySlug];
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  if (!data) {
    notFound();
  }

  return (
    <div dir="rtl" className="min-h-screen bg-[#0d0d0d] text-[#e0e0e0] font-sans antialiased p-4 md:p-10 selection:bg-[#d4af37] selection:text-black">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Top Organization Title */}
        <div className="text-center md:text-right border-b border-[#222222] pb-4">
          <p className="text-[#d4af37] font-bold text-sm md:text-base tracking-wide opacity-90">
            مرکز اصحاب الکسا (ع) برای راهنمایی بین‌المللی / حسینی مقدس
          </p>
        </div>

        {/* Clean & Sleek Header Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 pt-2">
          <div className="text-center md:text-right flex-1 space-y-3">
            <h1 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight">
              {data.name}
            </h1>
            <p className="text-[#b3b3b3] text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              {data.subtitle}
            </p>
          </div>
          
          {/* Flag Fixed Frame */}
          <div className="w-36 md:w-44 h-24 md:h-28 relative rounded-lg border border-[#d4af37]/40 p-1 bg-[#1a1a1a] shadow-lg shadow-[#d4af37]/5 overflow-hidden shrink-0">
            <div className="w-full h-full rounded bg-neutral-900 overflow-hidden relative">
              <img 
                src={data.flag} 
                alt={`پرچم ${data.name}`} 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          {/* Introduction */}
          <section className="space-y-4 bg-[#111111] border border-[#222] p-6 rounded-xl hover:border-[#d4af37]/30 transition-all duration-300">
            <h2 className="text-[#d4af37] text-xl font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              معرفی کشور و اهمیت جغرافیایی
            </h2>
            {data.introImage && (
              <div 
                className="relative w-full h-64 rounded-lg overflow-hidden border border-[#d4af37]/20 cursor-pointer group"
                onClick={() => setLightboxImage(data.introImage)}
              >
                <img 
                  src={data.introImage} 
                  alt="معرفی کشور" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    کلیک کنید تا تصویر کامل را ببینید
                  </span>
                </div>
              </div>
            )}
            <p className="text-base text-[#b3b3b3] leading-relaxed text-justify">
              {data.intro}
            </p>
          </section>

          {/* Challenges */}
          <section className="space-y-4 bg-[#111111] border border-[#222] p-6 rounded-xl hover:border-[#d4af37]/30 transition-all duration-300">
            <h2 className="text-[#d4af37] text-xl font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              چالش‌های منطقه‌ای و نیاز به مرکز انسانیت
            </h2>
            {data.challengesImage && (
              <div 
                className="relative w-full h-64 rounded-lg overflow-hidden border border-[#d4af37]/20 cursor-pointer group"
                onClick={() => setLightboxImage(data.challengesImage)}
              >
                <img 
                  src={data.challengesImage} 
                  alt="چالش‌های منطقه‌ای" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    کلیک کنید تا تصویر کامل را ببینید
                  </span>
                </div>
              </div>
            )}
            <p className="text-base text-[#b3b3b3] leading-relaxed text-justify">
              {data.challenges}
            </p>
          </section>
        </div>

        {/* Core Services Section */}
        <section className="space-y-8 pt-4">
          <div className="space-y-2">
            <h2 className="text-[#d4af37] text-2xl font-bold">
              خدمات عظیم مرکز اصحاب الکسا (ع)
            </h2>
            <p className="text-base text-[#999999]">
              {data.servicesIntro}
            </p>
          </div>

          <div className="space-y-10">
            {data.features.map((feature: any, index: number) => (
              <div key={index} className="bg-[#141414] border border-[#222] hover:border-[#d4af37]/40 p-8 rounded-xl transition-all duration-300 group">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                  {/* Text Section */}
                  <div className="flex-1 flex flex-col justify-center gap-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl bg-[#1a1a1a] w-16 h-16 rounded-xl flex items-center justify-center border border-[#333] group-hover:border-[#d4af37]/30 transition-colors shrink-0">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-2xl group-hover:text-[#d4af37] transition-colors mb-2">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-base text-[#a0a0a0] leading-relaxed text-justify">
                      {feature.desc}
                    </p>
                  </div>
                  
                  {/* Images Section */}
                  {feature.images && feature.images.length > 0 && (
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {feature.images.map((img: string, imgIndex: number) => (
                        <div 
                          key={imgIndex} 
                          className="relative aspect-square rounded-lg overflow-hidden border border-[#d4af37]/20 cursor-pointer group/img shadow-lg"
                          onClick={() => setLightboxImage(img)}
                        >
                          <img 
                            src={img} 
                            alt={`${feature.title} - تصویر ${imgIndex + 1}`} 
                            className="w-full h-full object-cover transition-all duration-500 group-hover/img:scale-110 group-hover/img:brightness-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                            <div className="flex flex-col items-center gap-2">
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                              <span className="text-white text-sm font-medium">کلیک کنید تا تصویر کامل را ببینید</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Beautiful Media Grid */}
        <section className="space-y-6 pt-4">
          <div className="border-b border-[#222] pb-3">
            <h2 className="text-[#d4af37] text-2xl font-bold">
              نگاه‌های بصری و لینک‌های رسانه‌ای مفصل
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.links.map((link: any, index: number) => (
              <a 
                key={index} 
                href={link.url}
                className="bg-[#111111] border border-[#222] hover:border-[#d4af37] p-5 rounded-xl flex items-center justify-between gap-4 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(212,175,55,0.05)]"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#333] text-[#d4af37] text-sm flex items-center justify-center font-mono shrink-0 group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                    {link.id}
                  </span>
                  <span className="text-white text-sm font-medium leading-snug group-hover:text-[#d4af37] transition-colors line-clamp-2">
                    {link.text}
                  </span>
                </div>
                <span className="text-[#d4af37] text-lg transform group-hover:translate-x-[-4px] transition-transform shrink-0">
                  ←
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-[#222] text-center text-xs text-[#666666]">
          <p>مرکز اصحاب الکسا (ع) برای راهنمایی بین‌المللی / حسینی مقدس — دفتر تبلیغات و رسانه</p>
        </footer>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 left-6 text-white text-5xl hover:text-[#d4af37] transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            ×
          </button>
          <img 
            src={lightboxImage} 
            alt="تصویر کامل" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

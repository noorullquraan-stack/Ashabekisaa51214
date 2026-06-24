import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const languages = [
    {
      name: "عربی",
      flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906530/iraq_aeukuq.gif",
      href: "/ar/map"
    },
    {
      name: "اردو",
      flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906529/Pakistan_y2zwci.gif",
      href: "/ur/map"
    },
    {
      name: "فارسی",
      flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906527/Iran_rtdncz.gif",
      href: "/fa/map"
    },
    {
      name: "English",
      flag: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1780906499/England_q4tw1a.gif",
      href: "/en/map"
    }
  ];

  // Updated animation with longer distance (100px) and slightly slower speed
  const animationStyles = `
    @keyframes slideIn {
      from { 
        opacity: 0; 
        transform: translateX(100px) scale(0.8); 
      }
      to { 
        opacity: 1; 
        transform: translateX(0) scale(1); 
      }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center p-4 text-slate-100 font-sans">
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

      {/* Main Container */}
      <div className="flex flex-col items-center gap-4 w-full max-w-3xl">

        {/* Video Section */}
        <div className="w-full rounded-xl overflow-hidden shadow-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block"
          >
            <source src="https://res.cloudinary.com/dmqej8n4z/video/upload/q_auto/f_auto/v1781768070/landing-page_xfcqu1.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Language Bar */}
        <div className="w-full flex justify-center z-20 mt-1">
          <div className="flex justify-center gap-3 md:gap-5">
            {languages.map((lang, index) => (
              <Link
                key={lang.name}
                href={lang.href}
                className="flex flex-col items-center gap-1 group cursor-pointer will-change-transform"
                style={{
                  // Increased duration to 0.8s for the long slide
                  animation: `slideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.12}s backwards, float 3.5s ease-in-out ${1 + index * 0.2}s infinite`
                }}
              >
                <div className="relative">
                  <div className="w-9 h-9 md:w-11 md:h-11 relative overflow-hidden rounded-full shadow-[0_0_10px_rgba(255,215,0,0.2)] group-hover:shadow-[0_0_18px_rgba(255,215,0,0.6)] group-hover:scale-110 transition-all duration-300 will-change-transform">
                    <Image
                      src={lang.flag}
                      alt={lang.name}
                      fill
                      sizes="(max-width: 768px) 36px, 44px"
                      className="object-cover scale-125"
                      quality={85}
                      unoptimized
                    />
                  </div>
                </div>

                <span
                  className={`
                    font-bold transition-colors duration-300 drop-shadow-md
                    ${['عربی', 'اردو', 'فارسی'].includes(lang.name) ? 'tracking-tight text-sm md:text-base' : 'tracking-wide text-xs md:text-sm'}
                    text-zinc-300 group-hover:text-gold
                  `}
                  style={{
                    animation: `fadeIn 0.5s ease-out ${0.5 + index * 0.1}s backwards`
                  }}
                >
                  {lang.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
} 
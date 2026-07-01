"use client";

const introVideoUrl = "https://res.cloudinary.com/dmqej8n4z/video/upload/v1782393097/Ashabal-Kisaa-ezgif.com-gif-maker_i6xavx.webm";
const clicksVideoUrl = "https://res.cloudinary.com/dmqej8n4z/video/upload/v1782554788/clicks-ezgif.com-gif-to-webm-converter_wgciov.webm";

// YouTube Videos List
const youtubeVideos = [
    { title: "Ahl al-Kisa Global Center for International Guidance", url: "https://youtu.be/fD6aF700KqU" },
    { title: "Inauguration of Religious Schools in Africa", url: "https://youtu.be/TPuGFaGI4Lk" }
];

export default function EnAboutPage() {
    return (
        <div dir="ltr" className="w-full bg-[#0a0a0a] min-h-screen text-zinc-100 p-4 md:p-8 flex flex-col items-center antialiased select-none">
            <div className="w-full max-w-6xl flex flex-col gap-10">

                {/* 👑 Main Header */}
                <div className="w-full border-b border-yellow-400/20 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="text-left">
                        <h1 className="font-serif font-bold text-2xl md:text-4xl text-yellow-400 mb-2 leading-tight tracking-wide drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
                            Ahl al-Kisa Global Center for International Guidance
                        </h1>
                        <p className="text-zinc-400 text-xs md:text-sm font-sans tracking-wider uppercase">
                            Under the patronage: Imam Hussain Holy Shrine — Holy Karbala, Iraq
                        </p>
                    </div>

                    <div className="flex flex-col gap-1 bg-zinc-900/60 border border-zinc-800/80 p-3 rounded-xl text-left text-xs font-serif min-w-[240px]">
                        <div><span className="text-yellow-400/90 font-bold">Center Director:</span> H.E. Sheikh Ahmed Rashid Al-Tarafy <span className="text-[10px] text-zinc-500">(May his successes continue)</span></div>
                        <div><span className="text-yellow-400/90 font-bold">Prepared by:</span> Research & Studies Department</div>
                    </div>
                </div>

                {/* 🎥 Video Reports Section */}
                <div className="w-full border-b border-yellow-400/20 pb-6">
                    <h2 className="text-xl font-bold text-yellow-400 mb-6 border-l-4 border-yellow-500 pl-3">Visual Reports</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {youtubeVideos.map((video, index) => (
                            <div key={index} className="flex flex-col gap-3">
                                <div className="w-full rounded-2xl overflow-hidden border border-yellow-400/30 bg-black aspect-video shadow-lg">
                                    <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${video.url.split('youtu.be/')[1] || video.url.split('v=')[1]}`} allowFullScreen></iframe>
                                </div>
                                <h3 className="text-center font-bold text-yellow-400/90 text-sm md:text-base font-serif">
                                    {video.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 🎥 Section 1: Background & Importance */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 flex flex-col gap-5 order-2 lg:order-1 font-serif text-left text-sm md:text-base leading-relaxed text-zinc-300">
                        <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-l-4 border-yellow-500 pl-3 mb-1">
                            Religious Background & Importance of Preaching
                        </h2>
                        <p>
                            Preaching, guidance, and spreading the divine message in the true Islamic religion is considered one of the highest and greatest social and religious obligations. It is the sacred mission for which God sent the prophets and messengers, and the righteous saints made it the crown of their service and the source of their divine honor.
                        </p>

                        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-5 my-2 text-center shadow-inner">
                            <p className="text-yellow-400 text-base md:text-xl font-bold font-serif mb-3 leading-loose tracking-wide">
                                ﴿And it is not for the believers to go forth all together. For there should separate from every division of them a group to obtain understanding in the religion and warn their people when they return to them that they might be cautious.﴾
                            </p>
                            <span className="text-xs text-zinc-500 font-sans tracking-widest uppercase">— Surah At-Tawbah, Verse 122</span>
                        </div>
                    </div>

                    <div className="lg:col-span-5 w-full order-1 lg:order-2 flex flex-col gap-2">
                        <span className="text-[10px] font-sans text-yellow-400/80 block uppercase tracking-widest font-bold ml-1">
                            • Center's Introductory Video
                        </span>

                        <div className="w-full rounded-2xl overflow-hidden border border-yellow-400/30 bg-zinc-950 aspect-video shadow-[0_0_40px_rgba(212,175,55,0.12)] hover:border-yellow-400/60 transition-all duration-300">
                            <video
                                src={introVideoUrl}
                                controls
                                playsInline
                                preload="metadata"
                                className="w-full h-full object-contain bg-black"
                            />
                        </div>
                    </div>
                </div>

                {/* 📖 Section 2: Hadiths & Modern Challenges */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900/20 border border-zinc-900 rounded-2xl p-6 font-serif text-left text-sm md:text-base leading-relaxed text-zinc-300">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-yellow-400 font-bold text-base md:text-lg border-l-2 border-yellow-500/50 pl-2">Light of the Infallibles (PBUT)</h3>
                        <p>
                            Imam Ali bin Musa Al-Ridha (Peace be upon him) prayed for mercy upon the preachers who revive the sciences of Ahl al-Bayt, saying: "May Allah have mercy on a servant who revives our affairs." When asked how one revives their affairs, he replied: "By learning our sciences and teaching them to the people, for if the people knew the beauty of our words, they would follow us."
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-yellow-400 font-bold text-base md:text-lg border-l-2 border-yellow-500/50 pl-2">Challenges of the Modern Era</h3>
                        <p>
                            Today, we live in an era characterized by fierce intellectual attacks, deep doubts, and false theories targeting human belief and faith. Under these circumstances, the need for sincere, honest preachers with good conduct and solid knowledge is more urgent than ever to illuminate hearts with the light of certainty.
                        </p>
                    </div>
                </div>

                {/* 🏛️ Section 3: History & Integration */}
                <div className="flex flex-col gap-4 font-serif text-left text-sm md:text-base leading-relaxed text-zinc-300 border-t border-zinc-900 pt-6">
                    <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-l-4 border-yellow-500 pl-3 mb-2">
                        History & Integration with the Holy Shrine
                    </h2>
                    <p>
                        Ahl al-Kisa Global Center for International Guidance was established in 2016 (1437 AH) as an independent administration led by Sheikh Ahmed Al-Tarafy. Due to its high efficiency and outstanding field activity, the center received special support from the legitimate custodian of the Imam Hussain Holy Shrine, Sheikh Abdul Mahdi Al-Karbalai.
                    </p>
                    <p>
                        In August 2022 (1444 AH), the center was officially integrated to become an integral part of the administrative structure of the Imam Hussain Holy Shrine. This integration gave the projects broader international dimensions. The center bases its comprehensive humanitarian mission on the immortal covenant of Imam Ali (Peace be upon him) to Malik al-Ashtar: "People are of two types: either your brother in religion or your equal in creation."
                    </p>
                </div>

                {/* 🛠️ Section 4: Activities & Services */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-zinc-900 pt-6">
                    <div className="lg:col-span-5 w-full flex flex-col gap-2">
                        <span className="text-[10px] font-sans text-yellow-400/80 block uppercase tracking-widest font-bold ml-1">
                            • Live Footage of Field & Social Services
                        </span>
                        <div className="w-full rounded-2xl overflow-hidden border border-yellow-400/30 bg-zinc-950 aspect-video shadow-[0_0_40px_rgba(212,175,55,0.12)] hover:border-yellow-400/60 transition-all duration-300">
                            <video src={clicksVideoUrl} controls autoPlay muted loop preload="metadata" className="w-full h-full object-contain bg-black" />
                        </div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col gap-4 font-serif text-left text-sm md:text-base leading-relaxed text-zinc-300">
                        <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-l-4 border-yellow-500 pl-3 mb-1">
                            Field Operations & Global Services
                        </h2>
                        <div className="flex flex-col gap-3">
                            <div>
                                <h4 className="text-zinc-100 font-bold text-sm md:text-base mb-1 text-yellow-400/80">1. International Intellectual & Educational Activities:</h4>
                                <p className="text-xs md:text-sm text-zinc-400">
                                    Including dispatching preaching delegations to remote areas, establishing schools and cultural centers, drafting solid educational curricula derived from the pure household, providing financial support to build mosques in poor countries, and hosting international visiting delegations.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-zinc-100 font-bold text-sm md:text-base mb-1 text-yellow-400/80">2. Humanitarian Activities & Service Projects:</h4>
                                <p className="text-xs md:text-sm text-zinc-400">
                                    Solving the water crisis in Africa; the center drills hundreds of sweet artesian wells to save children from diseases caused by drought, inspired by the thirst of Imam Hussain and his brother Abu al-Fadl al-Abbas (Peace be upon them), in addition to caring for needy families to ensure a dignified life.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 📞 Section 5: Contact Info */}
                <div className="w-full bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 font-sans">
                    <div className="text-left flex flex-col gap-1">
                        <span className="text-[10px] text-yellow-400 font-bold tracking-widest uppercase">Official Contact Channels</span>
                        <h3 className="font-serif font-bold text-zinc-200 text-base md:text-lg">Contact the General Secretariat directly</h3>
                        <p className="text-xs text-zinc-500 font-serif">Headquarters: Holy Karbala, Iraq</p>
                    </div>
                    <div className="flex flex-col gap-2 text-xs md:text-sm text-zinc-300">
                        <div className="flex items-center gap-2 justify-start">
                            <span className="font-bold text-yellow-400 select-all tracking-wide">009647807818164</span>
                            <span className="text-zinc-500 font-serif">Phone 1</span>
                        </div>
                        <div className="flex items-center gap-2 justify-start">
                            <span className="font-bold text-yellow-400 select-all tracking-wide">009647810005096</span>
                            <span className="text-zinc-500 font-serif">Phone 2</span>
                        </div>
                        <div className="flex items-center gap-2 justify-start">
                            <span className="text-zinc-400 select-all font-medium">aacenter86@gmail.com</span>
                            <span className="text-zinc-500 font-serif">Email</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
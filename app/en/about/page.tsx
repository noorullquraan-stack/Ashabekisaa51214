"use client";

const introVideoUrl = "https://res.cloudinary.com/dmqej8n4z/video/upload/v1782393097/Ashabal-Kisaa-ezgif.com-gif-maker_i6xavx.webm";
const clicksVideoUrl = "https://res.cloudinary.com/dmqej8n4z/video/upload/v1782554788/clicks-ezgif.com-gif-to-webm-converter_wgciov.webm";

// Facebook Video URL
const facebookVideoUrl = "https://www.facebook.com/alrwdha/videos/1888738388507562";

// YouTube Videos List
const youtubeVideos = [
    { title: "Ashab al-Kisa Center for International Guidance", url: "https://youtu.be/fD6aF700KqU" },
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
                            Ashab al-Kisa International Center for Islamic Guidance
                        </h1>
                        <p className="text-zinc-400 text-xs md:text-sm font-sans tracking-wider uppercase">
                            Under the Auspices of: Imam Hussain Holy Shrine — Karbala, Iraq
                        </p>
                    </div>

                    <div className="flex flex-col gap-1 bg-zinc-900/60 border border-zinc-800/80 p-3 rounded-xl text-left text-xs font-serif min-w-[240px]">
                        <div><span className="text-yellow-400/90 font-bold">Director:</span> Sheikh Ahmed Rasheed Al-Turfi</div>
                        <div><span className="text-yellow-400/90 font-bold">Prepared by:</span> Department of Studies & Research</div>
                    </div>
                </div>

                {/* 🎥 YouTube Videos Section */}
                <div className="w-full border-b border-yellow-400/20 pb-6">
                    <h2 className="text-xl font-bold text-yellow-400 mb-6 border-l-4 border-yellow-500 pl-3">Video Reports</h2>
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

                {/* 🎥 Section 1: Theological & Legal Background */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 flex flex-col gap-5 font-serif text-left text-sm md:text-base leading-relaxed text-zinc-300">
                        <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-l-4 border-yellow-500 pl-3 mb-1">
                            Legal Foundation & Importance of Islamic Preaching
                        </h2>
                        <p>
                            In Islam, preaching, guidance, and disseminating the divine message constitute the loftiest social and religious obligations. It is the sacred mission for which Allah commissioned prophets and messengers, and which the saints embraced as the crown of their service.
                        </p>

                        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-5 my-2 text-center shadow-inner">
                            <p className="text-yellow-400 text-base md:text-lg font-bold font-serif mb-3 leading-loose tracking-wide italic">
                                "And it is not for the believers to go forth [to battle] all at once. For there should separate from every division of them a group to obtain understanding in the religion and warn their people when they return to them that they might be cautious."
                            </p>
                            <span className="text-xs text-zinc-500 font-sans tracking-widest uppercase">— Surah At-Tawbah, Verse 122</span>
                        </div>
                    </div>

                    <div className="lg:col-span-5 w-full flex flex-col gap-2">
                        <span className="text-[10px] font-sans text-yellow-400/80 block uppercase tracking-widest font-bold ml-1">
                            • Introductory Center Video
                        </span>
                        <div className="w-full rounded-2xl overflow-hidden border border-yellow-400/30 bg-zinc-950 aspect-video shadow-[0_0_40px_rgba(212,175,55,0.12)] hover:border-yellow-400/60 transition-all duration-300">
                            <video src={introVideoUrl} controls playsInline preload="metadata" className="w-full h-full object-contain bg-black" />
                        </div>
                    </div>
                </div>

                {/* 📖 Section 2: Holy Traditions & Contemporary Challenges */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900/20 border border-zinc-900 rounded-2xl p-6 font-serif text-left text-sm md:text-base leading-relaxed text-zinc-300">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-yellow-400 font-bold text-base md:text-lg border-l-2 border-yellow-500/50 pl-2">Light of the Infallibles (Peace be upon them)</h3>
                        <p>
                            Imam Ali bin Musa Al-Rida (pbuh) invoked mercy for preachers who revive the knowledge of the Ahl al-Bayt, saying: "May Allah have mercy on a servant who revives our affair." When asked how, he replied: "He learns our knowledge and teaches it to the people; for if people knew the beauty of our words, they would surely follow us."
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-yellow-400 font-bold text-base md:text-lg border-l-2 border-yellow-500/50 pl-2">Contemporary Challenges</h3>
                        <p>
                            Today, we live in an era marked by aggressive intellectual challenges, skepticism, and misleading ideologies targeting human faith. Under these circumstances, the need for sincere, knowledgeable preachers to illuminate hearts with the light of certainty has become more urgent than ever.
                        </p>
                    </div>
                </div>

                {/* 🏛️ Section 3: History & Integration with the Holy Shrine */}
                <div className="flex flex-col gap-4 font-serif text-left text-sm md:text-base leading-relaxed text-zinc-300 border-t border-zinc-900 pt-6">
                    <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-l-4 border-yellow-500 pl-3 mb-2">
                        History of the Center & Integration into the Holy Shrine
                    </h2>
                    <p>
                        The Ashab al-Kisa International Center was established in 2016 AD (1437 AH) as an independent administration under the leadership of Sheikh Ahmed Al-Turfi. Due to its outstanding field operations, it received the special patronage of the Legal Custodian of the Imam Hussain Holy Shrine, Sheikh Abdul-Mahdi Al-Karbalai.
                    </p>
                    <p>
                        In August 2022 AD (1444 AH), the center was officially integrated into the administrative structure of the Imam Hussain Holy Shrine. This integration lent a global dimension to its projects. Its mission is deeply rooted in Imam Ali’s (pbuh) timeless decree to Malik al-Ashtar: "People are of two types: either your brother in faith or your equal in creation."
                    </p>
                </div>

                {/* 🛠️ Section 4: Activities & Global Impact */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-zinc-900 pt-6">
                    <div className="lg:col-span-5 w-full flex flex-col gap-2">
                        <span className="text-[10px] font-sans text-yellow-400/80 block uppercase tracking-widest font-bold ml-1">
                            • Glimpses of Field and Social Services
                        </span>
                        <div className="w-full rounded-2xl overflow-hidden border border-yellow-400/30 bg-zinc-950 aspect-video shadow-[0_0_40px_rgba(212,175,55,0.12)] hover:border-yellow-400/60 transition-all duration-300">
                            <video src={clicksVideoUrl} controls autoPlay muted loop preload="metadata" className="w-full h-full object-contain bg-black" />
                        </div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col gap-4 font-serif text-left text-sm md:text-base leading-relaxed text-zinc-300">
                        <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-l-4 border-yellow-500 pl-3 mb-1">
                            Core Pillars of Global Field Operations
                        </h2>
                        <div className="flex flex-col gap-3">
                            <div>
                                <h4 className="text-zinc-100 font-bold text-sm md:text-base mb-1 text-yellow-400/80">1. Educational & Intellectual Activities:</h4>
                                <p className="text-xs md:text-sm text-zinc-400">
                                    Deploying missionary delegations to remote villages, establishing schools and cultural centers, designing curricula based on the teachings of the Prophet's progeny, and constructing mosques in developing nations.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-zinc-100 font-bold text-sm md:text-base mb-1 text-yellow-400/80">2. Humanitarian Projects:</h4>
                                <p className="text-xs md:text-sm text-zinc-400">
                                    Addressing water scarcity in Africa by drilling hundreds of artesian wells to provide clean drinking water, inspired by the thirst of Imam Hussain and Abu al-Fadl al-Abbas (peace be upon them), alongside welfare support for families.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 🎬 Facebook Video Section at the End */}
                <div className="w-full border-t border-zinc-900 pt-8 flex flex-col md:flex-row gap-8 items-start bg-zinc-900/10 p-6 rounded-2xl border border-zinc-900">
                    <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-yellow-400/20 bg-black aspect-video shadow-xl">
                        <iframe
                            src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(facebookVideoUrl)}&show_text=false&width=560`}
                            className="w-full h-full"
                            style={{ border: 'none', overflow: 'hidden' }}
                            scrolling="no"
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        />
                    </div>
                    <div className="w-full md:w-1/2 font-serif text-left flex flex-col gap-3">
                        <h2 className="text-lg md:text-xl font-bold text-yellow-400 border-l-4 border-yellow-500 pl-3 mb-1">
                            Introducing the Center on "Towards the Light" Program
                        </h2>
                        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                            Introduction to the #Ashab_al-Kisa Center, affiliated with the General Secretariat of the Imam Hussain Holy Shrine, detailing its scope of operations on the radio program "Towards the Light" (Bi-Ittijah Al-Noor).
                        </p>
                        <div className="text-xs md:text-sm text-zinc-400 flex flex-col gap-1.5 mt-2 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                            <div><span className="text-yellow-400/90 font-bold">Guest:</span> Scientific Assistant of the Center, Sheikh Ahmed Al-Fatlawi</div>
                            <div><span className="text-yellow-400/90 font-bold">Host:</span> Lateef Al-Hasnawi</div>
                            <div><span className="text-yellow-400/90 font-bold">Radio Direction:</span> Qasim Al-Amidi</div>
                            <div><span className="text-yellow-400/90 font-bold">Public Relations:</span> Ali Ghali</div>
                        </div>
                    </div>
                </div>

                {/* 📞 Contact Information */}
                <div className="w-full bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 font-sans">
                    <div className="text-left flex flex-col gap-1">
                        <span className="text-[10px] text-yellow-400 font-bold tracking-widest uppercase">Official Channels</span>
                        <h3 className="font-serif font-bold text-zinc-200 text-base md:text-lg">Contact the Secretariat Directly</h3>
                        <p className="text-xs text-zinc-500 font-serif">Headquarters: Karbala, Iraq</p>
                    </div>
                    <div className="flex flex-col gap-2 text-xs md:text-sm text-zinc-300">
                        <div><span className="text-zinc-500">Phone 1:</span> <span className="text-yellow-400 font-bold select-all">009647807818164</span></div>
                        <div><span className="text-zinc-500">Phone 2:</span> <span className="text-yellow-400 font-bold select-all">009647810005096</span></div>
                        <div><span className="text-zinc-500">Email:</span> <span className="text-zinc-400 select-all font-medium">aacenter86@gmail.com</span></div>
                    </div>
                </div>

            </div>
        </div>
    );
}
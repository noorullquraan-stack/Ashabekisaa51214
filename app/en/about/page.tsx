"use client";

const introVideoUrl = "https://res.cloudinary.com/dmqej8n4z/video/upload/v1782393097/Ashabal-Kisaa-ezgif.com-gif-maker_i6xavx.webm";
const clicksVideoUrl = "https://res.cloudinary.com/dmqej8n4z/video/upload/v1782554788/clicks-ezgif.com-gif-to-webm-converter_wgciov.webm";

export default function EnAboutPage() {
    return (
        <div dir="ltr" className="w-full bg-[#0a0a0a] min-h-screen text-zinc-100 p-4 md:p-8 flex flex-col items-center antialiased select-none">
            <div className="w-full max-w-6xl flex flex-col gap-10">

                {/* 👑 Main Header & Administration */}
                <div className="w-full border-b border-yellow-400/20 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="text-left">
                        <h1 className="font-sans font-medium text-lg md:text-2xl text-yellow-400 mb-2 leading-tight tracking-wide drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
                            Ashab al-Kisaa International Center for International Guidance
                        </h1>
                        <p className="text-zinc-400 text-xs md:text-[11px] font-sans tracking-widest uppercase">
                            Under the Auspices of: The Holy Shrine of Imam Husain — Karbala, Iraq
                        </p>
                    </div>

                    <div className="flex flex-col gap-1 bg-zinc-900/60 border border-zinc-800/80 p-3 rounded-xl text-left text-[11px] font-sans min-w-[240px]">
                        <div><span className="text-yellow-400/90 font-medium">Director:</span> Sheikh Ahmed Rashid Al-Tarfi <span className="text-[10px] text-zinc-500">(Damat Tofeeqatuhu)</span></div>
                        <div><span className="text-yellow-400/90 font-medium">Department:</span> Research & Studies Division</div>
                    </div>
                </div>

                {/* 🎥 Section 1: Theological Foundations */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 flex flex-col gap-5 order-2 lg:order-1 font-sans text-left text-zinc-300 tracking-wide leading-relaxed text-xs md:text-sm">
                        <h2 className="text-sm md:text-base font-semibold text-yellow-400/90 border-l-4 border-yellow-500 pl-3 mb-1 uppercase tracking-wider">
                            Theological Foundations & Importance of Propagation
                        </h2>
                        <p>
                            In Islam, propagation, guidance, and transmitting divine messages to mankind are regarded as the highest social and religious obligations. This is the sacred mission for which Allah Almighty sent prophets and messengers, and it is the service that holy figures and scholars have embraced as their greatest source of honor.
                        </p>

                        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-5 my-2 text-center shadow-inner">
                            <p className="text-yellow-400 text-sm md:text-lg font-serif mb-3 leading-loose tracking-wide">
                                "And it is not for the believers to go forth [to battle] all at once. For why should there not divert from every group of them a faction to obtain understanding in religion and warn their people when they return to them that they might be cautious?"
                            </p>
                            <span className="text-[10px] text-zinc-500 font-sans tracking-widest uppercase">— Surah At-Tawbah, Verse 122</span>
                        </div>
                    </div>

                    {/* Intro Video Player Clean and Original */}
                    <div className="lg:col-span-5 w-full order-1 lg:order-2 flex flex-col gap-2">
                        <span className="text-[10px] font-sans text-yellow-400/80 block uppercase tracking-widest font-bold ml-1">
                            • Center Introduction Video
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

                {/* 📖 Section 2: Noble Ahadith & Modern Challenges */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900/20 border border-zinc-900 rounded-2xl p-6 font-sans text-left text-zinc-300 tracking-wide leading-relaxed text-xs md:text-sm">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-yellow-400 font-medium text-xs md:text-sm border-l-2 border-yellow-500/50 pl-2 uppercase tracking-wider">In Light of Noble Traditions</h3>
                        <p>
                            Imam Ali bin Musa al-Rida (AS) prayed for the propagation of the teachings of Ahl al-Bayt, saying: <span className="text-yellow-400 font-medium font-serif">"May Allah have mercy on a servant who revives our matter."</span> When asked how, he replied: <span className="text-zinc-100 font-medium font-serif">"He learns our sciences and teaches them to the people, for if people knew the beauty of our words, they would surely follow us."</span>
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-yellow-400 font-medium text-xs md:text-sm border-l-2 border-yellow-500/50 pl-2 uppercase tracking-wider">Contemporary Challenges</h3>
                        <p>
                            Our current era is marked by severe intellectual onslaughts, skepticism, and false ideologies aimed at weakening human faith and doctrine. Under these conditions, the need for sincere, righteous, and highly-learned missionaries has intensified to illuminate hearts with certain faith.
                        </p>
                    </div>
                </div>

                {/* 🏛️ Section 3: History & Shrine Integration */}
                <div className="flex flex-col gap-4 font-sans text-left text-zinc-300 tracking-wide leading-relaxed text-xs md:text-sm border-t border-zinc-900 pt-6">
                    <h2 className="text-sm md:text-base font-semibold text-yellow-400/90 border-l-4 border-yellow-500 pl-3 mb-2 uppercase tracking-wider">
                        History, Timeline & Official Affiliation
                    </h2>
                    <p>
                        The Ashab al-Kisaa Center initially commenced operations as an independent entity under the leadership of Sheikh Ahmed Al-Tarfi in 2016 (1437 AH). Recognizing its extensive field efficiency and impact, the center received the gracious patronage and specialized support of the legal custodian of the Holy Husain Shrine, His Eminence Sheikh Abdul Mahdi Al-Karbalai, from 2022 (1444 AH) onwards.
                    </p>
                    <p>
                        In August 2022, the center was formally integrated into the administrative and organizational infrastructure of the Holy Shrine of Imam Husain. This incorporation granted the initiatives international reinforcement and absolute precision. The center builds its humanitarian missions on the timeless declaration of Amir al-Mu'minin (AS) to Malik al-Ashtar: <span className="text-zinc-100 font-medium italic">"People are of two types: either your brother in faith or your equal in creation."</span>
                    </p>
                </div>

                {/* 🛠️ Section 4: Academic & Welfare Operations */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-zinc-900 pt-6">
                    <div className="lg:col-span-5 w-full flex flex-col gap-2">
                        <span className="text-[10px] font-sans text-yellow-400/80 block uppercase tracking-widest font-bold mr-1">
                            • Highlights of Field Services
                        </span>
                        <div className="w-full rounded-2xl overflow-hidden border border-yellow-400/30 bg-zinc-950 aspect-video shadow-[0_0_40px_rgba(212,175,55,0.12)] hover:border-yellow-400/60 transition-all duration-300">
                            <video src={clicksVideoUrl} controls autoPlay muted loop preload="metadata" className="w-full h-full object-contain bg-black" />
                        </div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col gap-4 font-sans text-left text-xs md:text-sm tracking-wide leading-relaxed">
                        <h2 className="text-sm md:text-base font-semibold text-yellow-400/90 border-l-4 border-yellow-500 pl-3 mb-1 uppercase tracking-wider">
                            Dual Operational Wings & Global Scope
                        </h2>
                        <div className="flex flex-col gap-3">
                            <div>
                                <h4 className="text-zinc-100 font-medium text-xs md:text-sm mb-1 text-yellow-400/80">1. Intellectual & Educational Initiatives:</h4>
                                <p className="text-zinc-400 text-[11px] md:text-xs">
                                    Conducting active field tours, educational seminars, and congregations in remote villages; managing cultural centers and designing authenticated curricula based on Ahl al-Bayt sciences; constructing and renovating mosques in underdeveloped nations; and hosting global intellectual delegations visiting the holy sites.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-zinc-100 font-medium text-xs md:text-sm mb-1 text-yellow-400/80">2. Humanitarian & Welfare Missions:</h4>
                                <p className="text-zinc-400 text-[11px] md:text-xs">
                                    Combating the severe water crisis in Africa; digging hundreds of deep artesian water wells in remote locations (such as Zokoguhé and Massendat in Côte d'Ivoire) to save lives from severe drought, inspired by the thirst of Imam Husain and Abu al-Fadl al-Abbas (AS), alongside providing dignified socio-economic support to underprivileged families.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 📞 Section 5: Contact Channels */}
                <div className="w-full bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 font-sans">
                    <div className="text-left flex flex-col gap-1">
                        <span className="text-[10px] text-yellow-400 font-bold tracking-widest uppercase">Official Channels</span>
                        <h3 className="font-sans font-medium text-zinc-200 text-sm md:text-base">Contact the General Secretariat Directly</h3>
                        <p className="text-[11px] text-zinc-500">Main Office: Holy Karbala, Iraq</p>
                    </div>
                    <div className="flex flex-col gap-2 text-xs text-zinc-300">
                        <div className="flex items-center gap-2 justify-start">
                            <span className="text-zinc-500">:Phone 1</span>
                            <span className="font-medium text-yellow-400 select-all tracking-wide">009647807818164</span>
                        </div>
                        <div className="flex items-center gap-2 justify-start">
                            <span className="text-zinc-500">:Phone 2</span>
                            <span className="font-medium text-yellow-400 select-all tracking-wide">009647810005096</span>
                        </div>
                        <div className="flex items-center gap-2 justify-start">
                            <span className="text-zinc-500">:Email</span>
                            <span className="text-zinc-400 select-all font-medium">aacenter86@gmail.com</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
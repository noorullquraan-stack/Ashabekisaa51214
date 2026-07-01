export default function EducationalPageEn() {
    // نیجر کے دروس کا ڈیٹا نیٹورک
    const nigerLessons = [
        { id: 1, title: "Lesson 1: Discussion on Salam", desc: "Based on the saying of Imam Sadiq (as) to Yunus bin Zhabyan: 'Salutations upon you, O Aba Abdillah...'", link: "https://www.facebook.com/" },
        { id: 2, title: "Lesson 2: Principles of Religion (Usul al-Din)", desc: "Explanation of the agreed-upon principles of religion among Muslims, and the Imamiyyah specifics.", link: "https://www.facebook.com/" },
        { id: 3, title: "Lesson 3: Refutation of Doubts (Types of Shirk)", desc: "Continuation of the detailed explanation regarding Manifest, Hidden, and Most Hidden Shirk.", link: "https://www.facebook.com/" },
        { id: 4, title: "Lesson 4: Refutation of Doubts (Categories of Shirk)", desc: "Detailed classification and academic analysis of academic doubts regarding various forms of Shirk.", link: "https://www.facebook.com/" },
        { id: 5, title: "Lesson 5: Introduction to the book 'Bidayat al-Ma'rifah'", desc: "Introduction to the book 'Bidayat al-Ma'rifah', its author, and the significance of Theology literature.", link: "https://www.facebook.com/" },
        { id: 6, title: "Lesson 6: Theory of Al-Amr Bayn al-Amrayn", desc: "Explanation of the theological theory of 'The matter between the two matters' during prayer recitations.", link: "https://www.facebook.com/" },
        { id: 7, title: "Lesson 7: Discourses on Imamah", desc: "Comprehensive academic research and discourses on General and Specific Imamah.", link: "https://www.facebook.com/" },
        { id: 8, title: "Lesson 8: Classification of Divine Attributes", desc: "An in-depth study into dividing attributes into Essential (Dhatiyah), Action-based (Fi'liyah), and Negative (Salbiyah).", link: "https://www.facebook.com/" },
        { id: 9, title: "Lesson 9: Refutation of Ash'arite Determinism", desc: "Intellectual and rational refutation of the Ash'ari theory of Jabr using logical proofs.", link: "https://www.facebook.com/" }
    ];

    // نیجر کی دیگر تعلیمی سرگرمیاں
    const nigerActivities = [
        { title: "Meeting with Scholars (Discussion on Wasilah)", desc: "Intellectual exchange and academic discussion regarding the theological concept of Wasilah.", link: "https://www.facebook.com/" },
        { title: "Meeting with Scholars (Quran & Itrah)", desc: "Sustained discourse on the inseparable bond between the Holy Quran and the Ahl al-Bayt (as).", link: "https://www.facebook.com/" },
        { title: "Friday Sermon & Delegation Address at Al-Mustafa University", desc: "Official address by the center's delegation to the scholars and students during Friday prayers.", link: "https://www.facebook.com/" },
        { title: "Imam al-Baqir (as) School - Quran Memorization", desc: "Overview of the curriculum and regular educational activities at the memorization center.", link: "https://www.facebook.com/" },
        { title: "Imam al-Baqir (as) School - Student's Quran Recitation", desc: "A showcase of a young student presenting a beautiful and precise recitation of the Holy Quran.", link: "https://www.facebook.com/" },
        { title: "Inauguration of Imam al-Baqir (as) School in Kuni City", desc: "Launching the school with an integrated curriculum of Theology, Jurisprudence, Ethics, and Seerah.", link: "https://www.facebook.com/" },
        { title: "Visit to Quran Memorization School (Urdu Video Report)", desc: "Special video coverage and briefing on how local students memorize the Holy Quran using traditional tablets.", link: "https://www.facebook.com/" },
        { title: "Distribution of 400 Copies of the Holy Quran", desc: "Providing 400 printed Quranic scripts to students who previously relied solely on writing on wooden slates.", link: "https://www.facebook.com/" },
        { title: "Official Inauguration of Imam Hussain Grand School in Maradi", desc: "Grand opening ceremony of the flagship educational institution established by the center.", link: "https://www.facebook.com/" },
        { title: "Foundation Stone of Imam Hasan al-Zaki (as) School in Niamey", desc: "Commencement of the construction of a new strategic educational complex in the capital.", link: "https://www.facebook.com/" },
        { title: "Visit to Al-Mustafa University & Interaction with Students", desc: "Academic engagement, dialogue, and distribution of guidance material among university scholars.", link: "https://www.facebook.com/" },
        { title: "Meeting with Sultan Dan Baskore Ahmed", desc: "High-level meeting outlining the core educational and peaceful objectives of the center's schools.", link: "https://www.facebook.com/" },
        { title: "Interaction with Scholars & Mosque Imams", desc: "An inspiring address emphasizing patience, steadfastness, and true propagation of Islamic values.", link: "https://www.facebook.com/" },
        { title: "Meeting with the Advisor to the Sultan", desc: "Strategic discussion on institutionalizing the propagation of authentic Islamic teachings.", link: "https://www.facebook.com/" },
        { title: "Meeting with Sheikh Musa Abu Bakr Hashim (Head of Tijaniyyah)", desc: "Inter-school harmony dialogue with the prominent leader of the Tijaniyyah order.", link: "https://www.facebook.com/" }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-black text-white font-sans antialiased" dir="ltr">

            <main className="flex-1 p-6 md:p-12 lg:px-32 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">

                {/* خوبصورت ہیڈر */}
                <div className="mb-16 border-b border-zinc-900 pb-10 text-center md:text-left">
                    <span className="inline-block text-yellow-500 text-xs font-bold tracking-widest uppercase bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/20 mb-4">
                        Academic and Educational Registry
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 bg-clip-text text-transparent tracking-tight">
                        Educational Services
                    </h1>
                    <h2 className="text-lg md:text-xl font-medium text-zinc-400 mb-6 max-w-4xl">
                        Ashaab al-Kisaa Center for International Guidance / Holy Shrine of Imam Hussain (as)
                    </h2>
                    <p className="text-zinc-400 leading-relaxed max-w-3xl border-s-4 border-yellow-500 ps-4 text-left inline-block text-sm md:text-base bg-zinc-900/20 py-3 rounded-r-xl">
                        A comprehensive presentation of the center's academic missions, institutions, specialized training lessons, and global research deployments.
                    </p>
                </div>

                {/* مین کنٹینٹ */}
                <div className="space-y-16">

                    {/* 1. NIGERIA */}
                    <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                            <span className="text-3xl">🇳🇬</span>
                            <div>
                                <h2 className="text-2xl font-extrabold text-yellow-500">Nigeria</h2>
                                <p className="text-xs text-zinc-500">Khatam al-Anbiya University Alliance</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-900/20 border border-zinc-900 p-6 rounded-2xl">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-zinc-200">Khatam al-Anbiya University Visit</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                    Official academic visit of the delegation from Ashaab al-Kisaa Center (Holy Shrine of Imam Hussain) to the university, fostering mutual intellectual collaboration and welcoming reception.
                                </p>
                            </div>

                            {/* ویڈیو پلے ہولڈر ڈیزائن */}
                            <div className="relative group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 aspect-video flex flex-col justify-center items-center p-4 text-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-black pointer-events-none"></div>
                                <div className="w-16 h-16 rounded-full bg-yellow-500/10 group-hover:bg-yellow-500 text-yellow-500 group-hover:text-black flex items-center justify-center text-2xl font-bold transition-all duration-300 mb-3 shadow-lg shadow-yellow-500/5">
                                    ▶
                                </div>
                                <span className="font-bold text-sm text-zinc-200 block mb-1">Official Video Report</span>
                                <span className="text-xs text-zinc-500 mb-4 block">Click below to play directly on Facebook</span>
                                <a href="https://www.facebook.com/photo?fbid=911989808530157" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-bold rounded-lg shadow-md transition">
                                    Watch Video 🎬
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* 2. NIGER (SPECIALIZED LESSONS) */}
                    <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                            <span className="text-3xl">🇳🇪</span>
                            <div>
                                <h2 className="text-2xl font-extrabold text-yellow-500">Niger — Imam Hussain (as) Grand School</h2>
                                <p className="text-xs text-zinc-500">Theological & Academic Coursework Series (9 Video Lessons)</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {nigerLessons.map((lesson) => (
                                <div key={lesson.id} className="bg-zinc-900/30 border border-zinc-850 p-5 rounded-2xl flex flex-col justify-between hover:border-yellow-500/30 transition group relative">
                                    <div className="mb-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-[10px] font-bold text-yellow-500/80 tracking-wider uppercase bg-yellow-500/5 px-2 py-0.5 rounded border border-yellow-500/10">Academic Module</span>
                                            <span className="text-xs text-zinc-600 font-mono">#{lesson.id}</span>
                                        </div>
                                        <h3 className="text-base font-bold text-zinc-200 mb-2 group-hover:text-yellow-500 transition-colors line-clamp-1">{lesson.title}</h3>
                                        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">{lesson.desc}</p>
                                    </div>

                                    {/* پلے ویڈیو ایکشن بلاک */}
                                    <a href={lesson.link} target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 bg-zinc-950 hover:bg-yellow-500 border border-zinc-800 hover:border-yellow-500 text-zinc-300 hover:text-black font-bold text-xs rounded-xl transition duration-200 flex items-center justify-center gap-2">
                                        <span>Watch Lesson Media</span> 🎬
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 3. NIGER (OTHER EDUCATIONAL ACTIVITIES) */}
                    <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                            <span className="text-3xl">🇳🇪</span>
                            <div>
                                <h2 className="text-2xl font-extrabold text-yellow-500">Niger — Infrastructure & General Media</h2>
                                <p className="text-xs text-zinc-500">Institutional Openings, Public Engagement & Documentaries</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {nigerActivities.map((act, index) => (
                                <div key={index} className="bg-zinc-900/40 border border-zinc-850 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-zinc-900/70 hover:border-zinc-800 transition">
                                    <div className="space-y-1">
                                        <h3 className="text-sm md:text-base font-bold text-zinc-200">{act.title}</h3>
                                        <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">{act.desc}</p>
                                    </div>
                                    <a href={act.link} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto whitespace-nowrap px-4 py-2.5 bg-zinc-950 hover:bg-yellow-500 border border-zinc-800 hover:border-yellow-500 text-zinc-300 hover:text-black font-bold text-xs rounded-xl transition flex items-center justify-center gap-1">
                                        Watch Report 📺
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. CAMEROON */}
                    <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                            <span className="text-3xl">🇨🇲</span>
                            <div>
                                <h2 className="text-2xl font-extrabold text-yellow-500">Cameroon</h2>
                                <p className="text-xs text-zinc-500">Middle School Administrations</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-900/20 border border-zinc-900 p-6 rounded-2xl">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-zinc-200">Al-Habib Al-Mustafa Middle School</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                    Comprehensive educational framework operational under the direct guidance and supervision of the center in Bangourain village, Foumban city, Cameroon.
                                </p>
                            </div>

                            <div className="relative group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 aspect-video flex flex-col justify-center items-center p-4 text-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-black pointer-events-none"></div>
                                <div className="w-16 h-16 rounded-full bg-yellow-500/10 group-hover:bg-yellow-500 text-yellow-500 group-hover:text-black flex items-center justify-center text-2xl font-bold transition-all duration-300 mb-3 shadow-lg shadow-yellow-500/5">
                                    📸
                                </div>
                                <span className="font-bold text-sm text-zinc-200 block mb-1">Official Media & Photo Post</span>
                                <span className="text-xs text-zinc-500 mb-4 block">Click below to open the complete report</span>
                                <a href="https://www.facebook.com/photo?fbid=886410567754748" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-bold rounded-lg shadow-md transition">
                                    View Report 📸
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* 5. TANZANIA */}
                    <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                            <span className="text-3xl">🇹🇿</span>
                            <div>
                                <h2 className="text-2xl font-extrabold text-yellow-500">Tanzania</h2>
                                <p className="text-xs text-zinc-500">Spiritual & Academic Seminaries</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-zinc-900/40 border border-zinc-850 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h3 className="text-base font-bold text-zinc-200">Al-Zahra (as) School — Dua al-Faraj Recitation</h3>
                                    <p className="text-xs text-zinc-400">Regular spiritual training and collective recitation in Kaghira village, Kigoma region.</p>
                                </div>
                                <a href="https://www.facebook.com/share/r/1GVPmwQ7y4/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center px-4 py-2.5 bg-zinc-950 hover:bg-yellow-500 border border-zinc-800 hover:border-yellow-500 text-zinc-300 hover:text-black font-bold text-xs rounded-xl transition flex items-center justify-center gap-1">
                                    Watch Video Reel 🎬
                                </a>
                            </div>
                            <div className="bg-zinc-900/40 border border-zinc-850 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h3 className="text-base font-bold text-zinc-200">Establishment of Imam Ja'far al-Sadiq (as) School</h3>
                                    <p className="text-xs text-zinc-400">The historical structural establishment and launching of advanced educational centers in Tanzania.</p>
                                </div>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center px-4 py-2.5 bg-zinc-950 hover:bg-yellow-500 border border-zinc-800 hover:border-yellow-500 text-zinc-300 hover:text-black font-bold text-xs rounded-xl transition flex items-center justify-center gap-1">
                                    Open Link 🔗
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* 6. PAKISTAN */}
                    <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl mb-12">
                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                            <span className="text-3xl">🇵🇰</span>
                            <div>
                                <h2 className="text-2xl font-extrabold text-yellow-500">Pakistan</h2>
                                <p className="text-xs text-zinc-500">Holy Quran Knowledge Seminars</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-900/20 border border-zinc-900 p-6 rounded-2xl">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-zinc-200">Northern Pakistan Women's Quranic Programs</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                    Special Holy Quran understanding, recitation arts, translation, and structured exegesis (Tafseer) courses conducted comprehensively during the Holy Month of Ramadan.
                                </p>
                            </div>

                            <div className="relative group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 aspect-video flex flex-col justify-center items-center p-4 text-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-black pointer-events-none"></div>
                                <div className="w-16 h-16 rounded-full bg-yellow-500/10 group-hover:bg-yellow-500 text-yellow-500 group-hover:text-black flex items-center justify-center text-2xl font-bold transition-all duration-300 mb-3 shadow-lg shadow-yellow-500/5">
                                    📖
                                </div>
                                <span className="font-bold text-sm text-zinc-200 block mb-1">Ramadan Project Media</span>
                                <span className="text-xs text-zinc-500 mb-4 block">Click below to open the complete gallery</span>
                                <a href="https://www.facebook.com/photo?fbid=877487521980386" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-bold rounded-lg shadow-md transition">
                                    View Program 📖
                                </a>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
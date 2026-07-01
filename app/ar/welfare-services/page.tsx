export default function WelfarePage() {
    const welfareData = [
        {
            country: "اليمن (Yemen)",
            icon: "🇾🇪",
            projects: [
                { title: "افتتاح البئر رقم 1151", desc: "محافظة الحديدة، قرية الربوع - 700 مستفيد", link: "https://www.facebook.com/reel/1426832179075491" },
                { title: "افتتاح البئر رقم 1149", desc: "محافظة الحديدة، قرية الكاملية - 800 مستفيد", link: "https://www.facebook.com/share/v/19DNvgpbaG/" }
            ]
        },
        {
            country: "تنزانيا (Tanzania)",
            icon: "🇹🇿",
            projects: [
                { title: "حملة التبرع بالدم", desc: "باسم سيد الشهداء (ع) لإغاثة المرضى المحتاجين", link: "https://www.facebook.com/reel/1817484032968327" }
            ]
        },
        {
            country: "النيجر (Niger)",
            icon: "🇳🇪",
            projects: [
                { title: "تأسيس بئر كبيرة", desc: "في جامعة المصطفى (ص) - لتوفير مياه الشرب النظيفة", link: "https://www.facebook.com/share/r/1D5cjZH46d/" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans" dir="rtl">
            <main className="max-w-6xl mx-auto p-6 md:p-12">

                {/* العنوان */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-800 mb-4">الخدمات الإنسانية والخيرية</h1>
                    <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                        يسعى مركز أصحاب الكساء (ع) للإرشاد الدولي لتقديم العون الإنساني، وتوفير المياه، ودعم المحتاجين ببركة سيد الشهداء (ع).
                    </p>
                </div>

                {/* بطاقات المشاريع */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {welfareData.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200 hover:shadow-xl transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl">{item.icon}</span>
                                <h2 className="text-2xl font-bold text-emerald-900">{item.country}</h2>
                            </div>
                            <div className="space-y-4">
                                {item.projects.map((proj, pIdx) => (
                                    <div key={pIdx} className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                                        <h3 className="font-bold text-emerald-800 mb-1">{proj.title}</h3>
                                        <p className="text-sm text-zinc-600 mb-3">{proj.desc}</p>
                                        <a href={proj.link} target="_blank" className="text-xs font-bold text-emerald-600 hover:text-emerald-800 underline">
                                            المزيد من التفاصيل 🔗
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* تذييل */}
                <div className="mt-16 bg-white p-8 rounded-3xl border border-emerald-100 text-center">
                    <h3 className="text-xl font-bold text-emerald-900 mb-2">الإنسانية هي رسالتنا</h3>
                    <p className="text-zinc-500 text-sm italic">"مَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا"</p>
                </div>
            </main>
        </div>
    );
}
import React from 'react';

export default function ReligiousServicesAr() {
    const activities = [
        { country: "عالمي", tag: "تعريف", icon: "✨", title: "التعريف بمركز أصحاب الكساء", desc: "برنامج (بإتجاه النور) مع الشيخ أحمد الفتلاوي - نظرة شاملة على أهداف المركز.", link: "https://www.facebook.com/alrwdha/videos/1888738388507562" },
        { country: "نيجيريا", tag: "راية", icon: "🚩", title: "وصول راية الإمام الحسين (ع)", desc: "تتشرف أرض نيجيريا بحضور راية الإمام الحسين عليه السلام للتبرك بها.", link: "https://www.facebook.com/share/r/1EcZTbMfqP/" },
        { country: "نيجيريا", tag: "أكاديمي", icon: "🎓", title: "زيارة جامعة خاتم الأنبياء", desc: "زيارة وفد مركز أصحاب الكساء للإرشاد الدولي إلى جامعة خاتم الأنبياء.", link: "https://www.facebook.com/photo?fbid=911989808530157" },
        { country: "غينيا بيساو", tag: "مجلس", icon: "🏴", title: "مجلس عزاء سيد الشهداء (ع)", desc: "إقامة مجلس رثاء سيد الشهداء في مدرسة أبي تراب بجمهورية غينيا بيساو.", link: "https://www.facebook.com/share/r/18dduhKRem/" },
        { country: "غينيا بيساو", tag: "بناء", icon: "🕌", title: "بناء مسجد الإمام المهدي (عج)", desc: "بدء مركز أصحاب الكساء ببناء مسجد الإمام المهدي (عج) في غينيا بيساو.", link: "https://www.facebook.com/share/r/1BS5ZYyEFc/" },
        { country: "غينيا بيساو", tag: "بناء", icon: "🏗️", title: "تأسيس مسجد ومدرسة الإمام الحسين", desc: "تأسيس مسجد وإلى جانبه مدرسة الإمام الحسين (عليه السلام).", link: "https://www.facebook.com/reel/757278857246463" },
        { country: "ساحل العاج", tag: "شعار", icon: "🗣️", title: "شعار لبيك يا حسين - مياجي", desc: "طلاب مدرسة فاطمة الزهراء (عليها السلام) يرفعون شعار لبيك يا حسين.", link: "https://www.facebook.com/share/r/18fxRCobVs/" },
        { country: "النيجر", tag: "راية", icon: "🚩", title: "تقديم الراية لزعيم التيجانية", desc: "تقديم راية الإمام الحسين (ع) إلى الشيخ موسى أبو بكر هاشم.", link: "https://www.facebook.com/share/r/1HQdTUcy1Q/" },
        { country: "النيجر", tag: "لقاء", icon: "🤝", title: "زيارة زعيم الطريقة التيجانية", desc: "زيارة الوفد المبارك ونقل تحيات العتبة الحسينية المقدسة.", link: "https://www.facebook.com/share/v/1FFBWsqfZJ/" },
        { country: "النيجر", tag: "تبليغ", icon: "📜", title: "الحديث عن فضيلة تربة كربلاء", desc: "الحديث عن قداسة تربة سيد الشهداء (ع) ولماذا نتبرك بها.", link: "https://www.facebook.com/share/v/17naQSWiRS/" },
        { country: "النيجر", tag: "صلاة", icon: "🛐", title: "صلاة الجمعة في مسجد مرادي", desc: "المشاركة في صلاة الجمعة في أكبر مسجد بالعاصمة الاقتصادية مرادي.", link: "https://www.facebook.com/reel/1446399637264363" },
        { country: "النيجر", tag: "صلاة", icon: "🕌", title: "صلاة الجمعة في جامعة المصطفى", desc: "المشاركة في صلاة الجمعة وإلقاء كلمة للسيد علي الياسري.", link: "https://www.facebook.com/share/r/1CFofANMje/" },
        { country: "النيجر", tag: "زيارة", icon: "📚", title: "زيارة جامعة المصطفى (ص)", desc: "الوفد المبارك يزور الجامعة ويحث الطلاب على طلب العلم.", link: "https://www.facebook.com/share/v/18Xqf8jBgh/" },
        { country: "النيجر", tag: "درس", icon: "🎙️", title: "رواية والسلام على الإمام", desc: "حديث يونس بن ظبيان وفضيلة السلام على الإمام الحسين (ع).", link: "https://www.facebook.com/share/v/1AMXrFM1Kq/" },
        { country: "النيجر", tag: "درس", icon: "📖", title: "بيان أصول الدين الإسلامي", desc: "تبيان أصول الدين المتفق عليها عند المسلمين في مدرسة الإمام الحسين.", link: "https://www.facebook.com/share/r/1D7hUepxWk/" },
        { country: "النيجر", tag: "عقيدة", icon: "🛡️", title: "رد الشبهات - أقسام الشرك (1)", desc: "بيان أقسام الشرك الجلي والخفي والأخفى.", link: "https://www.facebook.com/share/v/18BkkS4Z7b/" },
        { country: "النيجر", tag: "عقيدة", icon: "🛡️", title: "رد الشبهات - أقسام الشرك (2)", desc: "تتمة بيان أقسام الشرك والتحذير من الوقوع فيه.", link: "https://www.facebook.com/share/v/18XKKrNfbR/" },
        { country: "النيجر", tag: "عقيدة", icon: "⚖️", title: "تفسير التوحيد في العبودية", desc: "تفسير التوحيد وفق مدرسة أهل البيت (عليهم السلام).", link: "https://www.facebook.com/share/v/1Dkg7K3Grr/" },
        { country: "النيجر", tag: "درس", icon: "📘", title: "التعريف بكتاب 'بداية المعرفة'", desc: "التعريف بالكتاب العقائدي الأساسي ومصنفه الجليل.", link: "https://www.facebook.com/reel/2251701185635993" },
        { country: "النيجر", tag: "درس", icon: "🔄", title: "نظرية الأمر بين الأمرين", desc: "شرح نظرية الأمر بين الأمرين خلال الدروس العقائدية.", link: "https://www.facebook.com/share/r/1GCgkUaLCV/" },
        { country: "النيجر", tag: "درس", icon: "👑", title: "بحوث في الإمامة", desc: "سلسلة بحوث في الإمامة العامة والخاصة.", link: "https://www.facebook.com/share/v/1C28PQtun6/" },
        { country: "النيجر", tag: "درس", icon: "✨", title: "تقسيم الصفات الإلهية", desc: "بحث في تقسيم الصفات إلى ذاتية وفعلية وسلبية.", link: "https://www.facebook.com/share/v/18yYDiACZg/" },
        { country: "النيجر", tag: "درس", icon: "🚫", title: "بطلان نظرية الجبر", desc: "بطلان نظرية الجبر الأشعري بالأدلة العقلية الرصينة.", link: "https://www.facebook.com/share/v/1BWo6KMiQL/" },
        { country: "النيجر", tag: "افتتاح", icon: "🏫", title: "افتتاح مدرسة الإمام الحسين", desc: "افتتاح مدرسة الإمام الحسين الكبرى في العاصمة الاقتصادية مرادي.", link: "https://www.facebook.com/share/r/1DzyZdC3g7/" },
        { country: "النيجر", tag: "حوار", icon: "🏛️", title: "حوار مع رابطة العلماء (1)", desc: "الحديث مع رئيس الرابطة حول وجوب التمسك بالقرآن والعترة.", link: "https://www.facebook.com/share/v/18tBrwPZtd/" },
        { country: "النيجر", tag: "حوار", icon: "🏛️", title: "حوار مع رابطة العلماء (2)", desc: "بيان أن العترة الطاهرة هي التفسير الحقيقي لكلام الله.", link: "https://www.facebook.com/share/v/1981fxTJas/" },
        { country: "النيجر", tag: "تأسيس", icon: "🏗️", title: "مدرسة الإمام الحسن الزكي", desc: "وضع حجر الأساس لمدرسة الإمام الحسن الزكي في العاصمة نيامي.", link: "https://www.facebook.com/photo?fbid=894338630295275" },
        { country: "النيجر", tag: "تعليم", icon: "📖", title: "تحفيظ القرآن مدرسة الإمام الباقر", desc: "أنشطة وبرامج لحفظ وتعليم القرآن الكريم لطلاب النيجر.", link: "https://www.facebook.com/share/r/1HebzEwdtc/" },
        { country: "النيجر", tag: "تعليم", icon: "🎙️", title: "تلاوة عطرة لإحدى الطالبات", desc: "طالبة تقرأ على مسامع الوفد تلاوة مباركة من الذكر الحكيم.", link: "https://www.facebook.com/share/r/1CddRrwdTb/" },
        { country: "النيجر", tag: "افتتاح", icon: "🏫", title: "افتتاح مدرسة الإمام الباقر", desc: "افتتاح المدرسة في مدينة كوني وتفعيل مناهج العقائد والفقه.", link: "https://www.facebook.com/share/v/1E8zgXB87e/" },
        { country: "النيجر", tag: "تبليغ", icon: "📜", title: "كلمة أمام السلطان دان باسكور", desc: "كلمة بيانية لنشر علوم آل محمد (ع) ومقاصد مدارس المركز.", link: "https://www.facebook.com/share/r/1HC8j9TjEQ/" },
        { country: "النيجر", tag: "لقاء", icon: "🤝", title: "لقاء بالأساتذة والأئمة", desc: "لقاء توجيهي للأساتذة وأئمة المساجد حول الثبات في طلب العلم.", link: "https://www.facebook.com/share/r/1Adi14MSFn/" },
        { country: "النيجر", tag: "تعليم", icon: "📚", title: "زيارة مدرسة حفظ القرآن", desc: "الاطلاع على كيفية قراءة الطلاب للقرآن على الألواح الخشبية.", link: "https://www.facebook.com/reel/1226163682319681" },
        { country: "النيجر", tag: "توزيع", icon: "📘", title: "توزيع 400 مصحف شريف", desc: "شراء وتوزيع 400 مصحف على طلاب المدارس القرآنية في النيجر.", link: "https://www.facebook.com/share/r/1ADZTzupWK/" },
        { country: "النيجر", tag: "لقاء", icon: "🤝", title: "لقاء مستشار السلطان", desc: "زيارة مستشار السلطان والتحدث عن نشر تعاليم الإسلام.", link: "https://www.facebook.com/share/r/1JM5pSZNa7/" },
        { country: "تنزانيا", tag: "راية", icon: "🚩", title: "رفع الراية في مدرسة الزهراء", desc: "رفع راية أبي عبد الله الحسين (عليه السلام) في مدرسة الزهراء.", link: "https://www.facebook.com/share/r/1CFYaxnvV3/" },
        { country: "تنزانيا", tag: "دعاء", icon: "🤲", title: "دعاء الفرج مع الطلاب", desc: "قراءة دعاء الفرج لطلاب مدرسة الزهراء (عليها السلام).", link: "https://www.facebook.com/share/r/18f9zyBtFi/" },
        { country: "تنزانيا", tag: "تعليم", icon: "🏫", title: "مدرسة الإمام جعفر الصادق (ع)", desc: "إنشاء مدرسة دينية لتربية الأجيال على نهج العلم والتقوى.", link: "https://www.facebook.com/share/r/1GVPmwQ7y4/" },
        { country: "إندونيسيا", tag: "عيد", icon: "🌙", title: "صلاة عيد الفطر والخطبة", desc: "إقامة صلاة العيد وتقديم راية الإمام الحسين (ع) للمؤمنين.", link: "https://www.facebook.com/share/r/18hP2NvL3Q/" },
        { country: "إندونيسيا", tag: "استقبال", icon: "🤝", title: "استقبال الزائرين في كربلاء", desc: "استقبال زوار إندونيسيا في كربلاء وحثهم على التفقه في الدين.", link: "https://www.facebook.com/photo?fbid=871259829269822" },
        { country: "باكستان", tag: "قرآن", icon: "🧕", title: "البرنامج القرآني للنساء", desc: "برنامج رمضاني قرآني (تلاوة وتفسير) للنساء في شمال باكستان.", link: "https://www.facebook.com/photo/?fbid=877487521980386" },
        { country: "باكستان", tag: "لقاء", icon: "📜", title: "لقاء معتمد المرجعية", desc: "لقاء مدير المركز بمعتمد المرجعية الدينية لباكستان في كربلاء المقدسة.", link: "https://www.facebook.com/photo/?fbid=870541036008368" },
        { country: "الكاميرون", tag: "تعليم", icon: "🏫", title: "مدرسة الحبيب المصطفى", desc: "مدرسة متوسطة في قرية بنغورين تحت إشراف المركز.", link: "https://www.facebook.com/photo?fbid=886410567754748" },
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-white font-sans">
            <main className="flex-1 p-6 md:p-12 lg:px-32 bg-gradient-to-b from-[#0a0a0a] via-black to-[#050505]" dir="rtl">
                <div className="relative mb-14 text-right">
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
                    <span className="inline-block text-emerald-400 text-[9px] font-bold tracking-[0.2em] bg-emerald-400/10 px-4 py-1.5 rounded-full border border-emerald-400/20 mb-5 backdrop-blur-sm uppercase">الأنشطة الدينية والتبليغية</span>
                    <h1 className="text-3xl md:text-5xl font-black mb-5 tracking-tight leading-tight italic">الخدمات <span className="bg-gradient-to-r from-emerald-400 to-yellow-500 bg-clip-text text-transparent">الدينية</span></h1>
                    <p className="text-zinc-500 text-sm md:text-base max-w-2xl font-light leading-relaxed text-right">نشر علوم آل محمد (ع)، تأسيس المساجد والمدارس الدينية وتوثيق الأنشطة التبليغية في العالم.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {activities.map((item, idx) => (
                        <div key={idx} className="group relative text-right">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/10 to-yellow-500/10 rounded-[1.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative h-full bg-[#0d0d0d] border border-zinc-800/60 rounded-[1.5rem] p-6 flex flex-col justify-between hover:bg-zinc-900/40 transition-all duration-500">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 flex items-center justify-center bg-zinc-900/80 rounded-xl border border-zinc-700 text-2xl group-hover:border-emerald-500/50 transition-all duration-300">{item.icon}</div>
                                        <div className="flex flex-col items-start gap-1">
                                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">{item.country}</span>
                                            <span className="text-[8px] font-medium text-yellow-500/60 py-0.5 px-2 border border-yellow-500/10 rounded-full bg-yellow-500/5 uppercase">{item.tag}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-zinc-100 mb-3 group-hover:text-yellow-400 transition-colors duration-300 leading-snug">{item.title}</h3>
                                    <p className="text-xs text-zinc-500 leading-relaxed font-light line-clamp-3">{item.desc}</p>
                                </div>
                                <a href={item.link} target="_blank" className="mt-8 flex items-center justify-center gap-2 py-3 bg-zinc-800/40 border border-zinc-700/50 rounded-xl text-[9px] font-bold tracking-widest text-zinc-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 uppercase shadow-lg">عرض السجل 🎬</a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

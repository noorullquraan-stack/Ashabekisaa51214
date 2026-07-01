export default function EducationalPageAr() {
    // النيجر: سلسلة الدروس (9 دروس)
    const nigerLessons = [
        { id: 1, title: "الدرس الأول: مباحثة في السلام", desc: "مبني على قول الإمام الصادق (ع) ليونس بن ظبيان: 'السلام عليك يا أبا عبد الله...'", link: "https://www.facebook.com/" },
        { id: 2, title: "الدرس الثاني: أصول الدين", desc: "بيان أصول الدين المتفق عليها بين المسلمين، وما يختص به الإمامية.", link: "https://www.facebook.com/" },
        { id: 3, title: "الدرس الثالث: رد الشبهات (أنواع الشرك)", desc: "تتمة البيان التفصيلي حول الشرك الجلي، الخفي، والأخفى.", link: "https://www.facebook.com/" },
        { id: 4, title: "الدرس الرابع: رد الشبهات (أقسام الشرك)", desc: "تصنيف تفصيلي وتحليل أكاديمي للشبهات المطروحة حول أشكال الشرك المختلفة.", link: "https://www.facebook.com/" },
        { id: 5, title: "الدرس الخامس: مقدمة كتاب 'بداية المعرفة'", desc: "مقدمة تعريفية عن كتاب 'بداية المعرفة'، ومؤلفه، وأهمية الأدب العقائدي.", link: "https://www.facebook.com/" },
        { id: 6, title: "الدرس السادس: نظرية الأمر بين الأمرين", desc: "بيان النظرية العقائدية 'الأمر بين الأمرين' أثناء تلاوة الصلاة.", link: "https://www.facebook.com/" },
        { id: 7, title: "الدرس السابع: مباحث الإمامة", desc: "بحث أكاديمي شامل ومباحث معمقة في الإمامة العامة والخاصة.", link: "https://www.facebook.com/" },
        { id: 8, title: "الدرس الثامن: تقسيم الصفات الإلهية", desc: "دراسة معمقة لتقسيم الصفات الإلهية إلى ذاتية، فعلية، وسلبية.", link: "https://www.facebook.com/" },
        { id: 9, title: "الدرس التاسع: الرد على الجبر الأشعري", desc: "رد فكري وعقلي على نظرية الجبر الأشعرية باستخدام البراهين المنطقية.", link: "https://www.facebook.com/" }
    ];

    // النيجر: الأنشطة التعليمية الأخرى (15 نشاط)
    const nigerActivities = [
        { title: "لقاء مع العلماء (مباحثة في الوسيلة)", desc: "تبادل فكري ونقاش أكاديمي حول مفهوم الوسيلة من المنظور العقائدي.", link: "https://www.facebook.com/" },
        { title: "لقاء مع العلماء (القرآن والعترة)", desc: "نقاش مستمر حول الرابط الوثيق الذي لا ينفصم بين القرآن الكريم وأهل البيت (ع).", link: "https://www.facebook.com/" },
        { title: "خطبة الجمعة وكلمة الوفد في جامعة المصطفى", desc: "كلمة رسمية لوفد المركز للعلماء والطلاب أثناء أداء صلاة الجمعة.", link: "https://www.facebook.com/" },
        { title: "مدرسة الإمام الباقر (ع) - تحفيظ القرآن", desc: "نظرة عامة على المنهج الدراسي والأنشطة التعليمية المنتظمة في مركز التحفيظ.", link: "https://www.facebook.com/" },
        { title: "مدرسة الإمام الباقر (ع) - تلاوة قرآنية لطالب", desc: "عرض لطالب صغير يقدم تلاوة جميلة ودقيقة لآيات الذكر الحكيم.", link: "https://www.facebook.com/" },
        { title: "افتتاح مدرسة الإمام الباقر (ع) في مدينة كوني", desc: "إطلاق المدرسة بمنهج متكامل يضم العقائد، الفقه، الأخلاق، والسيرة النبوية.", link: "https://www.facebook.com/" },
        { title: "زيارة مدرسة تحفيظ القرآن (تقرير فيديو بالأردية)", desc: "تغطية مرئية خاصة توضح كيفية حفظ الطلاب المحليين للقرآن باستخدام الألواح التقليدية.", link: "https://www.facebook.com/" },
        { title: "توزيع 400 نسخة من القرآن الكريم", desc: "توفير 400 مصحف مطبوع للطلاب الذين كانوا يعتمدون حصرياً على الكتابة على الألواح الخشبية.", link: "https://www.facebook.com/" },
        { title: "الافتتاح الرسمي لمدرسة الإمام الحسين الكبرى في مارادي", desc: "حفل الافتتاح الكبير للمؤسسة التعليمية الرائدة التي أنشأها المركز.", link: "https://www.facebook.com/" },
        { title: "وضع حجر الأساس لمدرسة الإمام الحسن الزكي (ع) في نيامي", desc: "بدء أعمال البناء لمجمع تعليمي استراتيجي جديد في العاصمة.", link: "https://www.facebook.com/" },
        { title: "زيارة جامعة المصطفى والتفاعل مع الطلاب", desc: "مشاركة أكاديمية، حوار هادف، وتوزيع مواد توجيهية بين باحثي الجامعة.", link: "https://www.facebook.com/" },
        { title: "لقاء مع السلطان دان باسكوري أحمد", desc: "اجتماع رفيع المستوى يوضح الأهداف التعليمية والسلمية الأساسية لمدارس المركز.", link: "https://www.facebook.com/" },
        { title: "التفاعل مع العلماء وأئمة المساجد", desc: "خطاب ملهم يؤكد على الصبر، الثبات، والتبليغ الحقيقي للقيم الإسلامية الأصيلة.", link: "https://www.facebook.com/" },
        { title: "لقاء مع مستشار السلطان", desc: "نقاش استراتيجي حول مأسسة وترسيخ نشر التعاليم الإسلامية الصحيحة.", link: "https://www.facebook.com/" },
        { title: "لقاء مع الشيخ موسى أبو بكر هاشم (رئيس الطريقة التجانية)", desc: "حوار للتقريب بين المذاهب الإسلامية مع الزعيم البارز للطريقة التجانية.", link: "https://www.facebook.com/" }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-black text-white font-sans antialiased" dir="rtl">

            <main className="flex-1 p-6 md:p-12 lg:px-32 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">

                {/* قسم العنوان (Header) */}
                <div className="mb-16 border-b border-zinc-900 pb-10 text-center md:text-right">
                    <span className="inline-block text-yellow-500 text-xs font-bold tracking-widest uppercase bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/20 mb-4">
                        السجل الأكاديمي والتعليمي
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 bg-clip-text text-transparent tracking-tight">
                        الخدمات التعليمية
                    </h1>
                    <h2 className="text-lg md:text-xl font-medium text-zinc-400 mb-6 max-w-4xl">
                        مركز أصحاب الكساء للإرشاد الدولي / العتبة الحسينية المقدسة
                    </h2>
                    <p className="text-zinc-400 leading-relaxed max-w-3xl border-s-4 border-yellow-500 ps-4 text-right inline-block text-sm md:text-base bg-zinc-900/20 py-3 rounded-l-xl">
                        عرض شامل للمهام الأكاديمية للمركز، المؤسسات، الدروس التدريبية المتخصصة، والانتشار البحثي العالمي.
                    </p>
                </div>

                {/* المحتوى الرئيسي (Main Content) */}
                <div className="space-y-16">

                    {/* 1. NIGERIA (نيجيريا) */}
                    <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                            <span className="text-3xl">🇳🇬</span>
                            <div>
                                <h2 className="text-2xl font-extrabold text-yellow-500">نيجيريا</h2>
                                <p className="text-xs text-zinc-500">تحالف جامعة خاتم الأنبياء</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-900/20 border border-zinc-900 p-6 rounded-2xl">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-zinc-200">زيارة جامعة خاتم الأنبياء</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                    زيارة أكاديمية رسمية لوفد مركز أصحاب الكساء (العتبة الحسينية المقدسة) إلى الجامعة، لتعزيز التعاون الفكري المشترك والاستقبال الترحيبي.
                                </p>
                            </div>

                            {/* بطاقة الفيديو */}
                            <div className="relative group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 aspect-video flex flex-col justify-center items-center p-4 text-center">
                                <div className="absolute inset-0 bg-gradient-to-bl from-yellow-500/10 via-transparent to-black pointer-events-none"></div>
                                <div className="w-16 h-16 rounded-full bg-yellow-500/10 group-hover:bg-yellow-500 text-yellow-500 group-hover:text-black flex items-center justify-center text-2xl font-bold transition-all duration-300 mb-3 shadow-lg shadow-yellow-500/5">
                                    ▶
                                </div>
                                <span className="font-bold text-sm text-zinc-200 block mb-1">تقرير فيديو رسمي</span>
                                <span className="text-xs text-zinc-500 mb-4 block">انقر أدناه للتشغيل مباشرة على فيسبوك</span>
                                <a href="https://www.facebook.com/photo?fbid=911989808530157" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-bold rounded-lg shadow-md transition">
                                    شاهد الفيديو 🎬
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* 2. NIGER (النيجر - الدروس المتخصصة) */}
                    <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                            <span className="text-3xl">🇳🇪</span>
                            <div>
                                <h2 className="text-2xl font-extrabold text-yellow-500">النيجر — مدرسة الإمام الحسين (ع) الكبرى</h2>
                                <p className="text-xs text-zinc-500">سلسلة الدورات العقائدية والأكاديمية (9 دروس مرئية)</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {nigerLessons.map((lesson) => (
                                <div key={lesson.id} className="bg-zinc-900/30 border border-zinc-850 p-5 rounded-2xl flex flex-col justify-between hover:border-yellow-500/30 transition group relative">
                                    <div className="mb-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-[10px] font-bold text-yellow-500/80 tracking-wider uppercase bg-yellow-500/5 px-2 py-0.5 rounded border border-yellow-500/10">وحدة أكاديمية</span>
                                            <span className="text-xs text-zinc-600 font-mono">#{lesson.id}</span>
                                        </div>
                                        <h3 className="text-base font-bold text-zinc-200 mb-2 group-hover:text-yellow-500 transition-colors line-clamp-1">{lesson.title}</h3>
                                        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">{lesson.desc}</p>
                                    </div>

                                    <a href={lesson.link} target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 bg-zinc-950 hover:bg-yellow-500 border border-zinc-800 hover:border-yellow-500 text-zinc-300 hover:text-black font-bold text-xs rounded-xl transition duration-200 flex items-center justify-center gap-2">
                                        <span>شاهد الدرس المرئي</span> 🎬
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 3. NIGER (النيجر - الأنشطة التعليمية الأخرى) */}
                    <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                            <span className="text-3xl">🇳🇪</span>
                            <div>
                                <h2 className="text-2xl font-extrabold text-yellow-500">النيجر — البنية التحتية والإعلام العام</h2>
                                <p className="text-xs text-zinc-500">الافتتاحات المؤسسية، المشاركة العامة والأفلام الوثائقية</p>
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
                                        شاهد التقرير 📺
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. CAMEROON (الكاميرون) */}
                    <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                            <span className="text-3xl">🇨🇲</span>
                            <div>
                                <h2 className="text-2xl font-extrabold text-yellow-500">الكاميرون</h2>
                                <p className="text-xs text-zinc-500">إدارات المدارس المتوسطة</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-900/20 border border-zinc-900 p-6 rounded-2xl">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-zinc-200">مدرسة الحبيب المصطفى المتوسطة</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                    إطار تعليمي شامل يعمل تحت التوجيه والإشراف المباشر للمركز في قرية بانغورين، مدينة فومبان، الكاميرون.
                                </p>
                            </div>

                            <div className="relative group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 aspect-video flex flex-col justify-center items-center p-4 text-center">
                                <div className="absolute inset-0 bg-gradient-to-bl from-yellow-500/10 via-transparent to-black pointer-events-none"></div>
                                <div className="w-16 h-16 rounded-full bg-yellow-500/10 group-hover:bg-yellow-500 text-yellow-500 group-hover:text-black flex items-center justify-center text-2xl font-bold transition-all duration-300 mb-3 shadow-lg shadow-yellow-500/5">
                                    📸
                                </div>
                                <span className="font-bold text-sm text-zinc-200 block mb-1">الوسائط الرسمية والصور</span>
                                <span className="text-xs text-zinc-500 mb-4 block">انقر أدناه لفتح التقرير الكامل</span>
                                <a href="https://www.facebook.com/photo?fbid=886410567754748" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-bold rounded-lg shadow-md transition">
                                    عرض التقرير 📸
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* 5. TANZANIA (تنزانيا) */}
                    <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                            <span className="text-3xl">🇹🇿</span>
                            <div>
                                <h2 className="text-2xl font-extrabold text-yellow-500">تنزانيا</h2>
                                <p className="text-xs text-zinc-500">الحوزات الروحية والأكاديمية</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-zinc-900/40 border border-zinc-850 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h3 className="text-base font-bold text-zinc-200">مدرسة الزهراء (ع) — تلاوة دعاء الفرج</h3>
                                    <p className="text-xs text-zinc-400">تدريب روحي منتظم وتلاوة جماعية في قرية كاغيرا، إقليم كيغوما.</p>
                                </div>
                                <a href="https://www.facebook.com/share/r/1GVPmwQ7y4/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center px-4 py-2.5 bg-zinc-950 hover:bg-yellow-500 border border-zinc-800 hover:border-yellow-500 text-zinc-300 hover:text-black font-bold text-xs rounded-xl transition flex items-center justify-center gap-1">
                                    شاهد الفيديو 🎬
                                </a>
                            </div>
                            <div className="bg-zinc-900/40 border border-zinc-850 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h3 className="text-base font-bold text-zinc-200">تأسيس مدرسة الإمام جعفر الصادق (ع)</h3>
                                    <p className="text-xs text-zinc-400">التأسيس الهيكلي التاريخي وإطلاق مراكز تعليمية متقدمة في تنزانيا.</p>
                                </div>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center px-4 py-2.5 bg-zinc-950 hover:bg-yellow-500 border border-zinc-800 hover:border-yellow-500 text-zinc-300 hover:text-black font-bold text-xs rounded-xl transition flex items-center justify-center gap-1">
                                    افتح الرابط 🔗
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* 6. PAKISTAN (باكستان) */}
                    <section className="bg-zinc-950/60 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-2xl mb-12">
                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                            <span className="text-3xl">🇵🇰</span>
                            <div>
                                <h2 className="text-2xl font-extrabold text-yellow-500">باكستان</h2>
                                <p className="text-xs text-zinc-500">ندوات علوم القرآن الكريم</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-900/20 border border-zinc-900 p-6 rounded-2xl">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-zinc-200">البرامج القرآنية النسائية في شمال باكستان</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                    دورات خاصة في فهم القرآن الكريم، فنون التلاوة، الترجمة، والتفسير المنهجي أقيمت بشكل شامل خلال شهر رمضان المبارك.
                                </p>
                            </div>

                            <div className="relative group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 aspect-video flex flex-col justify-center items-center p-4 text-center">
                                <div className="absolute inset-0 bg-gradient-to-bl from-yellow-500/10 via-transparent to-black pointer-events-none"></div>
                                <div className="w-16 h-16 rounded-full bg-yellow-500/10 group-hover:bg-yellow-500 text-yellow-500 group-hover:text-black flex items-center justify-center text-2xl font-bold transition-all duration-300 mb-3 shadow-lg shadow-yellow-500/5">
                                    📖
                                </div>
                                <span className="font-bold text-sm text-zinc-200 block mb-1">وسائط مشروع رمضان</span>
                                <span className="text-xs text-zinc-500 mb-4 block">انقر أدناه لفتح المعرض الكامل</span>
                                <a href="https://www.facebook.com/photo?fbid=877487521980386" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-bold rounded-lg shadow-md transition">
                                    عرض البرنامج 📖
                                </a>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
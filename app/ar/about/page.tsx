"use client";

const introVideoUrl = "https://res.cloudinary.com/dmqej8n4z/video/upload/v1782393034/converted-ezgif.com-gif-maker_jxbcen.webm";
const clicksVideoUrl = "https://res.cloudinary.com/dmqej8n4z/video/upload/v1782554788/clicks-ezgif.com-gif-to-webm-converter_wgciov.webm";

// یہاں فیس بک ویڈیو کا لنک ہے
const facebookVideoUrl = "https://www.facebook.com/alrwdha/videos/1888738388507562";

// یہاں آپ کی یوٹیوب ویڈیوز کی لسٹ ہے
const youtubeVideos = [
    { title: "مركز أصحاب الكساء للإرشاد الدولي", url: "https://youtu.be/fD6aF700KqU" },
    { title: "افتتاح المدارس الدينية في قارة افريقيا", url: "https://youtu.be/TPuGFaGI4Lk" }
];

export default function ArAboutPage() {
    return (
        <div dir="rtl" className="w-full bg-[#0a0a0a] min-h-screen text-zinc-100 p-4 md:p-8 flex flex-col items-center antialiased select-none">
            <div className="w-full max-w-6xl flex flex-col gap-10">

                {/* 👑 مین ٹائٹل - سب سے اوپر */}
                <div className="w-full border-b border-yellow-400/20 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="text-right">
                        <h1 className="font-serif font-bold text-2xl md:text-4xl text-yellow-400 mb-2 leading-tight tracking-wide drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
                            مركز أصحاب الكساء العالمي للإرشاد الدولي
                        </h1>
                        <p className="text-zinc-400 text-xs md:text-sm font-sans tracking-wider uppercase">
                            تحت رعاية: العتبة الحسينية المقدسة — كربلاء المقدسة، العراق
                        </p>
                    </div>

                    <div className="flex flex-col gap-1 bg-zinc-900/60 border border-zinc-800/80 p-3 rounded-xl text-right text-xs font-serif min-w-[240px]">
                        <div><span className="text-yellow-400/90 font-bold">مدير المركز:</span> سماحة الشيخ أحمد رشيد الطرفي <span className="text-[10px] text-zinc-500">(دامت توفيقاته)</span></div>
                        <div><span className="text-yellow-400/90 font-bold">إعداد:</span> قسم الدراسات والبحوث</div>
                    </div>
                </div>

                {/* 🎥 یوٹیوب ویڈیوز کا سیکشن - ٹائٹل کے بالکل نیچے */}
                <div className="w-full border-b border-yellow-400/20 pb-6">
                    <h2 className="text-xl font-bold text-yellow-400 mb-6 border-r-4 border-yellow-500 pr-3">التقارير المرئية</h2>
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

                {/* 🎥 القسم الأول: الخلفية الفكرية والشرعية */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 flex flex-col gap-5 order-2 lg:order-1 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300">
                        <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-r-4 border-yellow-500 pr-3 mb-1">
                            الخلفية الشرعية وأهمية التبليغ
                        </h2>
                        <p>
                            إن التبليغ والإرشاد ونشر الرسالة الإلهية في الدين الإسلامي الحنيف يُعد من أسمى وأعظم الفرائض الاجتماعية والشرعية على الإطلاق. إنها الرسالة المقدسة التي بعث الله من أجلها الأنبياء والمرسلين، وجعلها الأنبياء والأولياء الصالحون تاجاً لخدمتهم ومصدراً لعزتهم الإلهية.
                        </p>

                        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-5 my-2 text-center shadow-inner">
                            <p className="text-yellow-400 text-base md:text-xl font-bold font-serif mb-3 leading-loose tracking-wide">
                                ﴿وَمَا كَانَ الْمُؤْمِنُونَ لِيَنْفِرُوا كَافَّةً فَلَوْلَا نَفَرَ مِنْ كُلِّ فِرْقَةٍ مِنْهُمْ طَائِفَةٌ لِيَتَفَقَّهُوا فِي الدِّينِ وَلِيُنْذِرُوا قَوْمَهُمْ إِذَا رَجَعُوا إِلَيْهِمْ لَعَلَّهُمْ يَحْذَرُونَ﴾
                            </p>
                            <span className="text-xs text-zinc-500 font-sans tracking-widest uppercase">— سورة التوبة، الآية ١٢٢</span>
                        </div>
                    </div>

                    {/* مشغل الفيديو التعريفي الأوريجنل */}
                    <div className="lg:col-span-5 w-full order-1 lg:order-2 flex flex-col gap-2">
                        <span className="text-[10px] font-sans text-yellow-400/80 block uppercase tracking-widest font-bold mr-1">
                            • العرض المرئي التعريفي للمركز
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

                {/* 📖 القسم الثاني: الأحاديث الشريفة وتحديات العصر */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900/20 border border-zinc-900 rounded-2xl p-6 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-yellow-400 font-bold text-base md:text-lg border-r-2 border-yellow-500/50 pr-2">من نور المعصومين (عليهم السلام)</h3>
                        <p>
                            لقد دعا الإمام علي بن موسى الرضا (عليه السلام) بالرحمة للمبلغين الذين يحيون علوم أهل البيت بقوله الشريف: «رَحِمَ اللهُ عَبداً أَحيَا أَمْرَنَا». وعندما سُئل كيف يحيى أمركم؟ قال عليه السلام: «يَتَعَلَّمُ عُلُومَنَا وَيُعَلِّمُهَا النَّاسَ، فَإِنَّ النَّاسَ لَوْ عَلِمُوا حُسْنَ كَلَامِنَا لَاتَّبَعُونَا».
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-yellow-400 font-bold text-base md:text-lg border-r-2 border-yellow-500/50 pr-2">تحديات العصر الحالي</h3>
                        <p>
                            نعيش اليوم في عصر يتسم بالهجمات الفكرية الشرسة والشكوك العميقة والنظريات الباطلة التي تستهدف عقيدة الإنسان وإيمانه. في ظل هذه الظروف، أصبحت الحاجة إلى مبلغين مخلصين، صادقين، وأصحاب سيرة حسنة وعلم راسخ، أشد إلحاحاً من أي وقت مضى لتنوير القلوب بنور اليقين.
                        </p>
                    </div>
                </div>

                {/* 🏛️ القسم الثالث: التأسيس والتاريخ والحقبة الحسينية */}
                <div className="flex flex-col gap-4 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300 border-t border-zinc-900 pt-6">
                    <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-r-4 border-yellow-500 pr-3 mb-2">
                        تاريخ المركز والاندماج بالعتبة المقدسة
                    </h2>
                    <p>
                        تأسس مركز أصحاب الكساء العالمي للإرشاد الدولي في عام 2016 ميلادي (1437 هجري) كإدارة مستقلة مخلصة بقيادة سماحة الشيخ أحمد الطرفي. ونظراً للكفاءة البالغة والنشاط الميداني المتميز، حظي المركز برعاية كريمة ودعم خاص من المتولي الشرعي للعتبة الحسينية المقدسة سماحة الشيخ عبد المهدي الکربلائي.
                    </p>
                    <p>
                        وفي أغسطس عام 2022 ميلادي (1444 هجري)، تم ضم المركز رسمياً ليصبح جزءاً لا يتجزأ من الهيكل الإداري والتنظيمي للعتبة الحسينية المقدسة. هذا الاندماج وهب المشاريع أبعاداً دولية أوسع ونفحة من الإتقان والتمكين الحسيني. ويستند المركز في رسالته الإنسانية الشاملة إلى عهد أمير المؤمنين (عليه السلام) الخالد لمالك الأشتر: "الناس صنفان: إما أخ لك في الدين أو نظير لك في الخلق".
                    </p>
                </div>

                {/* 🛠️ القسم الرابع: المحاور والأنشطة */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-zinc-900 pt-6">
                    <div className="lg:col-span-5 w-full flex flex-col gap-2">
                        <span className="text-[10px] font-sans text-yellow-400/80 block uppercase tracking-widest font-bold mr-1">
                            • لقطات حية من الخدمات الميدانية والاجتماعية
                        </span>
                        <div className="w-full rounded-2xl overflow-hidden border border-yellow-400/30 bg-zinc-950 aspect-video shadow-[0_0_40px_rgba(212,175,55,0.12)] hover:border-yellow-400/60 transition-all duration-300">
                            <video src={clicksVideoUrl} controls autoPlay muted loop preload="metadata" className="w-full h-full object-contain bg-black" />
                        </div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col gap-4 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300">
                        <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-r-4 border-yellow-500 pr-3 mb-1">
                            محاور التحرك الميداني والخدمات العالمية
                        </h2>
                        <div className="flex flex-col gap-3">
                            <div>
                                <h4 className="text-zinc-100 font-bold text-sm md:text-base mb-1 text-yellow-400/80">١. الأنشطة الفكرية والتعليمية الدولية:</h4>
                                <p className="text-xs md:text-sm text-zinc-400">
                                    تشمل إرسال الوفود التبليغية للمناطق النائية والقرى المحرومة، رعاية وتأسيس المدارس والمراكز الثقافية، صياغة المناهج التعليمية الرصينة المستقاة من علوم العترة الطاهرة، وتقديم الدعم المالي واللوجستي لبناء وتجهيز المساجد والمؤسسات الدينية في الدول الفقيرة، فضلاً عن استقبال واستضافة الوفود الدولية الزائرة وتنسيق اللقاءات العلمائية رفيعة المستوى.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-zinc-100 font-bold text-sm md:text-base mb-1 text-yellow-400/80">٢. الأنشطة الإنسانية والمشاريع الخدمية:</h4>
                                <p className="text-xs md:text-sm text-zinc-400">
                                    حل أزمة المياه في القارة الأفريقية؛ حيث يقوم المركز بحفر مئات الآبار الارتوازية العذبة (مثل مناطق زوکوجیه وموسسندرا في دولة ساحل العاج) لإنقاذ الأطفال من الأمراض الناتجة عن الجفاف وعطش المحرومين استلهاماً من عطش الإمام الحسين وأخيه أبي الفضل العباس (عليهما السلام)، بالإضافة إلى رعاية ومساعدة العوائل المتعففة مادياً واجتماعياً لتأمين عيش كريم باعتزاز ونبل.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 🎬 فیس بک ویڈیو کا نیا سیکشن - اینڈ میں */}
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
                    <div className="w-full md:w-1/2 font-serif text-right flex flex-col gap-3">
                        <h2 className="text-lg md:text-xl font-bold text-yellow-400 border-r-4 border-yellow-500 pr-3 mb-1">
                            التعريف بالمركز في برنامج (بإتجاه النور)
                        </h2>
                        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                            التعريف بمركز #أصحاب_الكساء التابع إلى الأمانة العامة للعتبة الحسينية المقدسة.. ماهية عمله وتفاصيله، في حلقة برنامج (بإتجاه النور).
                        </p>
                        <div className="text-xs md:text-sm text-zinc-400 flex flex-col gap-1.5 mt-2 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                            <div><span className="text-yellow-400/90 font-bold">ضيف الحلقة:</span> المعاون العلمي للمركز سماحة الشيخ احمد الفتلاوي</div>
                            <div><span className="text-yellow-400/90 font-bold">محاور الحلقة:</span> لطيف الحسناوي</div>
                            <div><span className="text-yellow-400/90 font-bold">الإخراج الإذاعي:</span> قاسم العميدي</div>
                            <div><span className="text-yellow-400/90 font-bold">التنسيق والعلاقات:</span> علي غالي</div>
                        </div>
                    </div>
                </div>

                {/* 📞 القسم الخامس: معلومات التواصل الرسمية */}
                <div className="w-full bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 font-sans">
                    <div className="text-right flex flex-col gap-1">
                        <span className="text-[10px] text-yellow-400 font-bold tracking-widest uppercase">قنوات التواصل الرسمية</span>
                        <h3 className="font-serif font-bold text-zinc-200 text-base md:text-lg">تواصل مباشرة مع الأمانة العامة للمركز</h3>
                        <p className="text-xs text-zinc-500 font-serif">المقر الرئيسي: كربلاء المقدسة، العراق</p>
                    </div>
                    <div className="flex flex-col gap-2 text-xs md:text-sm text-zinc-300">
                        <div className="flex items-center gap-2 justify-end">
                            <span className="font-bold text-yellow-400 select-all tracking-wide">009647807818164</span>
                            <span className="text-zinc-500 font-serif">:الهاتف ١</span>
                        </div>
                        <div className="flex items-center gap-2 justify-end">
                            <span className="font-bold text-yellow-400 select-all tracking-wide">009647810005096</span>
                            <span className="text-zinc-500 font-serif">:الهاتف ٢</span>
                        </div>
                        <div className="flex items-center gap-2 justify-end">
                            <span className="text-zinc-400 select-all font-medium">aacenter86@gmail.com</span>
                            <span className="text-zinc-500 font-serif">:البريد الإلكتروني</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
"use client";

const introVideoUrl = "https://res.cloudinary.com/dmqej8n4z/video/upload/v1782393066/Markaz-e-Ashab-e-kisa-farsi-ezgif.com-gif-maker_q65doe.webm";
const clicksVideoUrl = "https://res.cloudinary.com/dmqej8n4z/video/upload/v1782554788/clicks-ezgif.com-gif-to-webm-converter_wgciov.webm";

// یہاں فیس بک ویڈیو کا لنک ہے
const facebookVideoUrl = "https://www.facebook.com/alrwdha/videos/1888738388507562";

// یہاں آپ کی یوٹیوب ویڈیوز کی لسٹ ہے
const youtubeVideos = [
    { title: "مرکزِ اصحابِ کساء عالمی برائے عالمی رہنمائی", url: "https://youtu.be/fD6aF700KqU" },
    { title: "افریقہ میں دینی مدارس کا قیام", url: "https://youtu.be/TPuGFaGI4Lk" }
];

export default function UrAboutPage() {
    return (
        <div dir="rtl" className="w-full bg-[#0a0a0a] min-h-screen text-zinc-100 p-4 md:p-8 flex flex-col items-center antialiased select-none">
            <div className="w-full max-w-6xl flex flex-col gap-10">

                {/* 👑 مین ٹائٹل - سب سے اوپر */}
                <div className="w-full border-b border-yellow-400/20 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="text-right">
                        <h1 className="font-serif font-bold text-2xl md:text-4xl text-yellow-400 mb-2 leading-tight tracking-wide drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
                            مرکزِ اصحابِ کساء عالمی برائے عالمی رہنمائی
                        </h1>
                        <p className="text-zinc-400 text-xs md:text-sm font-sans tracking-wider uppercase">
                            زیرِ نگرانی: العتبہ الحسینیہ المقدسہ — کربلا مقدسہ، عراق
                        </p>
                    </div>

                    <div className="flex flex-col gap-1 bg-zinc-900/60 border border-zinc-800/80 p-3 rounded-xl text-right text-xs font-serif min-w-[240px]">
                        <div><span className="text-yellow-400/90 font-bold">مدیرِ مرکز:</span> سماحۃ الشیخ احمد رشید الطرفی <span className="text-[10px] text-zinc-500">(دامت توفیقاتہ)</span></div>
                        <div><span className="text-yellow-400/90 font-bold">تیاری:</span> شعبہ مطالعہ و تحقیق</div>
                    </div>
                </div>

                {/* 🎥 یوٹیوب ویڈیوز کا سیکشن - ٹائٹل کے نیچے */}
                <div className="w-full border-b border-yellow-400/20 pb-6">
                    <h2 className="text-xl font-bold text-yellow-400 mb-6 border-r-4 border-yellow-500 pr-3">ویڈیو رپورٹس</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {youtubeVideos.map((video, index) => (
                            <div key={index} className="flex flex-col gap-3">
                                <div className="w-full rounded-2xl overflow-hidden border border-yellow-400/30 bg-black aspect-video shadow-lg">
                                    <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${video.url.split('youtu.be/')[1] || video.url.split('v=')[1]}`} allowFullScreen></iframe>
                                </div>
                                <h3 className="text-center font-bold text-yellow-400/90 text-sm md:text-base font-serif">{video.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 🎥 القسم الأول: الخلفية الفكرية والشرعية */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 flex flex-col gap-5 order-2 lg:order-1 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300">
                        <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-r-4 border-yellow-500 pr-3 mb-1">
                            شرعی پس منظر اور تبلیغ کی اہمیت
                        </h2>
                        <p>
                            دینِ اسلام میں تبلیغ، رہنمائی اور پیغامِ الہیٰ کی اشاعت سب سے اعلیٰ اور عظیم سماجی و شرعی فرائض میں سے ایک ہے۔ یہ وہ مقدس مشن ہے جس کے لیے اللہ تعالیٰ نے انبیاء اور رسولوں کو بھیجا، اور اولیاء کرام نے اسے اپنی خدمت کا تاج بنایا۔
                        </p>

                        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-5 my-2 text-center shadow-inner">
                            <p className="text-yellow-400 text-base md:text-xl font-bold font-serif mb-3 leading-loose tracking-wide">
                                ﴿اور یہ ممکن نہ تھا کہ مومنین سب کے سب نکل کھڑے ہوں، تو کیوں نہ ان کے ہر گروہ میں سے ایک جماعت نکلے تاکہ دین میں فقاہت حاصل کریں اور اپنی قوم کو ڈرائیں جب وہ ان کی طرف پلٹ کر آئیں تاکہ وہ بچ سکیں۔﴾
                            </p>
                            <span className="text-xs text-zinc-500 font-sans tracking-widest uppercase">— سورہ توبہ، آیت 122</span>
                        </div>
                    </div>

                    <div className="lg:col-span-5 w-full order-1 lg:order-2 flex flex-col gap-2">
                        <span className="text-[10px] font-sans text-yellow-400/80 block uppercase tracking-widest font-bold mr-1">
                            • مرکز کی تعارفی ویڈیو
                        </span>
                        <div className="w-full rounded-2xl overflow-hidden border border-yellow-400/30 bg-zinc-950 aspect-video shadow-[0_0_40px_rgba(212,175,55,0.12)] hover:border-yellow-400/60 transition-all duration-300">
                            <video src={introVideoUrl} controls playsInline preload="metadata" className="w-full h-full object-contain bg-black" />
                        </div>
                    </div>
                </div>

                {/* 📖 القسم الثاني: الأحاديث الشريفة وتحديات العصر */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900/20 border border-zinc-900 rounded-2xl p-6 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-yellow-400 font-bold text-base md:text-lg border-r-2 border-yellow-500/50 pr-2">معصومین (ع) کے نور سے</h3>
                        <p>امام علی بن موسیٰ الرضا (ع) نے ان مبلغین کے لیے رحمت کی دعا کی ہے جو اہل بیت کے علوم کو زندہ کرتے ہیں: "اللہ اس بندے پر رحم کرے جو ہمارے امر کو زندہ کرتا ہے۔" جب پوچھا گیا کہ اسے کیسے زندہ کریں؟ تو فرمایا: "ہمارے علوم سیکھیں اور لوگوں کو سکھائیں، کیونکہ اگر لوگ ہمارا اچھا کلام جان لیں تو ہماری پیروی کریں گے۔"</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-yellow-400 font-bold text-base md:text-lg border-r-2 border-yellow-500/50 pr-2">عصرِ حاضر کے چیلنجز</h3>
                        <p>آج ہم ایک ایسے دور میں رہ رہے ہیں جو شدید فکری حملوں، شکوک و شبہات اور باطل نظریات سے گھرا ہوا ہے جو انسان کے عقیدے کو نشانہ بناتے ہیں۔ اس دور میں ایسے مبلغین کی ضرورت پہلے سے کہیں زیادہ بڑھ گئی ہے۔</p>
                    </div>
                </div>

                {/* 🏛️ القسم الثالث: التأسيس والتاريخ والحقبة الحسينية */}
                <div className="flex flex-col gap-4 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300 border-t border-zinc-900 pt-6">
                    <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-r-4 border-yellow-500 pr-3 mb-2">
                        مرکز کی تاریخ اور العتبہ الحسینیہ کے ساتھ الحاق
                    </h2>
                    <p>مرکزِ اصحابِ کساء کا قیام 2016ء (1437ھ) میں شیخ احمد الطرفی کی قیادت میں عمل میں آیا۔ اپنی کارکردگی اور میدانِ عمل میں فعالیت کی بدولت، اس مرکز کو العتبہ الحسینیہ المقدسہ کے متولی شرعی کا خصوصی اعتماد اور سرپرستی حاصل ہوئی۔</p>
                    <p>اگست 2022ء (1444ھ) میں اس مرکز کو باضابطہ طور پر العتبہ الحسینیہ المقدسہ کا حصہ بنا دیا گیا۔ یہ الحاق اس کے مشن کو بین الاقوامی سطح پر پھیلانے اور حسینی فیضان کے ساتھ مزید مستحکم کرنے کا باعث بنا۔ اور یہ مشن حضرت امیرالمومنین (ع) کے مالک اشتر کے نام عہد نامے پر استوار ہے: "لوگ دو قسم کے ہیں، یا تو تمہارے دینی بھائی ہیں یا تخلیق میں تمہارے برابر ہیں۔"</p>
                </div>

                {/* 🛠️ القسم الرابع: المحاور والأنشطة */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-zinc-900 pt-6">
                    <div className="lg:col-span-5 w-full flex flex-col gap-2">
                        <span className="text-[10px] font-sans text-yellow-400/80 block uppercase tracking-widest font-bold mr-1">
                            • فلاحی اور سماجی خدمات کی جھلکیاں
                        </span>
                        <div className="w-full rounded-2xl overflow-hidden border border-yellow-400/30 bg-zinc-950 aspect-video shadow-[0_0_40px_rgba(212,175,55,0.12)] hover:border-yellow-400/60 transition-all duration-300">
                            <video src={clicksVideoUrl} controls autoPlay muted loop preload="metadata" className="w-full h-full object-contain bg-black" />
                        </div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col gap-4 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300">
                        <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-r-4 border-yellow-500 pr-3 mb-1">
                            میدانی سرگرمیاں اور عالمی خدمات
                        </h2>
                        <div className="flex flex-col gap-3">
                            <div>
                                <h4 className="text-zinc-100 font-bold text-sm md:text-base mb-1 text-yellow-400/80">1. عالمی فکری اور تعلیمی سرگرمیاں:</h4>
                                <p className="text-xs md:text-sm text-zinc-400">اس میں دور دراز کے علاقوں میں تبلیغی وفود بھیجنا، تعلیمی اداروں کا قیام، نصابِ تعلیم کی تشکیل اور مساجد و مدارس کی تعمیر میں مالی اور تکنیکی مدد شامل ہے۔</p>
                            </div>
                            <div>
                                <h4 className="text-zinc-100 font-bold text-sm md:text-base mb-1 text-yellow-400/80">2. انسانی اور فلاحی منصوبے:</h4>
                                <p className="text-xs md:text-sm text-zinc-400">افریقی خطے میں پانی کا بحران حل کرنے کے لیے سیکڑوں آرٹیشین کنوؤں کی کھدائی، تاکہ محروم بچوں اور خاندانوں کو صاف پانی کی فراہمی ممکن بنائی جا سکے۔</p>
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
                            پروگرام "روشنی کی سمت" میں مرکز کا تعارف
                        </h2>
                        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                            روضہ مبارک عتبہ حسینیہ مقدسیہ کے جنرل سیکرٹریٹ سے وابستہ مرکز اصحاب الکساء کا تعارف، اس کی کارکردگی کی نوعیت اور اس کی تفصیلات ریڈیو پروگرام (روشنی کی سمت / بإتجاه النور) میں۔
                        </p>
                        <div className="text-xs md:text-sm text-zinc-400 flex flex-col gap-1.5 mt-2 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                            <div><span className="text-yellow-400/90 font-bold">پروگرام کے مہمان:</span> مرکز کے علمی معاون، سماحۃ الشیخ احمد الفتلاوی</div>
                            <div><span className="text-yellow-400/90 font-bold">میزبانِ پروگرام:</span> لطیف الحسناوی</div>
                            <div><span className="text-yellow-400/90 font-bold">ریڈیو ڈائریکٹر:</span> قاسم العمیدی</div>
                            <div><span className="text-yellow-400/90 font-bold">کواآرڈینیشن اور روابط:</span> علی غالی</div>
                        </div>
                    </div>
                </div>

                {/* 📞 القسم الخامس: معلومات التواصل الرسمية */}
                <div className="w-full bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 font-sans">
                    <div className="text-right flex flex-col gap-1">
                        <span className="text-[10px] text-yellow-400 font-bold tracking-widest uppercase">رابطہ کے ذرائع</span>
                        <h3 className="font-serif font-bold text-zinc-200 text-base md:text-lg">مرکز کی سیکرٹریٹ سے براہِ راست رابطہ کریں</h3>
                        <p className="text-xs text-zinc-500 font-serif">مرکزی دفتر: کربلا مقدسہ، عراق</p>
                    </div>
                    <div className="flex flex-col gap-2 text-xs md:text-sm text-zinc-300">
                        <span>009647807818164 :فون 1</span>
                        <span>009647810005096 :فون 2</span>
                        <span>aacenter86@gmail.com :ای میل</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
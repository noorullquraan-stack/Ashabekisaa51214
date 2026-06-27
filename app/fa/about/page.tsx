"use client";

const introVideoUrl = "https://res.cloudinary.com/dmqej8n4z/video/upload/v1782393085/Markaz-eAshab-e-kisa-farsi-ezgif.com-gif-maker_zgitmz.webm";
const clicksVideoUrl = "https://res.cloudinary.com/dmqej8n4z/video/upload/v1782554788/clicks-ezgif.com-gif-to-webm-converter_wgciov.webm";

export default function FaAboutPage() {
    return (
        <div dir="rtl" className="w-full bg-[#0a0a0a] min-h-screen text-zinc-100 p-4 md:p-8 flex flex-col items-center antialiased select-none">
            <div className="w-full max-w-6xl flex flex-col gap-10">

                {/* 👑 هیدر اصلی و مدیریت */}
                <div className="w-full border-b border-yellow-400/20 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="text-right">
                        <h1 className="font-serif font-bold text-2xl md:text-4xl text-yellow-400 mb-2 leading-tight tracking-wide drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
                            مرکز جهانی اصحاب الکساء برای هدایت و ارشاد بین‌المللی
                        </h1>
                        <p className="text-zinc-400 text-xs md:text-sm font-sans tracking-wider uppercase">
                            تحت نظارت: عتبه حسینیه مقدسه — کربلای معلی، عراق
                        </p>
                    </div>

                    <div className="flex flex-col gap-1 bg-zinc-900/60 border border-zinc-800/80 p-3 rounded-xl text-right text-xs font-serif min-w-[240px]">
                        <div><span className="text-yellow-400/90 font-bold">مدیر مرکز:</span> جناب شیخ احمد الطرفی <span className="text-[10px] text-zinc-500">(دامت توفیقاته)</span></div>
                        <div><span className="text-yellow-400/90 font-bold">تهیه شده در:</span> بخش مطالعات و پژوهش‌ها</div>
                    </div>
                </div>

                {/* 🎥 بخش اول: پیشینه و مبانی شرعی */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 flex flex-col gap-5 order-2 lg:order-1 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300">
                        <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-r-4 border-yellow-500 pr-3 mb-1">
                            پیشینه و مبانی شرعی (اهمیت تبلیغ)
                        </h2>
                        <p>
                            در دین مبین اسلام، تبلیغ، ارشاد و رساندن پیام‌های الهی به انسان‌ها از والاترین و بزرگ‌ترین فرایض اجتماعی و شرعی به شمار می‌رود. این همان ماموریت مقدسی است که خداوند متعال پیامبران را برای آن مبعوث کرد و اولیای الهی و علمای عظام آن را بزرگ‌ترین افتخار و مایه عزت خود دانستند.
                        </p>

                        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-5 my-2 text-center shadow-inner">
                            <p className="text-yellow-400 text-base md:text-xl font-bold font-serif mb-3 leading-loose tracking-wide">
                                ﴿وَمَا كَانَ الْمُؤْمِنُونَ لِيَنْفِرُوا كَافَّةً فَلَوْلَا نَفَرَ مِنْ كُلِّ فِرْقَةٍ مِنْهُمْ طَائِفَةٌ لِيَتَفَقَّهوُا فِي الدِّينِ وَلِيُنْذِرُوا قَوْمَهُمْ إِذَا رَجَعُوا إِلَيْهِمْ لَعَلَّهُمْ يَحْذَرُونَ﴾
                            </p>
                            <span className="text-xs text-zinc-500 font-sans tracking-widest uppercase">— سوره توبه، آیه ۱۲۲</span>
                        </div>
                    </div>

                    {/* 🎥 ویڈیو ڈبہ: بغیر کسی پنگے اور کسٹم کچرے کے بالکل کلین پلیئر */}
                    <div className="lg:col-span-5 w-full order-1 lg:order-2 flex flex-col gap-2">
                        <span className="text-[10px] font-sans text-yellow-400/80 block uppercase tracking-widest font-bold mr-1">
                            • ویدیوی معرفی مرکز
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

                {/* 📖 بخش دوم: احادیث و چالش‌های معاصر */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900/20 border border-zinc-900 rounded-2xl p-6 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-yellow-400 font-bold text-base md:text-lg border-r-2 border-yellow-500/50 pr-2">در پرتو احادیث معصومین (علیهم السلام)</h3>
                        <p>
                            امام علی بن موسی الرضا (علیه السلام) برای مبلغان که علوم اهل بیت را ترویج می‌کنند، دعای ویژه‌ای فرموده‌اند: <span className="text-yellow-400 font-bold font-serif">«رَحِمَ اللهُ عَبداً أَحيَا أَمْرَنَا»</span>. هنگامی که از ایشان سوال شد چگونه امر شما احیا می‌شود؟ فرمودند: <span className="text-zinc-100 font-bold font-serif">«يَتَعَلَّمُ عُلُومَنَا وَيُعَلِّمُهَا النَّاسَ، فَإِنَّ النَّاسَ لَوْ عَلِمُوا حُسْنَ كَلَامِنَا لَاتَّبَعُونَا»</span>.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-yellow-400 font-bold text-base md:text-lg border-r-2 border-yellow-500/50 pr-2">چالش‌های عصر حاضر</h3>
                        <p>
                            امروز دوران تهاجم فکری شدید، شبهات و نظریات باطلی است که تلاش می‌کنند ایمان و عقیده انسان را تضعیف کنند. در چنین شرایطی، نیاز به مبلغان مخلص، صادق و بااخلاق بیش از هر زمان دیگری احساس می‌شود تا دل‌ها را با نور یقین و ایمان حقیقی روشن سازند.
                        </p>
                    </div>
                </div>

                {/* 🏛️ بخش سوم: تاریخچه و ساختار مرکز */}
                <div className="flex flex-col gap-4 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300 border-t border-zinc-900 pt-6">
                    <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-r-4 border-yellow-500 pr-3 mb-2">
                        معرفی، تاریخچه و ساختار مرکز
                    </h2>
                    <p>
                        مرکز اصحاب الکساء در ابتدا به عنوان یک نهاد مستقل به رهبری جناب شیخ احمد الطرفی در سال ۲۰۱۶ میلادی (۱۴۳۷ هجری) آغاز به کار کرد. با توجه به عملکرد درخشان و فعالیت‌های میدانی برجسته، از سال ۲۰۲۲ میلادی (۱۴۴۴ هجری) تحت حمایت ویژه و سرپرستی متولی شرعی عتبه حسینیه مقدسه، جناب شیخ عبدالمهدی الکربلائی قرار گرفت.
                    </p>
                    <p>
                        در اوت ۲۰۲۲، این مرکز رسماً به عنوان بخشی از ساختار اداری و سازمانی عتبه حسینیه مقدسه ادغام شد که این امر موجب گسترش و تقویت بین‌المللی فعالیت‌های آن گردید. ماموریت اصلی مرکز بر پایه این اصل جهانی امیرالمؤمنین علی (علیه السلام) در عهدنامه مالک اشتر استوار است: <span className="text-zinc-100 font-bold italic font-serif">"الناس صنفان: إما أخ لك في الدين وإما نظير لك في الخلق"</span>.
                    </p>
                </div>

                {/* 🛠️ بخش چهارم: خدمات علمی و رفاهی */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-zinc-900 pt-6">
                    <div className="lg:col-span-5 w-full flex flex-col gap-2">
                        <span className="text-[10px] font-sans text-yellow-400/80 block uppercase tracking-widest font-bold mr-1">
                            • جلوه‌هایی از خدمات میدانی
                        </span>
                        <div className="w-full rounded-2xl overflow-hidden border border-yellow-400/30 bg-zinc-950 aspect-video shadow-[0_0_40px_rgba(212,175,55,0.12)] hover:border-yellow-400/60 transition-all duration-300">
                            <video src={clicksVideoUrl} controls autoPlay muted loop preload="metadata" className="w-full h-full object-contain bg-black" />
                        </div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col gap-4 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300">
                        <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-r-4 border-yellow-500 pr-3 mb-1">
                            خدمات و دایره فعالیت‌های مرکز
                        </h2>
                        <div className="flex flex-col gap-3">
                            <div>
                                <h4 className="text-zinc-100 font-bold text-sm md:text-base mb-1 text-yellow-400/80">۱. فعالیت‌های علمی و فکری بین‌المللی:</h4>
                                <p className="text-xs md:text-sm text-zinc-400">
                                    سفرهای میدانی مبلغان به مناطق دورافتاده و برگزاری سمینارها و مجالس؛ نظارت علمی بر مدارس دینی و تهیه متون آموزشی مستند بر معارف اهل‌بیت (ع)؛ ساخت و مرمت مساجد و تجهیز مراکز مذهبی در مناطق محروم؛ و میزبانی از هیئت‌های علمی بین‌المللی زائر عتبات مقدسه.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-zinc-100 font-bold text-sm md:text-base mb-1 text-yellow-400/80">۲. اقدامات رفاهی و بشردوستانه:</h4>
                                <p className="text-xs md:text-sm text-zinc-400">
                                    حل بحران آب در قاره آفریقا؛ حفر صدها چاه ارتزین در کشورهای مختلف آفریقایی (مانند مناطق زوکوجیه و موسسندرا در ساحل عاج) جهت نجات جان انسان‌ها از خشکسالی و بیماری به یاد تشنگی امام حسین (ع) و حضرت ابوالفضل العباس (ع)، در کنار حمایت مالی آبرومندانه از خانواده‌های کم‌برخوردار.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 📞 بخش پنجم: اطلاعات تماس */}
                <div className="w-full bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 font-sans">
                    <div className="text-right flex flex-col gap-1">
                        <span className="text-[10px] text-yellow-400 font-bold tracking-widest uppercase">راه‌های ارتباطی</span>
                        <h3 className="font-serif font-bold text-zinc-200 text-base md:text-lg">ارتباط مستقیم با دفتر مرکزی</h3>
                        <p className="text-xs text-zinc-500 font-serif">دفتر مرکزی: کربلای معلی، عراق</p>
                    </div>
                    <div className="flex flex-col gap-2 text-xs md:text-sm text-zinc-300">
                        <div className="flex items-center gap-2 justify-end">
                            <span className="font-bold text-yellow-400 select-all tracking-wide">009647807818164</span>
                            <span className="text-zinc-500 font-serif">:شماره تماس ۱</span>
                        </div>
                        <div className="flex items-center gap-2 justify-end">
                            <span className="font-bold text-yellow-400 select-all tracking-wide">009647810005096</span>
                            <span className="text-zinc-500 font-serif">:شماره تماس ۲</span>
                        </div>
                        <div className="flex items-center gap-2 justify-end">
                            <span className="text-zinc-400 select-all font-medium">aacenter86@gmail.com</span>
                            <span className="text-zinc-500 font-serif">:ایمیل رسمی</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
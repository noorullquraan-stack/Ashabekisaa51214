"use client";

const introVideoUrl = "https://res.cloudinary.com/dmqej8n4z/video/upload/v1782393085/Markaz-eAshab-e-kisa-farsi-ezgif.com-gif-maker_zgitmz.webm";
const clicksVideoUrl = "https://res.cloudinary.com/dmqej8n4z/video/upload/v1782554788/clicks-ezgif.com-gif-to-webm-converter_wgciov.webm";

// لیست کامل ویدیوهای یوتیوب (فارسی)
const youtubeVideos = [
    { title: "مرکز جهانی اصحاب کساء برای ارشاد بین‌المللی", url: "https://youtu.be/fD6aF700KqU" },
    { title: "افتتاح مدارس دینی در قاره آفریقا", url: "https://youtu.be/TPuGFaGI4Lk" }
];

export default function FaAboutPage() {
    return (
        <div dir="rtl" className="w-full bg-[#0a0a0a] min-h-screen text-zinc-100 p-4 md:p-8 flex flex-col items-center antialiased select-none">
            <div className="w-full max-w-6xl flex flex-col gap-10">

                {/* 👑 عنوان اصلی - صدر صفحه */}
                <div className="w-full border-b border-yellow-400/20 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="text-right">
                        <h1 className="font-serif font-bold text-2xl md:text-4xl text-yellow-400 mb-2 leading-tight tracking-wide drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
                            مرکز جهانی اصحاب کساء برای ارشاد بین‌المللی
                        </h1>
                        <p className="text-zinc-400 text-xs md:text-sm font-sans tracking-wider uppercase">
                            تحت نظارت: آستان قدس حسینی — کربلای معلی، عراق
                        </p>
                    </div>

                    <div className="flex flex-col gap-1 bg-zinc-900/60 border border-zinc-800/80 p-3 rounded-xl text-right text-xs font-serif min-w-[240px]">
                        <div><span className="text-yellow-400/90 font-bold">مدیر مرکز:</span> سماحة الشیخ احمد رشید الطرفی <span className="text-[10px] text-zinc-500">(دامت توفیقاته)</span></div>
                        <div><span className="text-yellow-400/90 font-bold">تهیه و تنظیم:</span> بخش مطالعات و تحقیقات</div>
                    </div>
                </div>

                {/* 🎥 گزارش‌های تصویری - پس از عنوان */}
                <div className="w-full border-b border-yellow-400/20 pb-6">
                    <h2 className="text-xl font-bold text-yellow-400 mb-6 border-r-4 border-yellow-500 pr-3">گزارش‌های تصویری</h2>
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

                {/* 🎥 بخش اول: پیشینه فکری و شرعی */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 flex flex-col gap-5 order-2 lg:order-1 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300">
                        <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-r-4 border-yellow-500 pr-3 mb-1">
                            پیشینه شرعی و اهمیت تبلیغ
                        </h2>
                        <p>
                            تبلیغ، ارشاد و نشر پیام الهی در دین مبین اسلام، یکی از والاترین و بزرگترین فرایض اجتماعی و شرعی به شمار می‌رود. این همان رسالت مقدسی است که خداوند پیامبران و رسولان را برای آن مبعوث کرد و اولیای صالح آن را تاج خدمت و مایه عزت الهی خویش قرار دادند.
                        </p>

                        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-5 my-2 text-center shadow-inner">
                            <p className="text-yellow-400 text-base md:text-xl font-bold font-serif mb-3 leading-loose tracking-wide">
                                ﴿وَمَا كَانَ الْمُؤْمِنُونَ لِيَنْفِرُوا كَافَّةً فَلَوْلَا نَفَرَ مِنْ كُلِّ فِرْقَةٍ مِنْهُمْ طَائِفَةٌ لِيَتَفَقَّهُوا فِي الدِّينِ وَلِيُنْذِرُوا قَوْمَهُمْ إِذَا رَجَعُوا إِلَيْهِمْ لَعَلَّهُمْ يَحْذَرُونَ﴾
                            </p>
                            <span className="text-xs text-zinc-500 font-sans tracking-widest uppercase">— سوره توبه، آیه ۱۲۲</span>
                        </div>
                    </div>

                    <div className="lg:col-span-5 w-full order-1 lg:order-2 flex flex-col gap-2">
                        <span className="text-[10px] font-sans text-yellow-400/80 block uppercase tracking-widest font-bold mr-1">
                            • ویدئوی معرفی مرکز
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

                {/* 📖 بخش دوم: احادیث و چالش‌های عصر حاضر */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900/20 border border-zinc-900 rounded-2xl p-6 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-yellow-400 font-bold text-base md:text-lg border-r-2 border-yellow-500/50 pr-2">از نور معصومین (علیهم السلام)</h3>
                        <p>
                            امام علی بن موسی الرضا (علیه السلام) برای مبلغانی که علوم اهل بیت را زنده می‌کنند دعای رحمت کرده و فرمودند: «رَحِمَ اللهُ عَبداً أَحيَا أَمْرَنَا». هنگامی که پرسیدند چگونه زنده می‌شود، فرمودند: «علوم ما را فرا می‌گیرند و به مردم می‌آموزند، که اگر مردم زیبایی کلام ما را می‌دانستند، از ما پیروی می‌کردند».
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-yellow-400 font-bold text-base md:text-lg border-r-2 border-yellow-500/50 pr-2">چالش‌های عصر حاضر</h3>
                        <p>
                            ما امروز در عصری زندگی می‌کنیم که با تهاجمات فکری شدید، شبهات عمیق و نظریات باطلی که ایمان انسان را نشانه گرفته‌اند، روبه‌رو هستیم. در این شرایط، نیاز به مبلغان مخلص، صادق و دارای علم استوار، بیش از هر زمان دیگری احساس می‌شود.
                        </p>
                    </div>
                </div>

                {/* 🏛️ بخش سوم: تاریخچه مرکز و پیوستن به آستان قدس */}
                <div className="flex flex-col gap-4 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300 border-t border-zinc-900 pt-6">
                    <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-r-4 border-yellow-500 pr-3 mb-2">
                        تاریخچه مرکز و ادغام با آستان قدس حسینی
                    </h2>
                    <p>
                        مرکز جهانی اصحاب کساء در سال ۲۰۱۶ میلادی (۱۴۳۷ هجری) به عنوان یک نهاد مستقل به رهبری شیخ احمد الطرفی تأسیس شد. با توجه به کارایی بالا و فعالیت‌های میدانی برجسته، این مرکز مورد حمایت ویژه متولی شرعی آستان قدس حسینی قرار گرفت.
                    </p>
                    <p>
                        در آگوست ۲۰۲۲ میلادی (۱۴۴۴ هجری)، این مرکز رسماً به ساختار اداری آستان قدس حسینی پیوست. این ادغام، ابعاد بین‌المللی گسترده‌تر و روحیه‌ای از توانمندی حسینی به پروژه‌های مرکز بخشید. این رسالت بر پایه عهدنامه جاودان امیرالمؤمنین (ع) استوار است: «مردم دو دسته‌اند، یا برادر دینی تو هستند یا در آفرینش با تو برابرند».
                    </p>
                </div>

                {/* 🛠️ بخش چهارم: فعالیت‌های میدانی */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-zinc-900 pt-6">
                    <div className="lg:col-span-5 w-full flex flex-col gap-2">
                        <span className="text-[10px] font-sans text-yellow-400/80 block uppercase tracking-widest font-bold mr-1">
                            • تصاویری از خدمات میدانی و اجتماعی
                        </span>
                        <div className="w-full rounded-2xl overflow-hidden border border-yellow-400/30 bg-zinc-950 aspect-video shadow-[0_0_40px_rgba(212,175,55,0.12)] hover:border-yellow-400/60 transition-all duration-300">
                            <video src={clicksVideoUrl} controls autoPlay muted loop preload="metadata" className="w-full h-full object-contain bg-black" />
                        </div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col gap-4 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300">
                        <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-r-4 border-yellow-500 pr-3 mb-1">
                            محورهای فعالیت میدانی و خدمات جهانی
                        </h2>
                        <div className="flex flex-col gap-3">
                            <div>
                                <h4 className="text-zinc-100 font-bold text-sm md:text-base mb-1 text-yellow-400/80">۱. فعالیت‌های فکری و آموزشی بین‌المللی:</h4>
                                <p className="text-xs md:text-sm text-zinc-400">
                                    شامل اعزام هیئت‌های تبلیغی به مناطق محروم، تأسیس مدارس و مراکز فرهنگی، تدوین برنامه‌های آموزشی و ارائه حمایت‌های مالی برای تجهیز مساجد و مراکز دینی در کشورهای فقیر است.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-zinc-100 font-bold text-sm md:text-base mb-1 text-yellow-400/80">۲. فعالیت‌های بشردوستانه و خدماتی:</h4>
                                <p className="text-xs md:text-sm text-zinc-400">
                                    حل بحران آب در آفریقا؛ حفر صدها چاه آب شیرین برای نجات مردم از بیماری‌های خشکسالی، با الهام از تشنگی امام حسین (ع) و همچنین حمایت مالی و اجتماعی از خانواده‌های نیازمند.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 📞 بخش پنجم: راه‌های ارتباطی */}
                <div className="w-full bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 font-sans">
                    <div className="text-right flex flex-col gap-1">
                        <span className="text-[10px] text-yellow-400 font-bold tracking-widest uppercase">راه‌های ارتباطی رسمی</span>
                        <h3 className="font-serif font-bold text-zinc-200 text-base md:text-lg">ارتباط مستقیم با دبیرخانه مرکز</h3>
                        <p className="text-xs text-zinc-500 font-serif">دفتر مرکزی: کربلای معلی، عراق</p>
                    </div>
                    <div className="flex flex-col gap-2 text-xs md:text-sm text-zinc-300">
                        <div className="flex items-center gap-2 justify-end">
                            <span className="font-bold text-yellow-400 select-all tracking-wide">009647807818164</span>
                            <span className="text-zinc-500 font-serif">:تلفن ۱</span>
                        </div>
                        <div className="flex items-center gap-2 justify-end">
                            <span className="font-bold text-yellow-400 select-all tracking-wide">009647810005096</span>
                            <span className="text-zinc-500 font-serif">:تلفن ۲</span>
                        </div>
                        <div className="flex items-center gap-2 justify-end">
                            <span className="text-zinc-400 select-all font-medium">aacenter86@gmail.com</span>
                            <span className="text-zinc-500 font-serif">:ایمیل</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
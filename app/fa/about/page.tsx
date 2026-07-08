"use client";

// Helper function to get Cloudinary thumbnail URL from video URL
const getCloudinaryThumbnail = (videoUrl: string) => {
    return videoUrl.replace("/video/upload/", "/video/upload/so_5/").replace(/\.(webm|mp4|mov)$/, ".jpg");
};

const introVideoUrl = "https://res.cloudinary.com/dmqej8n4z/video/upload/v1782393085/Markaz-eAshab-e-kisa-farsi-ezgif.com-gif-maker_zgitmz.webm";
const clicksVideoUrl = "https://res.cloudinary.com/dmqej8n4z/video/upload/v1782554788/clicks-ezgif.com-gif-to-webm-converter_wgciov.webm";

// لینک ویدیو فیس‌بوک
const facebookVideoUrl = "https://www.facebook.com/alrwdha/videos/1888738388507562";

// لیست ویدیوهای یوتیوب
const youtubeVideos = [
    { title: "بیانیه جناب شیخ احمد رشید الطرفی، مدیر مرکز هدایت بین‌المللی اصحاب کساء / آستان مقدس حسینی، در مورد اهداف و فعالیت‌های مؤسسه۔", url: "https://res.cloudinary.com/dmqej8n4z/video/upload/v1783516608/Director-Message-persian_jtqoze.webm" }
];

export default function FaAboutPage() {
    return (
        <div dir="rtl" className="w-full bg-[#0a0a0a] min-h-screen text-zinc-100 p-4 md:p-8 flex flex-col items-center antialiased select-none">
            <div className="w-full max-w-6xl flex flex-col gap-10">

                {/* 👑 عنوان اصلی */}
                <div className="w-full border-b border-yellow-400/20 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="text-right">
                        <h1 className="font-serif font-bold text-2xl md:text-4xl text-yellow-400 mb-2 leading-tight tracking-wide drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
                            مرکز بین‌المللی ارشادی اصحاب کساء
                        </h1>
                        <p className="text-zinc-400 text-xs md:text-sm font-sans tracking-wider uppercase">
                            تحت نظارت: آستان مقدس حسینی — کربلای معلی، عراق
                        </p>
                    </div>

                    <div className="flex flex-col gap-1 bg-zinc-900/60 border border-zinc-800/80 p-3 rounded-xl text-right text-xs font-serif min-w-[240px]">
                        <div><span className="text-yellow-400/90 font-bold">مدیر مرکز:</span> جناب شیخ احمد رشید الطرفی <span className="text-[10px] text-zinc-500">(دامت توفیقاته)</span></div>
                        <div><span className="text-yellow-400/90 font-bold">تهیه شده در:</span> بخش مطالعات و پژوهش‌ها</div>
                    </div>
                </div>

                {/* 🎥 بخش ویدیوهای یوتیوب */}
                <div className="w-full border-b border-yellow-400/20 pb-6">
                    <h2 className="text-xl font-bold text-yellow-400 mb-6 border-r-4 border-yellow-500 pr-3">گزارش‌های تصویری</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {youtubeVideos.map((video, index) => (
                            <div key={index} className="flex flex-col gap-3">
                                <div className="w-full rounded-2xl overflow-hidden border border-yellow-400/30 bg-black aspect-video shadow-lg">
                                    {index === 0 ? (
                                        <video 
                                            src={video.url} 
                                            poster={getCloudinaryThumbnail(video.url)} 
                                            controls 
                                            playsInline 
                                            preload="auto" 
                                            className="w-full h-full object-contain bg-black" 
                                        />
                                    ) : (
                                        <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${video.url.split('youtu.be/')[1] || video.url.split('v=')[1]}`} allowFullScreen></iframe>
                                    )}
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
                            تبلیغ، ارشاد و نشر رسالت الهی در دین مبین اسلام، از والاترین و بزرگ‌ترین فرایض اجتماعی و شرعی به شمار می‌رود. این همان رسالت مقدسی است که خداوند انبیاء و فرستادگان خود را برای آن مبعوث کرد و اولیای الهی آن را تاج خدمت و منبع عزت خود قرار دادند.
                        </p>

                        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-5 my-2 text-center shadow-inner">
                            <p className="text-yellow-400 text-base md:text-xl font-bold font-serif mb-3 leading-loose tracking-wide">
                                ﴿وَمَا كَانَ الْمُؤْمِنُونَ لِيَنْفِرُوا كَافَّةً فَلَوْلَا نَفَرَ مِنْ كُلِّ فِرْقَةٍ مِنْهُمْ طَائِفَةٌ لِيَتَفَقَّهُوا فِي الدِّينِ وَلِيُنْذِرُوا قَوْمَهُمْ إِذَا رَجَعُوا إِلَيْهِمْ لَعَلَّهُمْ يَحْذَرُونَ﴾
                            </p>
                            <span className="text-xs text-zinc-500 font-sans tracking-widest uppercase">— سوره توبه، آیه ۱۲۲</span>
                        </div>
                    </div>

                    <div className="lg:col-span-5 w-full order-1 lg:order-2 flex flex-col gap-2">
                        <span className="text-[10px] font-sans text-yellow-400/80 block uppercase tracking-widest font-bold mr-1">
                            • ویدیو معرفی مرکز
                        </span>
                        <div className="w-full rounded-2xl overflow-hidden border border-yellow-400/30 bg-zinc-950 aspect-video shadow-[0_0_40px_rgba(212,175,55,0.12)] hover:border-yellow-400/60 transition-all duration-300">
                            <video 
                                src={introVideoUrl} 
                                poster={getCloudinaryThumbnail(introVideoUrl)} 
                                controls 
                                playsInline 
                                preload="auto" 
                                className="w-full h-full object-contain bg-black" 
                            />
                        </div>
                    </div>
                </div>

                {/* 📖 بخش دوم: احادیث شریف و چالش‌های دوران */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900/20 border border-zinc-900 rounded-2xl p-6 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-yellow-400 font-bold text-base md:text-lg border-r-2 border-yellow-500/50 pr-2">از انوار معصومین (علیهم السلام)</h3>
                        <p>
                            امام علی بن موسی الرضا (علیه السلام) برای مبلغانی که علوم اهل بیت را زنده می‌کنند، طلب رحمت کرده و فرمودند: «رَحِمَ اللهُ عَبداً أَحيَا أَمْرَنَا». وقتی از ایشان سؤال شد چگونه امر شما زنده می‌شود؟ فرمودند: «علوم ما را فرا می‌گیرد و به مردم می‌آموزد، چرا که اگر مردم زیبایی کلام ما را می‌دانستند، حتماً از ما پیروی می‌کردند».
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-yellow-400 font-bold text-base md:text-lg border-r-2 border-yellow-500/50 pr-2">چالش‌های عصر حاضر</h3>
                        <p>
                            امروز در عصری زندگی می‌کنیم که آکنده از هجمه‌های فکری، شبهات عمیق و نظریه‌های باطلی است که عقیده و ایمان انسان را هدف قرار داده‌اند. در چنین شرایطی، نیاز به مبلغان مخلص، صادق و دارای علم راسخ برای روشن کردن دل‌ها به نور یقین، بیش از هر زمان دیگری احساس می‌شود.
                        </p>
                    </div>
                </div>

                {/* 🏛️ بخش سوم: تأسیس و تاریخچه الحاق به آستان مقدس */}
                <div className="flex flex-col gap-4 font-serif text-right text-sm md:text-base leading-relaxed text-zinc-300 border-t border-zinc-900 pt-6">
                    <h2 className="text-lg md:text-xl font-bold text-yellow-400/90 border-r-4 border-yellow-500 pr-3 mb-2">
                        تاریخچه مرکز و ادغام در آستان مقدس حسینی
                    </h2>
                    <p>
                        مرکز بین‌المللی ارشادی اصحاب کساء در سال ۲۰۱۶ میلادی (۱۴۳۷ هجری) به عنوان یک مدیریت مستقل تحت هدایت جناب شیخ احمد الطرفی تأسیس شد. با توجه به کارآمدی بالا و فعالیت‌های درخشان میدانی، این مرکز مورد عنایت و حمایت ویژه تولیت شرعی آستان مقدس حسینی، جناب شیخ عبدالمهدی الکربلائی قرار گرفت.
                    </p>
                    <p>
                        در اوت سال ۲۰۲۲ میلادی (۱۴۴۴ هجری)، این مرکز رسماً به عنوان بخشی از ساختار اداری آستان مقدس حسینی ادغام شد. این ادغام، ابعاد بین‌المللی گسترده‌تری به پروژه‌ها بخشید. رسالت انسانی این مرکز بر پایه عهدنامه جاودان امیرالمؤمنین (ع) به مالک اشتر استوار است: "مردم دو دسته‌اند: یا برادر دینی تو هستند و یا در آفرینش با تو یکسانند."
                    </p>
                </div>

                {/* 🛠️ بخش چهارم: محورها و فعالیت‌ها */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-zinc-900 pt-6">
                    <div className="lg:col-span-5 w-full flex flex-col gap-2">
                        <span className="text-[10px] font-sans text-yellow-400/80 block uppercase tracking-widest font-bold mr-1">
                            • جلوه‌هایی از خدمات میدانی و اجتماعی
                        </span>
                        <div className="w-full rounded-2xl overflow-hidden border border-yellow-400/30 bg-zinc-950 aspect-video shadow-[0_0_40px_rgba(212,175,55,0.12)] hover:border-yellow-400/60 transition-all duration-300">
                            <video 
                                src={clicksVideoUrl} 
                                poster={getCloudinaryThumbnail(clicksVideoUrl)} 
                                controls 
                                playsInline 
                                preload="auto" 
                                className="w-full h-full object-contain bg-black" 
                            />
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
                                    شامل اعزام مبلغان به مناطق دورافتاده، تأسیس مدارس و مراکز فرهنگی، تدوین مناهج آموزشی برگرفته از علوم عترت طاهره (ع) و حمایت مالی جهت ساخت مساجد در کشورهای نیازمند.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-zinc-100 font-bold text-sm md:text-base mb-1 text-yellow-400/80">۲. فعالیت‌های بشردوستانه و پروژه‌های خدماتی:</h4>
                                <p className="text-xs md:text-sm text-zinc-400">
                                    حل بحران آب در قاره آفریقا با حفر صدها چاه ارتوازی برای نجات کودکان از بیماری‌های ناشی از خشکسالی، با الهام از تشنگی امام حسین (ع) و برادرشان ابوالفضل العباس (ع)، در کنار حمایت از خانواده‌های کم‌برخوردار.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 🎬 بخش ویدیو فیس‌بوک در انتهای صفحه */}
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
                            معرفی مرکز در برنامه رادیویی (به سوی نور)
                        </h2>
                        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                            معرفی مرکز اصحاب کساء وابسته به دبیرخانه عمومی آستان مقدس حسینی، ماهیت فعالیت‌ها و جزئیات آن در برنامه رادیویی (به سوی نور / بإتجاه النور).
                        </p>
                        <div className="text-xs md:text-sm text-zinc-400 flex flex-col gap-1.5 mt-2 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                            <div><span className="text-yellow-400/90 font-bold">مهمان برنامه:</span> معاون علمی مرکز، جناب شیخ احمد الفتلاوی</div>
                            <div><span className="text-yellow-400/90 font-bold">مجری برنامه:</span> لطیف الحسناوی</div>
                            <div><span className="text-yellow-400/90 font-bold">کارگردان رادیویی:</span> قاسم العمیدی</div>
                            <div><span className="text-yellow-400/90 font-bold">هماهنگی و روابط عمومی:</span> علی غالی</div>
                        </div>
                    </div>
                </div>

                {/* 📞 بخش اطلاعات تماس */}
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
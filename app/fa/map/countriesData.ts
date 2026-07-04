// app/fa/map/countriesData.ts (یا جو بھی آپ کا پاتھ ہے)

export type Country = {
    slug: string;
    name: string;
    image: string;
    x: number;
    y: number;
    width: number;
    height: number;
    details: string;
    delayClass: string;
};

// 🗺️ نقشے کے ممالک کا ڈیٹا (فارسی)
export const countries: Country[] = [
    {
        slug: "tanzania",
        name: "تانزانیا",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536406/tanzaania_mxtmdw.png",
        x: 1320,
        y: 620,
        width: 360,
        height: 320,
        delayClass: "[animation-delay:200ms]",
        details: "در تانزانیا در شرق آفریقا، جنبش علمی مرکز اصحاب الکساء به اوج شکوفایی و فعالیت‌های مبارک خود رسیده است.",
    },
    {
        slug: "cameroon",
        name: "کامرون",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536409/kamroon_tu9nrj.png",
        x: 1070,
        y: 540,
        width: 230,
        height: 240,
        delayClass: "[animation-delay:600ms]",
        details: "در مناطق ساحلی و کوهستانی کامرون، شبکه خیریه مرکز به قبایل دورافتاده دسترسی پیدا کرده است.",
    },
    {
        slug: "nigeria",
        name: "نیجریه",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536412/negeryah_hh8dd9.png",
        x: 880,
        y: 580,
        width: 240,
        height: 250,
        delayClass: "[animation-delay:1000ms]",
        details: "دامنه خدمات مرکز در نیجریه بسیار گسترده است، جایی که موسسات آموزشی فنی برای توانمندسازی جوانان ایجاد شده است.",
    },
    {
        slug: "niger",
        name: "نیجر",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536410/neger_r5awhc.png",
        x: 920,
        y: 250,
        width: 360,
        height: 300,
        delayClass: "[animation-delay:1400ms]",
        details: "تحت نظارت مرکز اصحاب الکساء، یک شبکه علمی و پروژه‌های خیریه خالص در مناطق محروم نیجر آغاز شده است.",
    },
    {
        slug: "burkina-faso",
        name: "بورکینافاسو",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536408/borkina-faso_girmvx.png",
        x: 650,
        y: 260,
        width: 220,
        height: 190,
        delayClass: "[animation-delay:1800ms]",
        details: "در بورکینافاسو، مرکز برنامه‌ای پایدار برای حمایت از کودکان یتیم در راستای سنت‌های والای اخلاقی و علمی آغاز کرده است.",
    },
    {
        slug: "cote-divoire",
        name: "ساحل عاج",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536411/sahil-aaj_btrhlk.png",
        x: 650,
        y: 550,
        width: 205,
        height: 215,
        delayClass: "[animation-delay:2200ms]",
        details: "حسینیت امروز در آن نقاط دوردست که کودکانش از تشنگی می‌پیچند، ایستاده است تا صدها چاه آب زلال حفر کند و به آنان زندگی ببخشد با هدایت مرکز اصحاب الکساء علیهم السلام.",
    },
    {
        slug: "guinea-bissau",
        name: "گینه بیسائو",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536408/gena-besao_irnmdy.png",
        x: 470,
        y: 460,
        width: 215,
        height: 165,
        delayClass: "[animation-delay:2600ms]",
        details: "در کشور کوچک گینه بیسائو، مرکز اصحاب الکساء پروژه‌های کوچک توانمندسازی اقتصادی را برای ماهیگیران فقیر و خانواده‌های نیازمند معرفی کرده است.",
    },
];
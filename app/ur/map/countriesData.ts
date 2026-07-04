// app/ur/map/countriesData.ts

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

// 🗺️ نقشے کے ممالک کا ڈیٹا (آپ یہاں جتنے مرضی ممالک شامل کریں، مین پیج ہیوی نہیں ہوگا)
export const countries: Country[] = [
    {
        slug: "tanzania",
        name: "تنزانیہ",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781878497/Tanzania_y6n6a2.png",
        x: 1320,
        y: 620,
        width: 360,
        height: 320,
        delayClass: "[animation-delay:200ms]",
        details: "مشرقی افریقہ کے اہم ملک تنزانیہ میں مرکز اصحاب الکساء کی علمی تحریک عروج پر ہے۔",
    },
    {
        slug: "cameroon",
        name: "کیمرون",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781878497/Cemeroon_zbze7l.png",
        x: 1070,
        y: 540,
        width: 230,
        height: 240,
        delayClass: "[animation-delay:600ms]",
        details: "کیمرون کے ساحلی اور پہاڑی علاقوں میں مرکز کے فلاحی نیٹ ورک نے دور دراز کے قبیلوں تک رسائی حاصل کی ہے۔",
    },
    {
        slug: "nigeria",
        name: "نائجیریا",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781878497/Nigeria_uyncxs.png",
        x: 880,
        y: 580,
        width: 240,
        height: 250,
        delayClass: "[animation-delay:1000ms]",
        details: "نائجیریا میں مرکز کی خدمات کا دائرہ کار انتہائی وسیع ہے۔ یہاں نوجوانوں کو ہنر مند بنانے کے لیے تکنیکی تعلیمی ادارے قائم ہیں۔",
    },
    {
        slug: "niger",
        name: "نائجر",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781878497/Niger_zzwfw1.png",
        x: 920,
        y: 250,
        width: 360,
        height: 300,
        delayClass: "[animation-delay:1400ms]",
        details: "مرکز اصحاب الکساء کے تحت نائجر کے پسماندہ خطوں میں خالص علمی نیٹ ورک اور فلاحی منصوبوں کا آغاز کیا گیا ہے۔",
    },
    {
        slug: "burkina-faso",
        name: "برکینا فاسو",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781878497/barkinafasoo_pfrzkg.png",
        x: 650,
        y: 260,
        width: 220,
        height: 190,
        delayClass: "[animation-delay:1800ms]",
        details: "برکینا فاسو میں مرکز نے اپنی اعلیٰ اخلاقی اور علمی روایات کے مطابق یتیم بچوں کی کفالت کا ایک مستقل پروگرام شروع کیا ہے۔",
    },
    {
        slug: "cote-divoire",
        name: "آئیوری کوسٹ",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781878497/Iorycast_cibqhj.png",
        x: 650,
        y: 550,
        width: 205,
        height: 215,
        delayClass: "[animation-delay:2200ms]",
        details: "آئیوری کوسٹ کے شہری اور دہی خطوں میں علمی و فلاحی خدمات کے تحت اسکولوں کی تعمیر نو کی گئی ہے۔",
    },
    {
        slug: "guinea-bissau",
        name: "گنی بساؤ",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781878498/Ganibasao_kagysv.png",
        x: 470,
        y: 460,
        width: 215,
        height: 165,
        delayClass: "[animation-delay:2600ms]",
        details: "جزائر پر مشتمل چھوٹے ملک گنی بساؤ میں مرکز اصحاب الکساء نے غریب ماہی گیروں اور پسماندہ خاندانوں کے لیے معاشی خودمختاری کے چھوٹے پراجیکٹس متعارف کروائے ہیں۔",
    },
];
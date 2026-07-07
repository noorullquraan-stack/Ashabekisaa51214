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
        details: "مشرقی افریقہ کا وسیلہ بلاد تنزانیہ جس میں صاف ستھرا ساحل سمندر اور زرخیز زمین ہے۔",
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
        details: "کیمرون افریقہ کا چھوٹا بہت ہی سستا اور عمدہ جگہ ہے جس میں کافی وسیلہ اور خوشگوار آبادی ہے۔",
    },
    {
        slug: "nigeria",
        name: "نائیجیریا",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781878497/Nigeria_uyncxs.png",
        x: 880,
        y: 580,
        width: 240,
        height: 250,
        delayClass: "[animation-delay:1000ms]",
        details: "نائیجیریا جس میں صاف ستھرا ساحلوں اور بڑی شہری ترقی سے چلنے والے معاشی ترقی کے شوقین ہیں۔",
    },
    {
        slug: "niger",
        name: "نائیجر",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781878497/Niger_zzwfw1.png",
        x: 920,
        y: 250,
        width: 360,
        height: 300,
        delayClass: "[animation-delay:1400ms]",
        details: "صاف ستھرا ساحل سمندر اور نائیجر افریقہ کا مرکزی خطہ ہے جس میں گرم اور خشک موسم ہوتا ہے۔",
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
        details: "برکینا فاسو جس میں قوم پرستی اور بھرپور ثقافت ہے جس میں ایک وسیلہ دار اور خوشگوار آبادی ہے۔",
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
        details: "آئیوری کوسٹ افریقہ کا جنوبی خطہ ہے جس میں گرم اور خشک موسم ہوتا ہے اور بہت سے شوقین ہیں۔",
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
        details: "مرکش کی مشرقی طرف واقع گنی بساؤ صاف ستھرا ساحل سمندر اور زرخیز زمین ہے جس میں کافی وسیلہ اور خوشگوار آبادی ہے۔",
    },
];

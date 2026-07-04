// app/ar/map/countriesData.ts

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

// 🗺️ نقشے کے ممالک کا ڈیٹا (عربی)
export const countries: Country[] = [
    {
        slug: "tanzania",
        name: "تنزانيا",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536372/Tanzania_miiyd8.png",
        x: 1320,
        y: 620,
        width: 360,
        height: 320,
        delayClass: "[animation-delay:200ms]",
        details: "في تنزانيا بشرق أفريقيا، بلغت الحركة العلمية لمركز أصحاب الكساء ذروتها ونشاطها المبارك.",
    },
    {
        slug: "cameroon",
        name: "الكاميرون",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536372/Al-kameroon_yqd4xw.png",
        x: 1070,
        y: 540,
        width: 230,
        height: 240,
        delayClass: "[animation-delay:600ms]",
        details: "في المناطق الساحلية والجبلية بالكاميرون، وصلت الشبكة الخيرية للمركز إلى القبائل النائية.",
    },
    {
        slug: "nigeria",
        name: "نيجيريا",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536376/Nigeria_rfvnxp.png",
        x: 880,
        y: 580,
        width: 240,
        height: 250,
        delayClass: "[animation-delay:1000ms]",
        details: "نطاق خدمات المركز في نيجيريا واسع للغاية، حيث تم إنشاء مؤسسات تعليمية تقنية لتمكين الشباب.",
    },
    {
        slug: "niger",
        name: "النيجر",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536372/Al-neger_r9kx0k.png",
        x: 920,
        y: 250,
        width: 360,
        height: 300,
        delayClass: "[animation-delay:1400ms]",
        details: "تحت رعاية مركز أصحاب الكساء، تم إطلاق شبكة علمية ومشاريع خيرية خالصة في المناطق النائية بالنيجر.",
    },
    {
        slug: "burkina-faso",
        name: "بوركينا فاسو",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536372/Borkinafaso_jnhnq3.png",
        x: 650,
        y: 260,
        width: 220,
        height: 190,
        delayClass: "[animation-delay:1800ms]",
        details: "في بوركينا فاسو، بدأ المركز برنامجاً مستداماً لكفالة الأطفال الأيتام تماشياً مع التقاليد الأخلاقية والعلمية السامية.",
    },
    {
        slug: "cote-divoire",
        name: "ساحل العاج",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536371/Sahil-al-aaj_xrrpxg.png",
        x: 650,
        y: 550,
        width: 205,
        height: 215,
        delayClass: "[animation-delay:2200ms]",
        details: "تقف الحسينية اليوم في تلك الأصقاع التي يتلوى أطفالها عطشاً، لتحفر مئات الآبار من الماء الزلال وتهبهم الحياة بتوجيه من مركز أصحاب الكساء علیهم السلام.",
    },
    {
        slug: "guinea-bissau",
        name: "غينيا بيساو",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536374/Ghaneya-basao_rpsfa5.png",
        x: 470,
        y: 460,
        width: 215,
        height: 165,
        delayClass: "[animation-delay:2600ms]",
        details: "في دولة غينيا بيساو الصغيرة، قدم مركز أصحاب الكساء مشاريع تمكين اقتصادي صغيرة للصيادين الفقراء والعائلات المحتاجة.",
    },
];
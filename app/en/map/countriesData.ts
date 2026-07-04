export type Country = {
    slug: string;
    name: string;
    image: string;
    x: number;
    y: number;
    width: number;
    height: number;
    details: string;
    videoSrc: string;
    delayClass: string;
};

export const countries: Country[] = [
    {
        slug: "tanzania",
        name: "Tanzania",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536393/tanzania_swwd20.png",
        x: 1320,
        y: 620,
        width: 360,
        height: 320,
        delayClass: "[animation-delay:200ms]",
        videoSrc: "",
        details: "In Tanzania, East Africa, the academic movement of the Ashab al-Kisaa Center has reached its zenith and blessed peak of activity.",
    },
    {
        slug: "cameroon",
        name: "Cameroon",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536387/camroon_lwruv0.png",
        x: 1070,
        y: 540,
        width: 230,
        height: 240,
        delayClass: "[animation-delay:600ms]",
        videoSrc: "",
        details: "In the coastal and mountainous regions of Cameroon, the center's welfare network has successfully reached out to remote tribes.",
    },
    {
        slug: "nigeria",
        name: "Nigeria",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536392/nigeria_m4dgyk.png",
        x: 880,
        y: 580,
        width: 240,
        height: 250,
        delayClass: "[animation-delay:1000ms]",
        videoSrc: "",
        details: "The scope of the center's services in Nigeria is extremely vast, featuring technical educational institutions established to empower youth.",
    },
    {
        slug: "niger",
        name: "Niger",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536391/niger_egef7g.png",
        x: 920,
        y: 250,
        width: 360,
        height: 300,
        delayClass: "[animation-delay:1400ms]",
        videoSrc: "",
        details: "Under the auspices of the Ashab al-Kisaa Center, a pure academic network and welfare projects have been launched in the underprivileged regions of Niger.",
    },
    {
        slug: "burkina-faso",
        name: "Burkina Faso",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536391/borkina-faso_ysqklz.png",
        x: 650,
        y: 260,
        width: 220,
        height: 190,
        delayClass: "[animation-delay:1800ms]",
        videoSrc: "",
        details: "In Burkina Faso, the center has initiated a sustainable sponsorship program for orphaned children, aligning with noble ethical and academic traditions.",
    },
    {
        slug: "cote-divoire",
        name: "Côte d'Ivoire",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536387/C%C3%B4te-d_Ivoire_fb3hoh.png",
        x: 650,
        y: 550,
        width: 205,
        height: 215,
        delayClass: "[animation-delay:2200ms]",
        videoSrc: "",
        details: "Husainism stands today in those distant regions where children writhe in thirst, digging hundreds of wells of pure water to grant them life, under the guidance of Ashab al-Kisaa Center.",
    },
    {
        slug: "guinea-bissau",
        name: "Guinea-Bissau",
        image: "https://res.cloudinary.com/dmqej8n4z/image/upload/v1782536388/ganea-baso_z7lym1.png",
        x: 470,
        y: 460,
        width: 215,
        height: 165,
        delayClass: "[animation-delay:2600ms]",
        videoSrc: "",
        details: "In the small nation of Guinea-Bissau, the Ashab al-Kisaa Center has introduced small economic empowerment projects for impoverished fishermen and needy families.",
    },
];
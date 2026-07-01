import React from 'react';
import Link from 'next/link';

const socialLinks = [
    { 
        name: "فیس بک", 
        url: "https://m.facebook.com/100091574370039", 
        svgPath: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" 
    },
    { 
        name: "یوٹیوب", 
        url: "https://youtube.com/@aacenter?si=D-C8iQYB8d17ZFrP", 
        svgPath: "M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.503 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.516 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" 
    },
    { 
        name: "ٹک ٹاک", 
        url: "https://www.tiktok.com/@aacenter86?lang=en", 
        svgPath: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.15 1.34 1.41 3.23 2.17 5.14 2.3v3.96c-1.7-.12-3.37-.77-4.65-1.92-.25-.22-.48-.46-.69-.71v6.59c0 5.58-4.59 10.05-10.12 9.81-4.71-.2-8.58-4.22-8.63-8.94-.06-5.8 5.12-10.47 10.87-9.56v4.03c-2.91-.39-5.59 1.66-6.04 4.54-.53 3.39 1.96 6.55 5.37 6.64 3.19.09 5.89-2.34 5.96-5.52V0h-.3z" 
    },
    { 
        name: "ٹیلیگرام", 
        url: "https://t.me/ashab_alkisaa", 
        svgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.6 1.48-1.55 2.73-2.61 4.17-3.83.16-.14.32-.42-.03-.42-.08 0-.41.1-.96.47-1.15.78-2.67 1.8-5.38 3.63-.44.3-.84.45-1.19.44-.39-.01-1.14-.22-1.7-.4-1.1-.35-1.02-.95.07-1.38 5.4-2.35 9-3.9 10.8-4.65.52-.22 1.08-.37 1.48-.37.15 0 .48.04.69.21.17.15.22.42.22.6z" 
    },
    { 
        name: "انسٹاگرام", 
        url: "https://www.instagram.com/ashab_alksa/?hl=a", 
        svgPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" 
    },
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6 mt-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* رابطہ معلومات (Left Side, Corner) */}
                <div className="flex flex-col items-start">
                    <h3 className="text-lg font-semibold mb-4 text-yellow-400">رابطہ</h3>
                    <div className="flex flex-col gap-3 items-start">
                        <div className="flex items-center gap-3 text-sm">
                            <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>009647807818164</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>009647810005096</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm italic text-gray-500">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>[یہاں ای میل شامل کریں]</span>
                        </div>
                    </div>
                </div>

                {/* سوشل میڈیا لنکس (Center) */}
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-lg font-semibold mb-4 text-yellow-400">سوشل میڈیا</h3>
                    <div className="flex items-center gap-4 justify-center">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-12 h-12 rounded-full bg-zinc-800 border border-yellow-400/30 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.6)] transition-all duration-500 ease-out hover:scale-125 hover:-translate-y-2"
                                title={social.name}
                            >
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current transition-transform duration-500 group-hover:rotate-360">
                                    <path d={social.svgPath} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* مرکز کا تعارف (Right Side, Original) */}
                <div className="flex flex-col items-end">
                    <h2 className="text-xl font-bold mb-2 text-yellow-400">اصحاب الکساء عالمی مرکز برائے رہنمائی</h2>
                    <p className="text-sm text-gray-400 mb-4">(زیر نگرانی: حرم مطہر امام حسین علیہ السلام)</p>
                    <p className="text-sm">مدیر مرکز: جناب الشیخ احمد رشید طرفی (دامت توفیقاتہ)</p>
                    <p className="text-sm mt-2">عراق، کربلائے معلی</p>
                </div>
            </div>

            <div className="text-center mt-10 pt-6 border-t border-gray-800 text-xs text-gray-500">
                <p>ویب سائیٹ کریٹڈ: موسسہ فرھنگی نور</p>
            </div>
        </footer>
    );
}

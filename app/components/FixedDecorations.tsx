export default function FixedDecorations() {
    return (
        <>
            {/* 🕌 فکسڈ گنبد اور 🛡️ لوگو */}
            <div className="fixed bottom-36 left-6 md:bottom-40 md:left-10 w-[130px] md:w-[160px] h-[130px] md:h-[160px] z-[60] pointer-events-none select-none flex items-end">
                <img src="https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781948799/Markazlogo_vima6r.png" className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(212,175,55,0.2)]" alt="لوگو" draggable={false} />
            </div>

            <div className="fixed bottom-6 -right-10 md:bottom-10 md:-right-16 w-[320px] md:w-[450px] h-[320px] md:h-[450px] z-[60] pointer-events-none select-none flex items-end">
                <img src="https://res.cloudinary.com/dmqej8n4z/image/upload/q_auto/f_auto/v1781946691/gunbad_flag_kkaqvl.png" className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(212,175,55,0.35)]" alt="گنبد" draggable={false} />
            </div>
        </>
    );
}

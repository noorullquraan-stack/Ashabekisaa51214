import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function WelfarePage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white" dir="rtl">
            <header className="w-full"><Navbar /></header>
            <main className="flex-1 p-8 md:px-20 lg:px-40">
                <h1 className="text-4xl font-bold mb-8 text-yellow-500">خدمات رفاهی</h1>
                <p className="text-lg leading-relaxed">جزئیات فعالیت‌های خیریه و پروژه‌های رفاهی که توسط مرکز انجام می‌شود.</p>
            </main>
            <footer className="w-full"><Footer /></footer>
        </div>
    );
}
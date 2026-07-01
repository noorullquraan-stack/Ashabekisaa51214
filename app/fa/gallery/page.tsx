import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function GalleryPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white" dir="rtl">
            <Navbar />
            <main className="flex-1 p-8 md:px-20 lg:px-40">
                <h1 className="text-4xl font-bold mb-8 text-yellow-500">گالری</h1>

                <h2 className="text-2xl font-semibold mb-4 text-white">ویدیوها</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"></div>

                <h2 className="text-2xl font-semibold mb-4 text-white">تصاویر</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            </main>
            <Footer />
        </div>
    );
}
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function EducationalPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white" dir="ltr">
            <header className="w-full"><Navbar /></header>
            <main className="flex-1 p-8 md:px-20 lg:px-40">
                <h1 className="text-4xl font-bold mb-8 text-yellow-500">Educational Services</h1>
                <p className="text-lg leading-relaxed">Here you will find details of the educational services and research activities of the center.</p>
            </main>
            <footer className="w-full"><Footer /></footer>
        </div>
    );
}
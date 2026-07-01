export default function ArabicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // یہاں ہم خاص طور پر عربی کے لیے RTL سیٹنگز کر رہے ہیں
        <div dir="rtl" lang="ar" className="min-h-screen bg-black text-white">
            {/* اگر آپ عربی کے لیے الگ نیو بار چاہتے ہیں تو یہاں کال کریں */}
            <header>
                {/* Arabic Navbar Component */}
            </header>

            <main>
                {children}
            </main>

            <footer>
                {/* Footer */}
            </footer>
        </div>
    );
}
export default function ArabicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        /* suppressHydrationWarning لگانے سے براؤزر کی کوئی بھی ایکسٹینشن (جیسے Grammarly وغیرہ) 
          اگر کوڈ میں اپنے ایٹریبیوٹس گھسائے گی، تو نیکسٹ جے ایس کریش نہیں ہوگا اور ایرر غائب ہو جائے گا۔
        */
        <div
            dir="rtl"
            lang="ar"
            suppressHydrationWarning={true}
            className="min-h-screen bg-black text-white"
        >
            {/* ہیڈر کا سیکشن */}
            <header>
                {/* اگر آپ نے مین لے آؤٹ میں پہلے سے ہی نیوبار لگایا ہوا ہے، تو اسے یہاں خالی ہی رہنے دیں */}
            </header>

            <main>
                {children}
            </main>

            <footer>
                {/* یہاں فٹر کا کنٹینٹ آئے گا */}
            </footer>
        </div>
    );
}
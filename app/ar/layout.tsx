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
        >
            {children}
        </div>
    );
}
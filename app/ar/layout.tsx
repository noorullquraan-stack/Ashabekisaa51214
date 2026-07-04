export default function ArabicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // صرف dir="rtl" اور lang="ar" سیٹ کرنے کے لیے چھوٹا سا کنٹینر
    return (
        <div
            dir="rtl"
            lang="ar"
            suppressHydrationWarning={true}
        >
            {children}
        </div>
    );
}
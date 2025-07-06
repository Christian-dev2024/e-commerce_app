
import 'bootstrap/dist/css/bootstrap.css'
import Script from "next/script";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: "flex" }}>
            <main style={{ flex: 1, padding: "0rem, 1rem" }}>
                {children}
            </main>
            <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min"
            strategy="afterInteractive"
            />
        </div>
    );
}

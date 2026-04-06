import { ContextProvider } from "../utilities/contextApi";
import AppLayout from "@/layouts/AppLayout";
import "../globals.css";
import AnalyticsTracker from "@/components/AnalyticsTracker";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ContextProvider>
                    <AnalyticsTracker />
                    <AppLayout>{children}</AppLayout>
                </ContextProvider>
            </body>
        </html>
    );
}

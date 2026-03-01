import { ContextProvider } from "../utilities/contextApi";
import AppLayout from "@/layouts/AppLayout";
import "../globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ContextProvider>
                    <AppLayout>{children}</AppLayout>
                </ContextProvider>
            </body>
        </html>
    );
}

import {Inter} from "next/font/google";
import "../globals.css";
import {ThemeProvider} from "@/components/themes-provider"
import {AppSidebar} from "@/components/AppSidebar";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {cookies} from "next/headers";
import {Toaster} from "@/components/ui/toaster";
import {routing} from '@/i18n/routing.ts';
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {notFound} from "next/navigation";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    description: "My personal portfolio",
    icons: {
        icon: [
            {rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png"},
            {rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png"},
            {rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png"},
            {rel: "shortcut icon", url: "/favicon.ico"},
        ],
        manifest: "/site.webmanifest",
        maskIcon: {rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5"},
    },
};


export default async function LocaleLayout({children, params}) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"
    const {locale} = await params;

    if (!routing.locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
        <body className={inter.className} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <SidebarProvider defaultOpen={defaultOpen}>
                    <AppSidebar lang={locale}/>
                    <SidebarInset>
                        {children}<Toaster/>
                    </SidebarInset>
                </SidebarProvider>
            </ThemeProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}

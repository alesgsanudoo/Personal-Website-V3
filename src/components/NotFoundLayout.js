import {Inter} from "next/font/google";
import "@/app/globals.css";
import {ThemeProvider} from "@/components/themes-provider"
import {AppSidebar} from "@/components/AppSidebar";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {cookies} from "next/headers";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";


const inter = Inter({subsets: ["latin"]});

export default async function NotFoundLayout({children, locale}) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"

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
                        {children}
                    </SidebarInset>
                </SidebarProvider>
            </ThemeProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}

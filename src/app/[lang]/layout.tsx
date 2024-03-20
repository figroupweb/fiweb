import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { i18n } from "@/config/i18n.config";
import { Nav } from "@/components/Nav";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import Header from "@/components/Header";
import NewsTracker from "@/components/News-Tracker";
import { inter } from "@/utils/fonts";
import Footer from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
// import CookieConsent from "@/components/CookieBotConsent";

export async function generateStaticParams() {
    const languages = i18n.locales.map((lang) => ({ lang }));
    return languages;
}

export const metadata: Metadata = {
    title: "YouTube Piloto",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    return (
        <html lang={params.lang}>
            <head>
                <ThemeModeScript />
            </head>
            <body className={inter.className}>
                <GoogleTagManager gtmId="GTM-5TBGTCQJ" />
                <Flowbite>
                    <NewsTracker />
                    <Header />
                    {children}
                    {/* <CookieConsent /> */}
                    <Footer />
                </Flowbite>
            </body>
        </html>
    );
}

import { Locale } from "@/config/i18n.config";
import { Metadata } from "next";
import { AlternateURLs } from "next/dist/lib/metadata/types/alternative-urls-types";

export const metadata: Metadata = {
    title: 'About Page',
    description: 'The React Framework for the Web',
    alternates: {
        canonical: "/about"
    }

}

export default function AboutPage({ params }: { params: { lang: Locale } }) {
    return <h1>Hello, from About page!</h1>
}
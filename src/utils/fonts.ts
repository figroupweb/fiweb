import { Inter, Outfit } from "next/font/google";

export const inter = Inter({
    weight: ["200", "300", "400", "500"],
    variable: "--font-content",
    subsets: ["latin"],
    display: "swap",
});

export const outfit = Outfit({
    weight: ["500", "600", "700", "800", "900"],
    variable: "--font-headings",
    subsets: ["latin"],
    display: "swap",
});

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const octarine = localFont({
    src: [
        {
            path: "../fonts/OctarineFont/Octarine-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../fonts/OctarineFont/Octarine-Light.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/OctarineFont/Octarine-Bold.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../fonts/OctarineFont/Octarine-Bold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../fonts/OctarineFont/Octarine-Bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-octarine",
});

export const metadata: Metadata = {
    title: "Antoine Baudot - Product Manager",
    description: "Portfolio showcasing my experience, skills, and projects.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`dark ${octarine.variable}`}>
            <body className="font-sans bg-background text-foreground antialiased">
                <Navbar />
                {children}
            </body>
        </html>
    );
}

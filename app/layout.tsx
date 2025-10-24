import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Quicksand, Oswald } from "next/font/google";
import Nav from "@/components/Layouts/Nav"
import Footer from "@/components/Layouts/Footer"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nike Store",
  description: "Nike store built with Next.js 15 and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${oswald.variable} antialiased`}
      >
        <header>
          <Nav />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "K. Senthilkumar — Technical Manager | Welding & Quality Specialist",
  description:
    "Senior Quality, Engineering & Welding Leader with 25+ years of experience in Oil & Gas manufacturing, repair, and remanufacturing across the Middle East. API Q1, ASME, AWS, and NACE compliance expert.",
  keywords: [
    "Senthilkumar",
    "Technical Manager",
    "Welding Engineer",
    "Quality Manager",
    "Oil & Gas",
    "API Q1",
    "ASME",
    "AWS Certified Welding Inspector",
    "QA/QC",
    "Dubai",
  ],
  authors: [{ name: "K. Senthilkumar" }],
  openGraph: {
    title: "K. Senthilkumar — Technical Manager | Welding & Quality Specialist",
    description:
      "25+ years leading welding engineering, quality assurance, and API/ASME compliance for Oil & Gas manufacturing, repair, and remanufacturing.",
    url: siteUrl,
    siteName: "K. Senthilkumar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K. Senthilkumar — Technical Manager | Welding & Quality Specialist",
    description:
      "25+ years leading welding engineering, quality assurance, and API/ASME compliance for Oil & Gas manufacturing, repair, and remanufacturing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-full bg-plate text-slate-100 antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

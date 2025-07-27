import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from 'next/head';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salem Walmart Guide",
  description: "Salem Walmart Guide",
  openGraph: {
  title: "Salem Walmart Guide",
  description: "Salem Walmart Guide",
  siteName: "Salem Walmart Guide",
  images: [
    {
      url: "/preview.png", 
      width: 1200,
      height: 630,
      alt: "Salem Walmart Guide preview image",
    },
  ],
  locale: "en_US",
  type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, PT_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ptMono = PT_Mono({
  weight: "400", // PT Mono only comes in 400 weight
  variable: "--font-pt-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cosmas Ngeno",
  description: "This is my porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ptMono.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
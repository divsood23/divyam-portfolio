import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-dm-serif" });
export const metadata: Metadata = { title: "Divyam Sood — Marketing Portfolio", description: "The portfolio of Divyam Sood, a PGDM Marketing graduate in Bangalore.", keywords: ["Divyam Sood", "marketing", "portfolio", "Bangalore"] };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body className={`${inter.variable} ${display.variable}`}>{children}</body></html>; }

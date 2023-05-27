"use client";
import "./globals.css";
import { Source_Sans_Pro } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProviderComp from "@/components/ThemeProviderComp";
import SideStripes from "@/components/SideStripes";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source_sans_pro",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProviderComp>
        <body
          id="home"
          className={`${sourceSansPro.variable} font-source_sans_pro relative dark:bg-slate-800 bg-slate-50 dark:text-slate-50 text-slate-800 flex flex-col`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </ThemeProviderComp>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ViewportFrame from "@/components/ViewportFrame";
import { clashDisplay } from "./fonts";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "Rodrigo Vera — Portfolio",
  description: "Fullstack Developer",
  icons: {
    icon: "/rg-fn.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={clashDisplay.variable} suppressHydrationWarning>
        <LanguageProvider>
          <ViewportFrame />
          <Navbar />

          <main>
            {children}
          </main>

          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

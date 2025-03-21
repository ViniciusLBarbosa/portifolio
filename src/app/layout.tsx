import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import LanguageSwitch from "@/components/LanguageSwitch";
import ThemeSwitch from "@/components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinícius Lima | Portfolio",
  description: "Backend Developer portfolio showcasing my projects, certificates, and experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="fixed top-4 right-4 flex gap-2 z-50">
              <ThemeSwitch />
              <LanguageSwitch />
            </div>
            <main className="min-h-screen">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

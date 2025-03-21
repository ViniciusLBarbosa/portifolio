import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";
import LanguageSwitch from "@/components/LanguageSwitch";

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
    <html lang="en" className="dark [color-scheme:dark] !bg-gray-900">
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${inter.className} !bg-gray-900 !text-gray-100 dark`}>
        <LanguageProvider>
          <div className="fixed top-4 right-4 z-50">
            <LanguageSwitch />
          </div>
          <main className="min-h-screen !bg-gray-900">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}

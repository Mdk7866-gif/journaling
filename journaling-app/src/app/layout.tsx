import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Weekly Schedule & Journal",
  description: "Track your weekly schedule and journal your thoughts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-6xl mx-auto p-4 md:p-8">
          <header className="text-center mb-8 animate-fade-in-down">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent mb-2 drop-shadow-lg">
              📅 My Weekly Schedule
            </h1>
            <p className="text-indigo-200 text-lg">
              A structured approach to productivity and growth
            </p>
          </header>
          <Navigation />
          <main className="animate-fade-in-up">{children}</main>
        </div>
      </body>
    </html>
  );
}

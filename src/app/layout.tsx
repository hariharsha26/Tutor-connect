import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "TutorConnect",
  description: "Find your perfect tutor locally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-950 min-h-screen pb-20 pt-24 font-sans text-gray-900 dark:text-gray-100 antialiased">
        <Navbar />
        <main className="container mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  );
}

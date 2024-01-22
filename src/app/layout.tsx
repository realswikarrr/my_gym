import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Workouts",
  description:
    "App Created To Make My Life Easier To Follow Jeff Nippard PPL Routine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "bg-black text-white flex flex-col min-h-screen mx-auto max-w-6xl px-4 pt-8 pb-16"
        )}
      >
        {children}
      </body>
    </html>
  );
}

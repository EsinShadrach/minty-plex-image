import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const baseFont = localFont({
  src: "./TT Firs Neue Trial Medium.ttf",
  display: "swap",
  variable: "--font-base",
});

const lightFont = localFont({
  src: "./TT Firs Neue Trial Light.ttf",
  display: "swap",
  variable: "--font-light",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${baseFont.className} ${lightFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
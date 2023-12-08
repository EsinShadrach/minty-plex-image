import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

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
  title: "MintyPlex Username",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${baseFont.className} ${lightFont.variable} minty-bg`}>
        {children}
      </body>
    </html>
  );
}

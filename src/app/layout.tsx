import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To you, my love",
  description: "My heart can only hold so much"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import mobileBackground from "@public/images/mobile background.webp";

import { Space_Mono } from 'next/font/google';

const space_mono = Space_Mono({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: "Danijel Adrinek",
  description: "NextJS portfolio for a Web Developer named Danijel Adrinek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space_mono.className} style={{backgroundImage: `url('${mobileBackground.src}')`}}>
        {children}
      </body>
    </html>
  );
}

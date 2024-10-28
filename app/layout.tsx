import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import  { Lora } from "next/font/google";
import "./globals.css";

const font = Lora({
 weight:['400','500','600','700'],
 subsets:['latin']
});

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "Poortfolio website created by next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}
      >
        {children}
      </body>
    </html>
  );
}

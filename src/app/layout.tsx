import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import { Header } from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Landing Page",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-container`}
      >
        <div className='min-h-screen bg-white p-16'>
          <Header />
          <main className=' mx-auto p-4'>
            <div className='flex flex-col md:flex-row gap-8'>
              <div className='md:w-1/2'>
                <div className='relative w-full h-96 rounded-3xl overflow-hidden shadow-lg'>
                  <Image
                    src='/images/property.jpg'
                    alt='Property'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </div>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}

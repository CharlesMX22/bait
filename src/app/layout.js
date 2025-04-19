import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Instagram",
  description: "Si te queda..",
  openGraph: {
    title: "Instagram",
    description: "El amor es..",
    url: "http://instagranm.com.mx/",
    images: [
      {
        url: "http://instagranm.com.mx/image.png", // Esta imagen se verá en WhatsApp
        width: 1200,
        height: 630,
        alt: "Hollywood",
      }
    ]
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

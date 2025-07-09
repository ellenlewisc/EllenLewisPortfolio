import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ellen Lewis",
  description: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navigation>{children}</Navigation>
      </body>
    </html>
  );
}

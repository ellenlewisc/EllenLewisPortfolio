import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Providers from "./components/providers";
import Navigation from "./components/navigation";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ellen Lewis | Software Developer",
  description:
    "Ellen Lewis is a full-stack software developer in Halifax, Nova Scotia, building web applications with .NET, C#, React and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable}`}>
        <Providers>
          <Navigation>{children}</Navigation>
        </Providers>
      </body>
    </html>
  );
}

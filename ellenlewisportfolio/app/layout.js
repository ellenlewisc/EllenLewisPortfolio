import { Figtree, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Providers from "./components/providers";
import Navigation from "./components/navigation";

const sans = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
});

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ellen Lewis | Software Developer & Project Manager",
  description:
    "Ellen Lewis is a full-stack software developer and project manager in Halifax, Nova Scotia, delivering web applications with .NET, C#, React and Next.js from requirements to launch.",
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

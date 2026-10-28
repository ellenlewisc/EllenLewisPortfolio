import "./globals.css";
import Navigation from "./components/navigation";

export const metadata = {
  title: "Ellen Lewis | Software Developer",
  description:
    "Ellen Lewis is a full-stack software developer in Halifax, Nova Scotia, building web applications with .NET, C#, React and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation>{children}</Navigation>
      </body>
    </html>
  );
}

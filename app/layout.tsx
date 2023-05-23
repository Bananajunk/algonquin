import "./globals.css";
import { Source_Sans_Pro, Yellowtail } from "next/font/google";

import Navbar from "./Navbar";

const sourceSans = Source_Sans_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-source",
});
const script = Yellowtail({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata = {
  title: "Radiant Tales",
  description: "Family stories about Radiant Lake and Algonquin Park",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${script.variable} bg-background font-source text-base`}
    >
      <body className="relative">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

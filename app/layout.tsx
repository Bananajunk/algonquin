import "./globals.css";
import { Oswald, Source_Serif_Pro, Yellowtail } from "next/font/google";

import Navbar from "./Navbar";

const headings = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

const content = Source_Serif_Pro({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-content",
});

const handwriting = Yellowtail({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handwriting",
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
      className={`${headings.variable} ${content.variable} ${handwriting.variable} bg-background font-content text-base`}
    >
      <body className="relative">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

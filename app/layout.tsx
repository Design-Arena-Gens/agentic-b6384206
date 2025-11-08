import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jammu Kaladi Cafe - Authentic Kashmiri Cheese Delights",
  description: "Experience the authentic taste of Jammu's famous Kaladi cheese at Greater Noida Extension. Serving delicious pizzas, burgers, and more with traditional Kaladi cheese.",
  keywords: "Kaladi, Jammu cheese, Greater Noida Extension, pizza, burgers, authentic cuisine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

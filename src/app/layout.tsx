import type { Metadata } from "next";
import { montserrat } from "./fonts";
import Nav from "./components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "test",
  description: "a test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}

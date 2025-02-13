import type { Metadata } from "next";
import { Montserrat, Abril_Fatface } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  // Include multiple weights for more design flexibility
  weight: ["300", "400", "500", "600", "700"],
});

const abril = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-abril",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Task Master",
  description: "A beautiful todo list application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${abril.variable}`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

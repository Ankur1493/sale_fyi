import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sale.fyi",
  description: "Sale.fyi is a ecommerce platform, build by Ankur Sharma using Next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen h-full w-full max-w-screen",
          inter.className
        )}
      >
        {children}
      </body>
    </html >
  );
}

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KORT.X",
  description: "Reestruture sua empresa com IA",
  metadataBase: new URL("https://kortx.pro"),
  icons: {
    icon: "/logo/kortx-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-white text-[#0A1628]`}>
        {children}
      </body>
    </html>
  );
}

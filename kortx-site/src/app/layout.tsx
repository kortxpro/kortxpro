import type { Metadata } from "next";
import "./globals.css";

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
  return children;
}

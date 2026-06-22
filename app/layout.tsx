import type { Metadata } from "next";
import "./globals.css";
import FontGuard from "@/components/FontGuard";

export const metadata: Metadata = {
  title: "Y Media",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <FontGuard />
        {children}
      </body>
    </html>
  );
}

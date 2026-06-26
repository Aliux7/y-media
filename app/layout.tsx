import type { Metadata } from "next";
import "./globals.css";
import FontGuard from "@/components/FontGuard";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Y Media",
  description: "A Jakarta-based publishing atelier.",
  metadataBase: new URL("https://ymedia.id/"),
  openGraph: {
    title: "Y Media",
    description: "A Jakarta-based publishing atelier.",
    siteName: "Y Media",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Y Media",
    description: "A Jakarta-based publishing atelier.",
  },
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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

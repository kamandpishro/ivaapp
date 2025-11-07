import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "بسته اینترنتی",
  description: "صفحه خرید بسته اینترنتی ایوا",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-iran antialiased bg-white text-black">
        {children}
      </body>
    </html>
  );
}

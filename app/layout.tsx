import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "가치행",
  description: "1인 여행자를 위한 동행 서비스 커뮤니티, 같이의 가치 여행",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

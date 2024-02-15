import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header/Header";

const pretendard = localFont({
  src: "../public/assets/fonts/PretendardVariable.woff2",
  display: "swap",
});

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
    <html lang='ko' className={pretendard.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

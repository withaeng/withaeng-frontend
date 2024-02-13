import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Favicon from "./favicon.ico";
const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "가치행",
  description: "1인 여행자를 위한 동행 서비스 커뮤니티, 같이의 가치 여행",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <>
        <head>
          <title>같이행</title>
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/favicon/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
          <link rel="manifest" href="/favicon/manifest.json" />
          <meta name="description" content="" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/favicon/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/favicon/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/favicon/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/favicon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/favicon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/favicon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/favicon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/favicon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="36x36"
            href="/favicon/favicon-36x36.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="48x48"
            href="/favicon/favicon-48x48.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="72x72"
            href="/favicon/favicon-72x72.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="144x144"
            href="/favicon/favicon-144x144.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/favicon/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
        </head>
        <body className={font.className}>
          <Header />
          {children}
        </body>
      </>
    </html>
  );
}

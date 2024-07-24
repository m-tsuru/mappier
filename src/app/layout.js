import { Inter } from "next/font/google";

import { Header } from "../components/Basic/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mappier",
  description: "歌を置いていくよ！",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <div className="m-2">{children}</div>
      </body>
    </html>
  );
}

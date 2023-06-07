import "./globals.css";
import Header from "@/src/components/Header";
import { Noto_Sans_JP } from "next/font/google";

/** <head>部の設定. */
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

/** フォントの読み込み. */
const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});

/**
 * The type of props of RootLayout.
 */
type RootLayoutProps = {
  /** ページやレイアウトの内容. */
  children: React.ReactNode;
};

/**
 * ページのレイアウト.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body className={NotoSansJP.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

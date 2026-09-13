import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "刘文安 | Mycool",
  description: "刘文安的个人技术网站，记录机器人二次开发经历、Mycool 开发和 LSTM 中文影评情感分析毕业设计。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

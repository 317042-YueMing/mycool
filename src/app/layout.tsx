import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "刘文安 | Mycool",
  description: "刘文安的个人技术网站，记录实时 AI 视觉巡检、四足机器人联调、Mycool 开发与毕业设计项目。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "周氏家族基金",
  description:
    "1973 — 一个起点。家族数字遗产的投资框架、配置展示与十年验证计划。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-stone-50 text-stone-800 antialiased">
        <Nav />
        <main className="mx-auto max-w-5xl px-4 py-8 sm:py-12">{children}</main>
        <footer className="border-t border-stone-200 py-8 text-center text-xs text-stone-400">
          <p>周氏家族基金 · 十年验证框架 · 2036-2046</p>
          <p className="mt-1">不是终点，是起点。</p>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "R:new Design Studio | 상세페이지 전문가",
    description: "데이터의 설계로 완성하는 프리미엄 상세페이지 전문가, R:new Design Studio",
    keywords: ["상세페이지", "디자인", "상세페이지 디자이너", "쇼핑몰 디자인", "UI/UX"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className="scroll-smooth">
            <body className={`${inter.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}

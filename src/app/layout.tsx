import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "R:new Design Studio | 상세페이지 디자이너",
    description: "데이터의 설계로 완성하는 상세페이지 디자이너 R:new Design Studio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}

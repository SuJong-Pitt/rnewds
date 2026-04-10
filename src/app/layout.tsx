import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://rnewds.com"),
    title: {
        default: "R:new Design Studio | 하이엔드 상세페이지 기획/디자인",
        template: "%s | R:new Design Studio"
    },
    description: "가치를 증명하는 압도적 비주얼의 힘. 데이터의 설계로 완성하는 프리미엄 상세페이지 전문가, R:new Design Studio입니다.",
    keywords: ["상세페이지", "디자인", "상세페이지 디자이너", "쇼핑몰 디자인", "UI/UX", "프리미엄 디자인", "기획형 상세페이지", "상세페이지 외주"],
    authors: [{ name: "R:new Design Studio" }],
    creator: "R:new Design Studio",
    publisher: "R:new Design Studio",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "/",
        types: {
            'application/rss+xml': 'https://rnewds.com/rss.xml',
        },
    },
    icons: {
        icon: '/images/icons/logo.svg',
        shortcut: '/images/icons/logo.svg',
        apple: '/images/icons/logo.svg',
    },
    openGraph: {
        title: "R:new Design Studio | 하이엔드 상세페이지 기획/디자인",
        description: "가치를 증명하는 압도적 비주얼의 힘, R:new Design Studio",
        url: "https://rnewds.com",
        siteName: "R:new Design Studio",
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "R:new Design Studio",
            },
        ],
        locale: "ko_KR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "R:new Design Studio",
        description: "하이엔드 상세페이지 기획/디자인 전문가",
        images: ["/images/og-image.png"],
    },
    verification: {
        google: "google-site-verification-placeholder",
        other: {
            "naver-site-verification": ["fe3f328b4d42790ae8e31bf77a0f14389fcef98a"],
        },
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "R:new Design Studio",
    "image": "https://rnewds.com/og-image.jpg",
    "url": "https://rnewds.com",
    "telephone": "",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "",
        "addressLocality": "Seoul",
        "postalCode": "",
        "addressCountry": "KR"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.5665,
        "longitude": 126.9780
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "10:00",
        "closes": "19:00"
    },
    "sameAs": [
        "https://pf.kakao.com/_xaxgJdX/chat",
        "https://rnewds.com"
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
            <body className={inter.className}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {children}
            </body>
        </html>
    );
}

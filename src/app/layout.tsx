import type { Metadata } from "next";
import { Montserrat, Noto_Sans_KR, Gowun_Batang, Nanum_Pen_Script } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap",
});

const notoProject = Noto_Sans_KR({ 
    weight: ["400", "500", "700", "900"],
    variable: "--font-noto",
    display: "swap",
    preload: false,
});

const gowunBatang = Gowun_Batang({
    weight: ["400", "700"],
    variable: "--font-gowun",
    display: "swap",
    preload: false,
});

const nanumPen = Nanum_Pen_Script({ 
    weight: "400", 
    variable: "--font-nanum-pen",
    display: "swap",
    preload: false,
});

export const metadata: Metadata = {
    metadataBase: new URL("https://rnewds.com"),
    title: {
        default: "알뉴디자인 | 사장님을 위한 상세페이지 파트너",
        template: "%s | 알뉴디자인"
    },
    description: "디자인이 막막한 초보 사장님을 위한 든든한 파트너. 기획부터 디자인까지 친절하게 도와드리는 알뉴디자인스튜디오입니다.",
    keywords: ["상세페이지", "디자인", "상세페이지 디자이너", "쇼핑몰 디자인", "UI/UX", "프리미엄 디자인", "기획형 상세페이지", "상세페이지 외주", "알뉴디자인스튜디오", "알뉴디자인"],
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
        // 1순위: 고화질 SVG (브라우저 탭용)
        icon: [
            { url: '/images/icons/logo.svg', type: 'image/svg+xml' },
            { url: '/favicon.ico', sizes: 'any' }, // 2순위: ICO (검색엔진 봇용)
        ],
        // 아이폰/아이패드 홈 화면 추가용
        apple: [
            { url: '/images/icons/logo.svg' },
        ],
    },
    openGraph: {
        title: "알뉴디자인 | 사장님을 위한 상세페이지 파트너",
        description: "사장님의 진심을 담아 기획부터 디자인까지 친절하게 도와드려요.",
        url: "https://rnewds.com",
        siteName: "알뉴디자인",
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
        title: "알뉴디자인",
        description: "상세페이지 고민, 알뉴디자인이 함께 해결해 드릴게요.",
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
    "name": "알뉴디자인",
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
        <html lang="ko" className={`scroll-smooth ${notoProject.variable} ${montserrat.variable} ${gowunBatang.variable} ${nanumPen.variable}`} suppressHydrationWarning>
            <body className={`${notoProject.className} font-sans`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {children}
            </body>
        </html>
    );
}

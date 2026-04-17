import type { Metadata } from "next";
import SessionTimeout from "@/components/admin/SessionTimeout";

export const metadata: Metadata = {
    title: "Admin - R:new Design Studio",
    description: "Admin Management Console",
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
        },
    },
};

import { SessionProvider } from "@/context/SessionContext";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SessionProvider timeoutSeconds={60 * 60}>
            <div className="min-h-screen">
                {children}
                <SessionTimeout countdownSeconds={60 * 5} />
            </div>
        </SessionProvider>
    );
}

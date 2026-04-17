import { NextResponse } from "next/server";
import { getDb } from "@/lib/d1";
import { hashPassword } from "@/lib/auth-utils";

// export const runtime = "edge"; // 로컬 Wrangler Bridge 지원을 위해 일시 주석 처리

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        const db = getDb();

        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        const hashedPassword = await hashPassword(password);

        // Find the admin in D1
        const admin = await db
            .prepare("SELECT * FROM admins WHERE email = ? AND password_hash = ?")
            .bind(email, hashedPassword)
            .first();

        if (!admin) {
            return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
        }

        // Authentication logic
        // Create a simple session cookie for now
        // Usually, you should use a signed JWT or a session store
        const response = NextResponse.json({ 
            success: true, 
            user: { id: admin.id, email: admin.email } 
        });

        // Set an insecure session cookie for the demo/migration context
        // In a real production app, use an HttpOnly, Secure, SameSite cookie with a signed token
        response.cookies.set("admin-session", "authenticated", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 // 1 hour
        });

        return response;
    } catch (error: any) {
        console.error("Login Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

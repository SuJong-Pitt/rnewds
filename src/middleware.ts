import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const session = request.cookies.get('admin-session');
    const { pathname } = request.nextUrl;

    // 1. 관리자 대시보드 페이지 보호: 세션이 없으면 로그인 페이지로 리다이렉트
    if (pathname.startsWith('/admin/dashboard')) {
        if (!session || session.value !== 'authenticated') {
            const loginUrl = new URL('/admin/login', request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    // 2. 이미 로그인된 상태에서 로그인 페이지 접근 시 대시보드로 이동
    if (pathname === '/admin/login') {
        if (session && session.value === 'authenticated') {
            return NextResponse.redirect(new URL('/admin/dashboard', request.url));
        }
    }

    // 3. 관리 전용 API 보호
    if (pathname.startsWith('/api/')) {
        // 로그인 API는 누구나 접근 가능해야 함
        if (pathname.startsWith('/api/auth/login')) {
            return NextResponse.next();
        }

        // 스토리지 API(업로드/삭제) 전체 및 다른 API의 쓰기(POST, PUT, DELETE) 작업 보호
        const isStorageApi = pathname.startsWith('/api/storage');
        const isWriteOperation = ['POST', 'PUT', 'DELETE'].includes(request.method);

        if (isStorageApi || isWriteOperation) {
            if (!session || session.value !== 'authenticated') {
                return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
            }
        }
    }

    const response = NextResponse.next();

    // 4. 세션 유지 시간 연장 (Sliding Expiration: 1시간)
    // 접속할 때마다 쿠키의 만료 시간을 1시간으로 초기화하여, 1시간 동안 활동이 없으면 로그아웃되게 함
    if (session && session.value === 'authenticated') {
        response.cookies.set('admin-session', 'authenticated', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60, // 1시간
        });
    }

    return response;
}

// 매쳐를 사용하여 관련 경로들에 대해 미들웨어 실행
export const config = {
    matcher: ['/admin/:path*', '/api/:path*'],
};

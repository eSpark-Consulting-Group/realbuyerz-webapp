import { NextResponse } from 'next/server';

export default function middleware(req) {
    let loggedin = req.cookies.get('token');
    const { pathname } = req.nextUrl;

    if (loggedin && (pathname.startsWith('/agent/') || pathname.startsWith('/user/'))) {
        // Check user type here and redirect accordingly
        if (userType === 'agent') {
            return NextResponse.redirect(new URL('/agent/dashboard', req.url));
        } else if (userType === 'user') {
            return NextResponse.redirect(new URL('/user/dashboard', req.url));
        }
    }

    if (!loggedin && (pathname.startsWith('/agent/') || pathname.startsWith('/user/'))) {
        return NextResponse.redirect(new URL('/signin', req.url));
    }
}

export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)',
};

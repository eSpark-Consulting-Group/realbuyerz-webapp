import { NextResponse } from 'next/server';

export function middleware(request) {
  let isLoggedIn = request.cookies.get('logged');
  let role = request.cookies.get('role');

  if (isLoggedIn) {
    if (request.nextUrl.pathname === '/') {
      if (role?.value === 'agent') {
        if (!request.nextUrl.pathname.startsWith('/dashboard/live-bidding'))
          return NextResponse.redirect(
            new URL('/dashboard/live-bidding', request.url)
          );
      }
      if (role?.value === 'user') {
        if (!request.nextUrl.pathname.startsWith('/dashboard'))
          return NextResponse.redirect(new URL('/dashboard', request.url));
      }
    }
  }

  if (!isLoggedIn) {
    if (request.nextUrl.pathname.startsWith('/dashboard'))
      if (
        !request.nextUrl.pathname.startsWith('/signin') &&
        !request.nextUrl.pathname.startsWith('/signup')
      ) {
        return NextResponse.redirect(new URL('/signin', request.url));
      }
  }
}

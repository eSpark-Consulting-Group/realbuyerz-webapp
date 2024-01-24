import { NextResponse } from 'next/server';
// DONOT REMOVE THIS COMMENTED CODE BELOW.
export default function middleware(req) {
  // let tokenCookie = req.cookies.get('token');
  // let userTypeCookie = req.cookies.get('userType');
  // let loggedin = tokenCookie ? tokenCookie.value : null;
  // let userType = userTypeCookie ? userTypeCookie.value : null;
  // const { pathname } = req.nextUrl;
  // // if user is not logged in and tries to access dashboard, redirect to signin page
  // if (!loggedin && (pathname.startsWith('/agent/') || pathname.startsWith('/user/'))) {
  //     return NextResponse.redirect(new URL('/signin', req.url));
  // }
  // // if user is logged in and tries to access signin page or signup page, redirect to dashboard
  // if (loggedin && (pathname.startsWith('/signin') || pathname.startsWith('/signup'))) {
  //     if (userType === 'agent') {
  //         return NextResponse.redirect(new URL('/agent/live-bidding', req.url));
  //     } else if (userType === 'user') {
  //         return NextResponse.redirect(new URL('/user/dashboard', req.url));
  //     }
  // }
  // // if user is logged in and user type is agent and tries to access user dashboard, redirect to agent dashboard
  // if (loggedin && userType === 'agent' && pathname.startsWith('/user/')) {
  //     return NextResponse.redirect(new URL('/agent/live-bidding', req.url));
  // }
  // // if user is logged in and user type is user and tries to access agent dashboard, redirect to user dashboard
  // if (loggedin && userType === 'user' && pathname.startsWith('/agent/')) {
  //     return NextResponse.redirect(new URL('/user/dashboard', req.url));
  // }
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};

import { NextResponse } from 'next/server';
import { ROUTES } from './app/constants/middleware';

export const middleware = (request) => {
  let isLoggedIn = request.cookies.get(ROUTES.logged);
  let role = request.cookies.get(ROUTES.role);

  if (isLoggedIn) {
    if (
      request.nextUrl.pathname === ROUTES.slash ||
      request.nextUrl.pathname.startsWith(ROUTES.dashboard)
    ) {
      if (role?.value === ROUTES.agent) {
        if (!request.nextUrl.pathname.startsWith(ROUTES.dashboardAgent)) {
          return NextResponse.redirect(
            new URL(ROUTES.dashboardAgent, request.url)
          );
        }
      }

      if (role?.value === ROUTES.user) {
        if (!request.nextUrl.pathname.startsWith(ROUTES.dashboardUser)) {
          return NextResponse.redirect(
            new URL(ROUTES.dashboardUser, request.url)
          );
        }
      }
    }
  }

  if (!isLoggedIn) {
    if (
      request.nextUrl.pathname.startsWith(ROUTES.dashboard) ||
      request.nextUrl.pathname === ROUTES.slash
    ) {
      if (
        !request.nextUrl.pathname.startsWith(ROUTES.signIn) &&
        !request.nextUrl.pathname.startsWith(ROUTES.signUp)
      ) {
        return NextResponse.redirect(new URL(ROUTES.signIn, request.url));
      }
    }
  }
};

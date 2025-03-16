import { NextResponse } from 'next/server';

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Add your authentication logic here
    // For example, check for an admin token or session
    const isAuthenticated = false; // Replace with your auth check

    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*'
};

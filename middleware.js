import { NextResponse } from 'next/server';

const locales = ['sr', 'en', 'ru'];
const defaultLocale = 'sr';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Do not rewrite for static files or api routes
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.includes('.') || // matches favicon.ico, robots.txt, etc
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // If user explicitly visits /sr or /sr/...
  // redirect them to remove the /sr prefix for clean URLs.
  if (pathname.startsWith('/sr/') || pathname === '/sr') {
    const newPath = pathname.replace(/^\/sr/, '') || '/';
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = ['en', 'ru'].every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // If missing locale, rewrite to /sr/... so it uses the sr translations internally
  if (pathnameIsMissingLocale) {
    const newUrl = new URL(`/sr${pathname === '/' ? '' : pathname}`, request.url);
    return NextResponse.rewrite(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.).*)',
  ],
};

import { NextRequest, NextResponse } from 'next/server';

const CITY_SUBDOMAINS = new Set([
  'minneapolis', 'saintpaul', 'bloomington', 'brooklynpark', 'plymouth',
  'eagan', 'rochester', 'omaha', 'edenprairie', 'maplegrove', 'duluth'
]);

const SERVICE_SUBDOMAINS = new Set(['medical', 'sameday', 'freight']);

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const subdomain = hostname.split('.')[0];

  // Skip for main domain, www, or localhost
  if (subdomain === 'www' || subdomain === 'boxtruckboys' || hostname.startsWith('localhost') || hostname.startsWith('127.0.0.1')) {
    return NextResponse.next();
  }

  if (CITY_SUBDOMAINS.has(subdomain)) {
    return NextResponse.rewrite(new URL(`/city/${subdomain}`, request.url));
  }

  if (SERVICE_SUBDOMAINS.has(subdomain)) {
    return NextResponse.rewrite(new URL(`/landing/${subdomain}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|css|js|fonts).*)'],
};

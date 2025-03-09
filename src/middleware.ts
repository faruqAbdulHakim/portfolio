import { NextRequest, NextResponse } from 'next/server';
import { env } from './env';

export async function middleware(request: NextRequest) {
  const isMaintenancePage = request.nextUrl.pathname === '/maintenance';

  if (env.MAINTENANCE && !isMaintenancePage) {
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }
  if (!env.MAINTENANCE && isMaintenancePage) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|icon.png).*)',
  ],
};

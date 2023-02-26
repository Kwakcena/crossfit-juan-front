import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MOBILE_USER_AGENT = new RegExp(
  '.*Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)|Tablet|tablet.*',
);

const checkRegex = (regex: RegExp) => (target: string): boolean => regex.test(target);
const checkMobileUserAgent = checkRegex(MOBILE_USER_AGENT);

export function middleware(request: NextRequest) {
  const isMobile = checkMobileUserAgent(request.headers.get('user-agent') || '');

  const { nextUrl } = request;
  const { pathname } = nextUrl;

  if (!isMobile) {
    return NextResponse.next();
  }
  nextUrl.pathname = `/m${pathname}`;
  return NextResponse.rewrite(nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

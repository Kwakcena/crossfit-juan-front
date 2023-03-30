import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const STATIC_FILE_PATTERN_LIST = [
  /^(\/manifest\.json)/,
  /^(\/images\/)/,
  /^(\/naver)/,
  /^(\/sitemap\/)/,
  /^(\/service-worker\.js)/,
];

const MOBILE_USER_AGENT = new RegExp(
  ".*Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)|Tablet|tablet.*"
);

const checkRegex =
  (regex: RegExp) =>
  (target: string): boolean =>
    regex.test(target);
const checkMobileUserAgent = checkRegex(MOBILE_USER_AGENT);
const checkStaticFileRequest = (pathname: string): boolean =>
  STATIC_FILE_PATTERN_LIST.reduce<boolean>((acc, regex) => {
    if (regex.test(pathname)) {
      acc = true;
    }
    return acc;
  }, false);

export function middleware(request: NextRequest) {
  const isMobile = checkMobileUserAgent(
    request.headers.get("user-agent") || ""
  );

  console.log("mobile-viewer:", request.headers["cloudfront-is-mobile-viewer"]);

  const { nextUrl } = request;
  const { pathname } = nextUrl;

  const isStaticFileRequest = checkStaticFileRequest(pathname);

  if (isStaticFileRequest || !isMobile) {
    return NextResponse.next();
  }
  nextUrl.pathname = `/m${pathname}`;
  return NextResponse.rewrite(nextUrl);
}

export const config = {
  // matcher: ['/((?!api|_next/static|_next/image).*)'],
  matcher: ["/:path*"],
};

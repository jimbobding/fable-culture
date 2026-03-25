import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const galleryCookie = req.cookies.get("fable-auth")?.value;
  const adminCookie = req.cookies.get("fable-admin")?.value;

  const sitePassword = process.env.SITE_PASSWORD;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (pathname.startsWith("/gallery")) {
    if (galleryCookie && sitePassword && galleryCookie === sitePassword) {
      return NextResponse.next();
    }
  }

  if (pathname.startsWith("/admin")) {
    if (adminCookie && adminPassword && adminCookie === adminPassword) {
      return NextResponse.next();
    }
  }

  const url = req.nextUrl.clone();
  url.pathname = "/password";
  url.searchParams.set("from", pathname);

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/gallery", "/gallery/:path*", "/admin", "/admin/:path*"],
};

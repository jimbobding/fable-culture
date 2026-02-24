import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const passwordCookie = req.cookies.get("fable-auth")?.value?.trim();
  const sitePassword = process.env.SITE_PASSWORD?.trim();

  // If authed, allow
  if (passwordCookie && sitePassword && passwordCookie === sitePassword) {
    return NextResponse.next();
  }

  // Not authed: send to password + remember destination
  const redirectUrl = req.nextUrl.clone();
  redirectUrl.pathname = "/password";
  redirectUrl.searchParams.set("from", req.nextUrl.pathname);

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/gallery/:path*"], // ONLY protect gallery
};

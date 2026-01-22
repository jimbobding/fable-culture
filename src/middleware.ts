import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const passwordCookie = req.cookies.get("fable-auth")?.value;

  // allow access to password page itself
  if (url.pathname === "/password") return NextResponse.next();

  // allow access if cookie matches
  if (passwordCookie === process.env.SITE_PASSWORD) return NextResponse.next();

  // otherwise, redirect to password page
  url.pathname = "/password";
  return NextResponse.redirect(url);
}

// Tell Next.js which paths this middleware should run on
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const authed = req.cookies.get("fable-auth")?.value;

  if (authed === "true") return NextResponse.next();

  const redirectUrl = req.nextUrl.clone();
  redirectUrl.pathname = "/password";
  redirectUrl.searchParams.set("from", req.nextUrl.pathname);

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/gallery/:path*"],
};

"use server";

import { cookies } from "next/headers";

export async function unlock(formData: FormData) {
  const input = String(formData.get("password") || "").trim();
  const expected = String(process.env.SITE_PASSWORD || "").trim();

  if (!expected || input !== expected) {
    return { ok: false as const, message: "Incorrect password. Try again." };
  }

  const cookieStore = await cookies(); // ✅ Next 16: cookies() is async

  cookieStore.set("fable-auth", "true", {
    path: "/",
    sameSite: "lax",
    // session cookie (no maxAge) so it disappears when browser closes
    // or set maxAge if you prefer:
    // maxAge: 60 * 10,
  });

  return { ok: true as const };
}

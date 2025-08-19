"use client";

import Link from "next/link";
import QRCode from "@/components/QRCode";

export default function HomePage() {
  // ✅ This is a valid React component
  const homepageURL = "https://fable-culture.vercel.app/";

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to Fable-Culture</h1>
      <p>Scan this QR code to visit the homepage:</p>
      <div className="bg-blue-500 text-white p-8 rounded-lg">
        Tailwind is working!
      </div>
      <QRCode url={homepageURL} />

      <h2 style={{ marginTop: "2rem" }}>Explore Africa by Region:</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <Link href="/africa/north">North Africa</Link>
        <Link href="/africa/west">West Africa</Link>
        <Link href="/africa/east">East Africa</Link>
        <Link href="/africa/central">Central Africa</Link>
        <Link href="/africa/southern">Southern Africa</Link>
      </div>
    </div>
  );
}

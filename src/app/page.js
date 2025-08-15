"use client";

import QRCode from "@/components/QRCode";
// import "@/styles/globals.css"; // make sure your global CSS is loaded

export default function Home() {
  const homepageURL = "https://fable-culture.vercel.app/";

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Welcome to Fable-Culture</h1>
      <p>Scan this QR code to visit the homepage:</p>
      <QRCode url={homepageURL} />

      {/* Image with hover effect */}
      <div style={{ marginTop: "2rem" }}>
        <img
          src="/20250531_154904.jpg"
          alt="Fable Culture Globe"
          width={200}
          style={{
            transition: "transform 0.3s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
    </div>
  );
}

// src/app/layout.js
export const metadata = {
  title: "Fable-Culture",
  description: "Learn about cultures around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

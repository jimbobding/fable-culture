import "./global.css"; // Import Tailwind CSS

export const metadata = {
  title: "Fable Culture",
  description: "Explore African regions with Fable-Culture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900">{children}</body>
    </html>
  );
}

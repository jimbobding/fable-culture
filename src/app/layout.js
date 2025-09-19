import "./global.css"; // Import Tailwind CSS

export const metadata = {
  title: "Fable Culture",
  description: "Explore African regions with Fable-Culture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-16x16.png" />
        {/* Add your favicon here */}
      </head>
      <body className="antialiased text-gray-900">{children}</body>
    </html>
  );
}

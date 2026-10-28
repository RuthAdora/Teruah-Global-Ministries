import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teruah Global Ministries | Sounding the Trumpet, Advancing the Kingdom",
  description:
    "Teruah Global Ministries with Apostle Steve — live services, teachings, prayer, and global outreach. Sounding the trumpet, advancing the Kingdom. Psalm 89:15.",
  keywords: [
    "Teruah Global Ministries",
    "Apostle Steve",
    "church",
    "live service",
    "prayer",
    "teachings",
    "prophetic",
  ],
  openGraph: {
    title: "Teruah Global Ministries",
    description: "Sounding the Trumpet. Advancing the Kingdom. — Psalm 89:15",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0B1220" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

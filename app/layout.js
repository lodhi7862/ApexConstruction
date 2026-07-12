import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://apex-construction.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Apex Construction - Building the Future",
    template: "%s | Apex Construction",
  },
  description:
    "Apex Construction delivers premium construction services for residential, commercial and institutional projects. Building the future with excellence, integrity and innovation.",
  keywords: [
    "construction company",
    "residential construction",
    "commercial construction",
    "infrastructure projects",
    "renovation and remodeling",
    "Apex Construction",
    "building contractor",
  ],
  authors: [{ name: "Apex Construction" }],
  creator: "Apex Construction",
  applicationName: "Apex Construction",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Apex Construction",
    title: "Apex Construction - Building the Future",
    description:
      "Premium construction services for residential, commercial & institutional projects.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Apex Construction project site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Construction - Building the Future",
    description:
      "Premium construction services for residential, commercial & institutional projects.",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

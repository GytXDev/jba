import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingCursor from "@/components/floating-cursor";
import type { Metadata } from "next"; // Import Metadata type

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jennyfer Batolo Architecture | Architecture Contemporaine au Gabon",
  description:
    "Nous concevons des espaces architecturaux modernes, intemporels, minimalistes et techniquement maîtrisés. Architecture contemporaine au Gabon.",
  keywords: [
    "architecture",
    "gabon",
    "libreville",
    "architecture contemporaine",
    "design architectural",
    "JBA",
    "Jennyfer Batolo",
  ],
  authors: [{ name: "Jennyfer Batolo Architecture" }],
  generator: "GytX Agence",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Jennyfer Batolo Architecture",
    description:
      "Nous concevons des espaces architecturaux modernes, intemporels, minimalistes et techniquement maîtrisés.",
    url: "https://jennyferbatolo.com",
    siteName: "Jennyfer Batolo Architecture",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Jennyfer Batolo Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jennyfer Batolo Architecture",
    description:
      "Architecture contemporaine au Gabon. Espaces modernes, intemporels et techniquement maîtrisés.",
    images: ["/image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
        <FloatingCursor />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Fuentes optimizadas
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// SEO + Metadata PRO
export const metadata: Metadata = {
  title: {
    default: "MEROBRATEC | Constructora & Desarrollo Inmobiliario",
    template: "%s | MEROBRATEC",
  },
  description:
    "MEROBRATEC es una empresa constructora y desarrolladora especializada en proyectos modernos, infraestructura y soluciones inmobiliarias de alta calidad.",

  keywords: [
    "constructora",
    "desarrollo inmobiliario",
    "construcción",
    "obras civiles",
    "empresa constructora Ecuador",
    "MEROBRATEC",
  ],

  authors: [{ name: "MEROBRATEC" }],
  creator: "MEROBRATEC",

  metadataBase: new URL("https://merobratec.vercel.app/"),

  openGraph: {
    title: "MEROBRATEC | Constructora & Desarrollo",
    description:
      "Construimos proyectos modernos y de alta calidad. Conoce MEROBRATEC.",
    url: "https://merobratec.vercel.app/",
    siteName: "MEROBRATEC",
    images: [
      {
        url: "/preview.png", // crea esta imagen (IMPORTANTE)
        width: 1200,
        height: 630,
        alt: "MEROBRATEC Constructora",
      },
    ],
    locale: "es_EC",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MEROBRATEC | Constructora",
    description:
      "Proyectos modernos, construcción de calidad y desarrollo inmobiliario.",
    images: ["/preview.png"],
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
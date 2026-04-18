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

// URL base (IMPORTANTE)
const siteUrl = "https://merobratec.vercel.app";

// SEO + Metadata PRO
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

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

  // OPEN GRAPH (REDES)
  openGraph: {
    title: "MEROBRATEC | Constructora & Desarroladora",
    description:
      "Construimos proyectos modernos y de alta calidad. Conoce MEROBRATEC.",
    url: siteUrl,
    siteName: "MEROBRATEC",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: `${siteUrl}/preview.png`, // 🔥 URL ABSOLUTA (CLAVE)
        width: 1200,
        height: 630,
        alt: "MEROBRATEC Constructora",
      },
    ],
  },

  // TWITTER
  twitter: {
    card: "summary_large_image",
    title: "MEROBRATEC | Constructora & Desarroladora",
    description:
      "Proyectos modernos, construcción de calidad y desarrollo inmobiliario.",
    images: [`${siteUrl}/preview.png`], // 🔥 URL ABSOLUTA
  },

  // ICONOS (LOCAL para evitar conflictos)
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
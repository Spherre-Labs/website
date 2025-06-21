import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Spherre - Collaboration Through Decentralized Security",
  description:
    "Spherre is a next-gen platform for secure, collaborative, multi-user crypto wallet and treasury management. Perfect for DAOs, startups, and organizations.",

  keywords: [
    "multisig",
    "crypto wallet",
    "treasury management",
    "DAO",
    "blockchain security",
    "decentralized",
    "collaborative finance",
    "web3",
    "cryptocurrency",
    "digital assets",
  ],
  authors: [{ name: "Spherre Team" }],
  creator: "Spherre",
  publisher: "Spherre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://spherre.xyz"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/spherrelogo.png" },
      { url: "/spherrelogo.png", sizes: "16x16", type: "image/png" },
      { url: "/spherrelogo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/spherrelogo.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/spherrelogo.png", color: "#000000" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spherre.xyz",
    siteName: "Spherre",
    title: "Spherre - Collaboration Through Decentralized Security",
    description:
      "Collaborate with confidence using Spherre – the modern way to manage crypto wallets with teams, DAOs, and organizations. Secure, scalable, and intuitive.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spherre Platform Preview",
        type: "image/png",
      },
      {
        url: "/og-image-twitter.png",
        width: 1200,
        height: 600,
        alt: "Spherre Platform Preview",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Spherremultisig",
    creator: "@Spherremultisig",
    title: "Spherre - Collaboration Through Decentralized Security",
    description:
      "Collaborate with confidence using Spherre – the modern way to manage crypto wallets with teams, DAOs, and organizations.",
    images: ["/og-image-twitter.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Web3, Blockchain, Cryptocurrency",
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Spherre",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/spherrelogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/spherrelogo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Spherre" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Spherre",
              url: "https://spherre.xyz",
              logo: "https://spherre.xyz/logo.png",
              description:
                "Spherre is a next-gen platform for secure, collaborative, multi-user crypto wallet and treasury management.",
              sameAs: [
                "https://x.com/Spherremultisig",
                "https://github.com/Spherre-Labs",
                "https://linkedin.com/company/spherre",
                "https://youtube.com/@spherre",
                "https://instagram.com/spherre_xyz",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "support@spherre.com",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

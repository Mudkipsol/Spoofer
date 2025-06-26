import type { Metadata } from "next";
import { Be_Vietnam_Pro, Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam-pro",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SpectreSpoofer - Bulletproof Content Spoofing & Repurposing",
  description: "The ultimate suite for bulletproof content repurposing. AI workflows, stealth grade obfuscation, and seamless cross platform deployment. Military-grade stealth technology for elite operators.",
  openGraph: {
    title: "SpectreSpoofer - Bulletproof Content Spoofing & Repurposing",
    description: "The ultimate suite for bulletproof content repurposing. AI workflows, stealth grade obfuscation, and seamless cross platform deployment. Military-grade stealth technology for elite operators.",
    url: "https://spectrespoofer.com",
    siteName: "SpectreSpoofer",
    images: [
      {
        url: "/spectrespoofer-hero-image.png",
        width: 1200,
        height: 630,
        alt: "SpectreSpoofer - Bulletproof Content Spoofing Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpectreSpoofer - Bulletproof Content Spoofing & Repurposing",
    description: "The ultimate suite for bulletproof content repurposing. AI workflows, stealth grade obfuscation, and seamless cross platform deployment.",
    images: ["/spectrespoofer-hero-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${beVietnamPro.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning className="antialiased font-be-vietnam-pro">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}

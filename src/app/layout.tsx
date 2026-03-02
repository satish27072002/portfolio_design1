import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Satish Somarouthu — Software Engineer",
  description:
    "Personal portfolio of Satish Somarouthu — full-stack engineer building fast, accessible products.",
  metadataBase: new URL("https://satishsomarouthu.me"),
  openGraph: {
    title: "Satish Somarouthu — Software Engineer",
    description:
      "Personal portfolio of Satish Somarouthu — full-stack engineer building fast, accessible products.",
    url: "https://satishsomarouthu.me",
    siteName: "Satish Somarouthu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satish Somarouthu — Software Engineer",
    description:
      "Personal portfolio of Satish Somarouthu — full-stack engineer building fast, accessible products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

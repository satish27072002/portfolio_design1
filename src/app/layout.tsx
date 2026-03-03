import type { Metadata } from "next";
import localFonts from "next/font/local";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = localFonts({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFonts({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Satish Somarouthu — Full Stack Developer & AI Engineer",
    template: "%s | Satish Somarouthu",
  },
  description:
    "Full-stack developer specializing in AI integration, React, Node.js, and scalable applications. Building impactful solutions from concept to deployment.",
  keywords: [
    "Satish Somarouthu",
    "full-stack developer",
    "software engineer",
    "AI engineer",
    "React",
    "Next.js",
    "TypeScript",
    "LangGraph",
    "portfolio",
  ],
  authors: [{ name: "Satish Somarouthu" }],
  creator: "Satish Somarouthu",
  metadataBase: new URL("https://satishsomarouthu.me"),
  openGraph: {
    title: "Satish Somarouthu — Full Stack Developer & AI Engineer",
    description:
      "Full-stack developer specializing in AI integration, React, Node.js, and scalable applications.",
    url: "https://satishsomarouthu.me",
    siteName: "Satish Somarouthu",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satish Somarouthu — Full Stack Developer & AI Engineer",
    description:
      "Full-stack developer specializing in AI integration, React, Node.js, and scalable applications.",
    creator: "@satish27072002",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
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

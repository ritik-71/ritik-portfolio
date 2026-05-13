import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { CommandPalette } from "@/components/CommandPalette";
import { SmoothScroll } from "@/components/SmoothScroll";
import PageTransition from "@/components/shared/PageTransition";
import Preloader from "@/components/shared/Preloader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ritik-kumar-singh.dev"),
  title: {
    default: "Ritik Kumar Singh | Full Stack Developer",
    template: "%s | Ritik Kumar Singh",
  },
  description:
    "Premium developer portfolio for Ritik Kumar Singh, a Computer Science Engineering student and full stack developer.",
  keywords: [
    "Ritik Kumar Singh",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "Java Developer",
    "Computer Science Engineering",
  ],
  authors: [{ name: "Ritik Kumar Singh" }],
  creator: "Ritik Kumar Singh",
  openGraph: {
    title: "Ritik Kumar Singh | Full Stack Developer",
    description:
      "Computer Science Engineering student building full-stack products with Next.js, Java, Spring Boot, and SQL.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik Kumar Singh | Full Stack Developer",
    description:
      "Full-stack developer portfolio for internships, placements, and software engineering roles.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground selection:bg-cyan-300/30 selection:text-cyan-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Preloader />
          <SmoothScroll />
          <CustomCursor />
          <CommandPalette />
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

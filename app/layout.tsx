import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ravi Thakur — Portfolio",
  description:
    "Portfolio of Ravi Thakur — aspiring full-stack developer building responsive web applications with React, Next.js, Node.js, and UI-focused frontend craft.",
  keywords: ["portfolio", "Ravi Thakur", "full-stack developer", "frontend developer", "Next.js", "React"],
  authors: [{ name: "Ravi Thakur" }],
  openGraph: {
    title: "Ravi Thakur — Portfolio",
    description: "Aspiring full-stack developer focused on responsive web applications, clean UI, and modern frontend experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} ${dmMono.variable} font-body`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

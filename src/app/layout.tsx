import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import ThemeProvider from "@/components/shared/theme-provider";
import "./globals.css";
import { AnalyticsProvider } from "@/analytics/provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Secretpass · Cloud",
  description:
    "Encrypt and decrypt your secrets with your passkey on your device, store encrypted secrets in your codebase or on a our hosted service.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <title>Secretpass · Cloud</title>
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <AnalyticsProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}

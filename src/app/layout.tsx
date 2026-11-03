import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import ThemeProvider from "@/components/shared/theme-provider";
import "./globals.css";
import Script from "next/script";
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

        {/* Core Open Graph Tags for Social Sharing Cards */}
        <meta
          property="og:title"
          content="Passkey based non-custodial secret manager"
        />
        <meta
          property="og:description"
          content="Secretpass encrypts and decrypts your secrets with your passkey on your device; encrypted secrets are stored in your codebase or on a our cloud service."
        />
        <meta
          property="og:image"
          content="https://secretpass.cloud/secretpass.png"
        />
        <meta property="og:url" content="https://secretpass.cloud" />
        <meta property="og:type" content="website" />

        {/* Specific Tags for X / Twitter Preview Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Passkey based non-custodial secret manager"
        />
        <meta
          name="twitter:description"
          content="Secretpass encrypts and decrypts your secrets with your passkey on your device; encrypted secrets are stored in your codebase or on a our cloud service."
        />
        <meta
          name="twitter:image"
          content="https://secretpass.cloud/secretpass.png"
        />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <AnalyticsProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AnalyticsProvider>

        <Script id="load-sales-iq">
          {`window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}
        </Script>

        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siq39be25cb1ba4837af864485301cc78f1ad3fed6a3711ddd7b6ef45a0b16baa7d"
          defer
        ></Script>
      </body>
    </html>
  );
}

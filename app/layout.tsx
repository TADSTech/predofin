import type { Metadata } from "next";
import localFont from "next/font/local";
import { Auth0Provider } from "@auth0/nextjs-auth0/client";
import "./globals.css";

// Configure local font
const bbhBoggle = localFont({
  src: "../public/BBH_Bogle/BBHBogle-Regular.ttf",
  variable: "--font-bbh-boggle",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PredoFin",
  description: "Next Generation Risk analysis platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body
        className={`${bbhBoggle.variable} antialiased`}
      >
        <Auth0Provider>
          {children}
        </Auth0Provider>
      </body>
    </html>
  );
}

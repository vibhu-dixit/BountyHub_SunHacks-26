import "@/styles/globals.css";
import React from "react";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { DevtoolsProvider } from 'creatr-devtools';
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};
export const metadata: Metadata = {
  title: {
    default: "BountyHub",
    template: "%s | BountyHub"
  },
  description: "A marketplace for task-based work. Post bounties or hunt for opportunities that match your skills.",
  applicationName: "BountyHub",
  keywords: ["bounty", "freelance", "marketplace", "task-based", "gig economy", "fiverr alternative"],
  authors: [{
    name: "BountyHub Team"
  }],
  creator: "BountyHub Team",
  publisher: "BountyHub Team",
  icons: {
    icon: [{
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png"
    }, {
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png"
    }, {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon"
    }],
    apple: [{
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    }]
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "BountyHub"
  },
  formatDetection: {
    telephone: false
  }
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en" className={`${GeistSans.variable}`} data-unique-id="fcebde53-2ca1-4015-98ce-64eb27c3633c" data-file-name="app/layout.tsx">
      <body data-unique-id="31b0839c-b136-4bfd-b43f-27477b25c746" data-file-name="app/layout.tsx">
        <DevtoolsProvider>{children}</DevtoolsProvider>
      </body>
    </html>;
}
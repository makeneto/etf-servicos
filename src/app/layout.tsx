import type { Metadata } from "next"
import {
  Bricolage_Grotesque,
  Hanken_Grotesk,
  Geist_Mono,
} from "next/font/google"

import SiteShell from "@/components/layouts/site-shell"
import "../styles/globals.css"
import { site } from "@/constants/site"

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700"],
})

const hanken = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  verification: {
    google: site.googleSiteVerification,
  },
  applicationName: site.appName,
  title: site.pageTitle,
  description: site.companyDescription,
  keywords: site.keywords,
  authors: [{ name: site.dev, url: site.url }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.companyName,
    description: site.companyDescription,
    images: ["https://i.postimg.cc/RVYDKzd2/etf.png"],
    url: site.url,
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      className={`${bricolage.variable} ${hanken.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}

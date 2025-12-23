import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";

export const metadata: Metadata = {
  title: "IIT BHU Varanasi: E-Summit'26",
  description: "E-Summit has a range of events, competitions, panel discussions, networking opportunities for every vertical of our entrepreneurial society.",
  
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-light.ico",
        href: "/favicon-light.ico",
      },
    ],
  },
  
  openGraph: {
    title: "IIT BHU Varanasi: E-Summit'26",
    description: "E-Summit has a range of events, competitions, panel discussions, networking opportunities for every vertical of our entrepreneurial society.",
    url: "https://esummit.ecelliitbhu.com",
    siteName: "E-Cell IIT BHU",
    images: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-dark.ico",
        href: "/favicon-dark.ico",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "IIT BHU Varanasi: E-Summit'26",
    description: "E-Summit has a range of events, competitions, panel discussions, networking opportunities for every vertical of our entrepreneurial society.",
    images: ["/logos/ecell-search-logo-blackbg.jpeg"], 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
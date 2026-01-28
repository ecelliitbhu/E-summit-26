import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";

export const metadata: Metadata = {
  title: "IIT BHU Varanasi: E-Summit'26",
  description: "E-Summit is a high-energy celebration where innovation, entrepreneurship, and bold idea converge to shape the future, brought to you by the Entrepreneurship cell IIT BHU",
  
  icons: {
    icon: [
      {
        url: "/logos/ecell-search-logo-blackbg.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logos/ecell-search-logo-whitebg.jpeg",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
  
  openGraph: {
    title: "IIT BHU Varanasi: E-Summit'26",
    description: "E-Summit is a high-energy celebration where innovation, entrepreneurship, and bold idea converge to shape the future, brought to you by the Entrepreneurship cell IIT BHU",
    url: "https://esummit.ecelliitbhu.com",
    siteName: "E-Cell IIT BHU",
    images: [
      {
        url: "/logos/ecell-search-logo-blackbg.jpeg", 
        width: 1200,
        height: 630,
        alt: "E-Summit 26 Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "IIT BHU Varanasi: E-Summit'26",
    description: "E-Summit is a high-energy celebration where innovation, entrepreneurship, and bold idea converge to shape the future, brought to you by the Entrepreneurship cell IIT BHU",
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
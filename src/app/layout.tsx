import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";

const ttWellingtonsFont = localFont({
  variable: "--font-tt-wellingtons",
  src: [
    {
      path: "./fonts/TTWellingtonsTrialThin.ttf",
      weight: "100",
    },
    {
      path: "./fonts/TTWellingtonsTrialExtraLight.ttf",
      weight: "200",
    },
    {
      path: "./fonts/TTWellingtonsTrialLight.ttf",
      weight: "300",
    },
    {
      path: "./fonts/TTWellingtonsTrialRegular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/TTWellingtonsTrialMedium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/TTWellingtonsTrialSemiBold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/TTWellingtonsTrialBold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/TTWellingtonsTrialExtraBold.ttf",
      weight: "800",
    },
    {
      path: "./fonts/TTWellingtonsTrialBlack.ttf",
      weight: "900",
    },
  ],
});

export const metadata: Metadata = {
  title: "AaraTech",
  description: "",
  keywords: [
    "Aara tech",
    "3d printing",
    "printing",
    "3d model",
    "3d",
    "printing services",
    "custom 3d print",
    "3d printing services",
  ],

  metadataBase: new URL("https://aara.tech/"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
    },
  },
  classification: "technology",
  openGraph: {
    title: "Aara Tech",
    description: "",
    url: "https://aara.tech/",
    siteName: "Aara Tech",
    images: [
      {
        url: "/icons/logo1.png",  // Updated to the new logo
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Aara Tech",
    description: "",
    creator: "@aara_tech",
    images: [
      {
        url: "/icons/logo1.png",  // Updated to the new logo
      },
    ],
    card: "summary_large_image",
  },
  icons: {
    icon: "/icons/logo1.png",  // Updated to the new logo
    shortcut: "/icons/logo1.png",  // Shortcut icon
    apple: "/icons/logo1.png",  // Apple touch icon
    other: {
      rel: "apple-touch-icon",
      url: "/icons/logo1.png",  // Updated to the new logo
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ttWellingtonsFont.variable} `}>
        <Provider>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

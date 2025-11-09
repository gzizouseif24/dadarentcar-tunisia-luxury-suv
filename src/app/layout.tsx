import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingSocial } from "@/components/floating-social";
import { WhatsAppChat } from "@/components/whatsapp-chat";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "DadaRentCar - Luxury & SUV Car Rental Tunisia",
  description: "Navigate Every Adventure with Strength, Style, and Comfort. Premium SUV and luxury car rentals in Tunisia.",
  keywords: ["car rental tunisia", "luxury car rental", "suv rental", "tunisia car hire"],
  openGraph: {
    title: "DadaRentCar - Luxury & SUV Car Rental Tunisia",
    description: "Navigate Every Adventure with Strength, Style, and Comfort",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased bg-white`}>
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Navbar />
        {children}
        <Footer />
        <FloatingSocial />
        <WhatsAppChat />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
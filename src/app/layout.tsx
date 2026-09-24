import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FitlogProvider } from "@/context/FitlogProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Track your workouts with FitLog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <FitlogProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 2500,
            }}
          />
        </FitlogProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import "@fontsource/ibm-plex-mono/500.css";
import "react-toastify/dist/ReactToastify.css";
import localFont from "@next/font/local";

import ThemeProvider from "@/lib/providers/ThemeProvider";
import { FloatingNav } from "@/lib/components/layout/FloatingHeader";
import Footer from "@/lib/components/layout/Footer";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = localFont({
  src: [
    {
      path: "../../public/font/NeoGramExtended.otf",
      weight: "100",
    },
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <FloatingNav />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
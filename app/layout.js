import { Goldman } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";
import BackTopButton from "@/components/BackTopButton";
import Footer from "@/components/Footer";
import BtnCtaWp from "@/components/BtnCtaWp";

const goldman = Goldman({
  weight: '400',
  subsets: ["latin"]
});

export const metadata = {
  icons: {
    icon:"/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x64" />
      </head>
      <body className={goldman.className}>
        <NavBar />
        <BackTopButton />
        <div className="max-w-screen-2xl relative mx-auto">
        <BtnCtaWp />
          <Banner />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

import { Goldman } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";
import BackTopButton from "@/components/BackTopButton";

const goldman = Goldman({
  weight: '400',
  subsets: ["latin"]
});

export const metadata = {

};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={goldman.className}>
        <NavBar />
        <BackTopButton />
        <div className="max-w-screen-2xl relative mx-auto">
          

          <Banner />
          {children}
        </div>
      </body>
    </html>
  );
}

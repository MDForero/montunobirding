import { Goldman } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

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
        {children}
      </body>
    </html>
  );
}

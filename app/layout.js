import { Goldman } from "next/font/google";
import "./globals.css";

const goldman = Goldman({ 
  weight: '400',
  subsets: ["latin"] 
});

export const metadata = {
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={goldman.className}>{children}</body>
    </html>
  );
}

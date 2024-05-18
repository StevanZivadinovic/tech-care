import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import 'tailwindcss/tailwind.css'


export const metadata: Metadata = {
  title: "Tech care",
  description: "tech care website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#F6F7F8]">   
      <body className={``}>
        <div className="p-[18px]">
          <Navbar/>
        {children}
        </div>
        </body> 
    </html>
  );
}

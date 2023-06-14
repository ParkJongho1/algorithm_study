import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "hoJong DevBlog",
   description: "hoJong DevBlog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <div style={{ maxWidth: "70rem", margin: "0 auto" }}>
               <Header />
               {children}
            </div>
         </body>
      </html>
   );
}

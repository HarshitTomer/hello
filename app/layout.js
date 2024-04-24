import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StartCareer.dev",
  description: "Start you career journey today: where dream meets opportunities!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

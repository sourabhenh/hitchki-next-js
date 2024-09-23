// Import necessary modules and components
import type { Metadata } from "next";
import BootstrapClient from "../components/BootstrapClient";

// Import CSS files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import "./globals.css";

export const metadata: Metadata = {
  title: "Hitchki",
  description: "Global Indian Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        {children}
        {/* BootstrapClient is properly used here */}
        <BootstrapClient />
      </body>
    </html>
  );
}

import NavigationComponent from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "AdoptLove",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <NavigationComponent />
        <div className="min-h-screen bg-primary-100 flex flex-col items-center">
          <main className="w-full px-4 sm:px-6 lg:px-8 py-8">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

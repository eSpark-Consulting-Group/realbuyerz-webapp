"use client";
import { usePathname } from "next/navigation";
import DashboardHeader from "@/src/components/layouts/DashboardHeader";
import "./globals.css";
import Footer from "@/src/components/layouts/Footer";
import MainHeader from "@/src/components/layouts/MainHeader";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log(pathname);
  const isHomepage = navigation.pathname === "/";
  const isDashboard = navigation.pathnam === "/dashboard";

  return (
    <html lang="en">
      <body className="font-inter">
        {/* show main header when url is not dashboard */}
        {!isDashboard && <MainHeader />}
        {/* show dashboard header when url is dashboard */}
        {isDashboard && <DashboardHeader />}
        {/* Container Width to 90% when url is dashboard or Home */}
        {isDashboard && isHomepage && (<div className="container-full-width">{children}</div>)}
        {!isDashboard && !isHomepage && (<div className="container-width">{children}</div>)}
        <Footer />
      </body>
    </html>
  );
}

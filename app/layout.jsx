import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import "./globals.css";
import Footer from "@/src/components/layouts/Footer";
import MainHeader from "@/src/components/layouts/MainHeader";
import { Box, Container } from "@mui/system";
import { footerData } from "./constents/Constants";
import DashboardHeader from "@/src/components/layouts/DashboardHeader";

import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="font-inter">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box class="super_container">
            {/* <MainHeader /> */}
            <DashboardHeader />
            <Box class="content">{children}</Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}

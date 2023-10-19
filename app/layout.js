import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import "./globals.css";
import Footer from "@/src/components/layouts/Footer";
import MainHeader from "@/src/components/layouts/MainHeader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-inter">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div class="super_container">
            <MainHeader />
            <div class="content">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

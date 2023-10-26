'use client'
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import "./globals.css";
import Footer from "@/src/components/layouts/Footer";
import MainHeader from "@/src/components/layouts/MainHeader";
import { Box, Container } from "@mui/system";
import { footerData } from "./constents/constents";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-inter">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box class="super_container">
            <MainHeader />
            <Box class="content">{children}</Box>
            <Footer data={footerData} />
          </Box>
        </ThemeProvider>
      </body >
    </html >
  );
}

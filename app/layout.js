import "./globals.css";
import Footer from "@/src/components/layouts/Footer";
import MainHeader from "@/src/components/layouts/MainHeader";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";

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

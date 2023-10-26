import "./globals.css";
import Footer from "@/src/components/layouts/Footer";
import MainHeader from "@/src/components/layouts/MainHeader";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="font-inter">
        <div class="super_container">
          <MainHeader />
          <div class="content">{children}</div>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}

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
          <Footer />
        </div>
      </body>
    </html>
  );
}




// import "./globals.css";
// import Footer from "@/src/components/layouts/Footer";
// import MainHeader from "@/src/components/layouts/MainHeader";
// import Dashboard from "./about/page";
// import DashboardHeader from "@/src/components/layouts/DashboardHeader";

// export default function RootLayout({ children }) {

//   return (
//     <html lang="en">
//       <body className="font-inter">
//         <div class="super_container">
//           <DashboardHeader />
//           {/* <MainHeader /> */}
//           <div class="content">{children}</div>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }

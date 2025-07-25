import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata = {
  title: "Amirreza Tavassoli | Front End Developer",
  description:
    "Portfolio of Amirreza Tavassoli - Front End Developer from Shiraz, Iran",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Bootstrap CSS */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
          rel="stylesheet"
        />
        {/* FontAwesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* custom CSS */}
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/lightbox.min.css" />
      </head>
      <body className={poppins.variable}>
        {children}
        {/* Bootstrap JS */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}

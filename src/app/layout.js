import { Poppins } from "next/font/google";
import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata = {
  title: "Amirreza Tavassoli | Full Stack Developer",
  description:
    "Portfolio of Amirreza Tavassoli — Full Stack Developer building cinematic digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — kept for any legacy Bootstrap sections */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${poppins.variable} bg-[#0d0d0d] text-white antialiased`}
      >
        {/*
          LenisProvider wraps all children.
          It initialises smooth scroll and respects prefers-reduced-motion.
          The snap sections inside ProjectShowcase use their own overflow container,
          so Lenis will not interfere with the snap scroll.
        */}
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

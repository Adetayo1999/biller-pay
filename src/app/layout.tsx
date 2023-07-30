import Footer from "@/components/skeleton/footer/Footer";
import "./globals.scss";
import { Poppins, Space_Grotesk } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "react-datepicker/dist/react-datepicker.css";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "BILLER PAY",
  description:
    "Biller Pay is a cutting-edge bill payment platform that utilizes the power of cryptocurrency to streamline payments and revolutionize the way bills are paid.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${space_grotesk.variable} ${poppins.variable} `}
    >
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

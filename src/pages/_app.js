import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "tailwindcss/defaultTheme";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-popp",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${poppins.variable} font-popp bg-white dark:bg-black w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </ChakraProvider>
  );
}

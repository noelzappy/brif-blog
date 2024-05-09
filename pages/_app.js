import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AppContext } from "@/components/UseContext";
import "@/styles/bootstrap.scss";
import "@/styles/globals.scss";
import "@/styles/style.scss";
import { ThemeProvider } from "next-themes";
import { DM_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import * as gtag from "../libs/gtag";
import Head from "next/head";
import Script from "next/script";

const dm_sans = DM_Sans({
  weight: ["400", "500"],
  display: "swap",
  subsets: ["latin"],
});

export default function TushiApp({ Component, pageProps }) {
  const [searchOpen, setSearchOpen] = useState();

  const router = useRouter();

  useEffect(() => {
    import("bootstrap/js/dist/dropdown");

    // typeof document !== undefined
    //   ? require("bootstrap/dist/js/bootstrap")
    //   : null;
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <AppContext.Provider
        value={{ toggleSearch: [searchOpen, setSearchOpen] }}
      >
        <ThemeProvider defaultTheme="light" attribute="class">
          <main className={`${dm_sans.className} d-flex flex-column bg-body`}>
            <NextTopLoader />
            <Header />

            <section className="mb-auto">
              <Component {...pageProps} />
            </section>

            <Footer />
            <Toaster />
          </main>
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
}

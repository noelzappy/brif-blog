import React from "react";
import Script from "next/script";

const GoogleAnalytics = () => {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-QCFR4Y2CB1"
      />
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-QCFR4Y2CB1');`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;

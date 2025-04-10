"use client";

import siteConfig from "@/config/site.config.json";
import Head from "next/head";

const Layout = ({
  metaTitle,
  metaDescription,
  metaAuthor,
  metaKeyword,
  ogImage,
  orgTitle,

  twitter,
  twitterTitle,
  twitterImage,
  twitterDescription,

  children,
}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <title>{metaTitle}</title>

        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="keyword"
          content={`${metaKeyword}, theBrif, BrifHQ, brif Ghana, Brif, Brif GH`}
        />
        <meta name="author" content={metaAuthor} />
        <meta name="description" content={metaDescription} />

        <meta property="og:title" content={orgTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={twitterTitle || orgTitle} />
        <meta name="twitter:image" content={twitterImage || ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitter || siteConfig.twitter} />
        <meta
          name="twitter:description"
          content={twitterDescription || metaDescription}
        />

        <link
          rel="shortcut icon"
          href={siteConfig.favicon}
          type="image/x-icon"
        />
      </Head>

      {children}
    </>
  );
};
export default Layout;

Layout.defaultProps = {
  metaTitle: siteConfig.metaData.title,
  metaDescription: siteConfig.metaData.description,
  metaAuthor: siteConfig.metaData.author,
  metaKeyword: siteConfig.metaData.keyword,
  ogImage: siteConfig.metaData.ogImage,
};

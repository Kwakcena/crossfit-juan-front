import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="ko">
    <Head>
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="icon" href="favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/icons/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/icons/favicon-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="128x128"
        href="/images/icons/icon-128x128.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/images/icons/icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/icons/icon-180x180.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/images/icons/icon-192x192.png"
      />
      <meta name="theme-color" content="#ffffff" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />

      <link rel="manifest" href="/manifest.json" />

      <title>Crossfit juan reservation</title>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;

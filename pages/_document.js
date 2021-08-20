import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          {/* TODO: Add favicons here from generator */}
          {/* Yandex */}
          <meta content="#" name="yandex-verification" />
          {/* TODO: Google Search Console */}
          {/* <meta
            name="google-site-verification"
            content="#"
          /> */}
          {/* TODO: Web Monetization */}
          {/* <meta name="monetization" content="#" /> */}
        </Head>
        <body className="bg-white dark:bg-black text-white dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

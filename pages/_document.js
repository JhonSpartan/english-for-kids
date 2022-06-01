import Document, { Html, Head, Main, NextScript } from 'next/document';
 
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@700&display=swap"
            // href="https://fonts.googleapis.com/css2?family=Alegreya&family=Bona+Nova&family=Fira+Mono:wght@700&family=Ledger&display=swap"
            rel="stylesheet"
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdn.syncfusion.com/ej2/material.css"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
 
export default MyDocument;
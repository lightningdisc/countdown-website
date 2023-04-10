import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="apple-mobile-web-app-status-bar" content="#7649F9" />
          <meta name="theme-color" content="#7649F9" />
          <link rel="apple-touch-icon" href="favicon.ico" />
          <meta name="title" content="Lightning - Coming Soon" />
          <meta
            name="description"
            content="Take your Discord Server to the next level with Lightning"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://lightning-bot.xyz/" />
          <meta property="og:title" content="Lightning - Coming Soon" />
          <meta
            property="og:description"
            content="Take your Discord Server to the next level with Lightning"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta property="og:type" content="website" />
          <meta property="og:color" content="#7649F9" />
          <link rel="canonical" href="https://lightning-bot.xyz/" />
          <link rel="icon" type="image/x-icon" href="favicon.ico" />
          <noscript>Please enable JavaScript to view the site</noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

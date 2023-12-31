import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocumnet extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="overlay"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocumnet;

import Document, { Html, Head, Main, NextScript } from 'next/document';

import { CssBaseline, GlobalStyles } from '@mui/material';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <CssBaseline />
          <GlobalStyles
            styles={{
              body: { backgroundColor: '#f1f1f1' },
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

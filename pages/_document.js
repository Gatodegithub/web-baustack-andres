import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="Baustack" />
          <meta property="og:site_name" content="Baustack" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Crea tus propias aplicaciones con tablas inteligentes, con Baustack"
          />
          <meta
            name="keywords"
            content="tablas inteligentes en la nube, crm, gestion de causas, contratos por vencer control de polizas, planificacion de eventos, gestion de proyectos"
          />
          <meta property="og:title" content="tablas inteligentes en la nube" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://baustack.cl/" />
          <meta
            property="og:description"
            content="Crea tus propias aplicaciones con tablas inteligentes, con Baustack"
          />
          {/* <meta property="og:image" content={}/> */}
          
          {/* <meta property="twitter:card" content="summary" /> */}
          {/* <meta property="twitter:site" content="@name" /> */}
          {/* <meta property="twitter:title" content="Baustack" /> */}
          {/* <meta property="twitter:description" content="" /> */}
          {/* <meta property="twitter:image" content="path..." /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

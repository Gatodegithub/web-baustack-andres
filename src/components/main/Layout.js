import React from "react";
import { Helmet } from "react-helmet";
import smoothScroll from "smooth-scroll";
import "./Globalstyles.css";

export default function Layout(props) {
  const title = props.title || 'Baustack';
  const metaDescription = props.metaDescription || 'Baustack';

  // Es una verificación idiomática para ver si el script se está ejecutando en una página web dentro de un navegador web o no.
  if (typeof window !== 'undefined') smoothScroll('a[href*="#"]');

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metaDescription} />
      </Helmet>
      <main>
        {props.children}
      </main>
    </>
  );
}
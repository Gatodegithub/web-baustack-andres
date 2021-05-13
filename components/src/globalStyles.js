import styled, { createGlobalStyle } from 'styled-components';

// min-width: de x pixeles HACIA ARRIBA
// max-width: de x pixeles HACIA ABAJO
export const Device = {
  mobile: `(min-width: 576px)`,
  tablet: `(min-width: 768px)`,
  medium: `(min-width: 992px)`,
  desktop: `(min-width: 1281px)`,
};

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media ${Device.mobile} {
    max-width: 540px;
  }
  @media ${Device.tablet} {
    max-width: 720px;
  }
  @media ${Device.medium} {
    max-width: 960px;
  }
  @media ${Device.desktop} {
    max-width: 1200px;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  outline: none;
  border: none;
  color: ${props => props.theme.colorWhite};
  width: 253px;
  height: 60px;
  border-radius: 30px;
  background-color: ${props => props.theme.colorRed};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: url('/Flask.svg');
    margin-right: 10px;
  }
`;

export const RectangularBox = styled.div`
  background-color: ${props => props.theme.colorPrimary};
  color: ${props => props.theme.colorWhite};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 20px 0px;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  min-height: 50px;
  font-weight: bold;
  font-size: 18px;
  width: max-content;
  z-index: 200;

  & svg {
    min-width: 72px;
    min-height: 72px;
    margin-left: 15px;
  }

  & p {
    margin: 0 15px 0 35px;
  }
`;

const GlobalStyle = createGlobalStyle`
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
* {
  font-family: 'Poppins', sans-serif;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%none;
}

body {
  margin: 0;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0; 
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px; 
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

ul, li {
  margin: 0;
}
`;

export default GlobalStyle;
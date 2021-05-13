import * as React from "react";
import { ThemeProvider } from "styled-components";
import {Header} from "../../components";
import {SectionFooter} from "../../components";
import {SectionOne} from "../../components";
import {SectionThree} from "../../components";
import {SectionTwo} from "../../components";
import GlobalStyle from "../../components/src/globalStyles";
import theme from "../../components/src/Theme";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFooter />
  </ThemeProvider>
);

export default IndexPage;

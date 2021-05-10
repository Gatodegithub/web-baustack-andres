import GlobalStyle from '../src/globalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from '../src/Theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
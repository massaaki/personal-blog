import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../../lib/gtag';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;

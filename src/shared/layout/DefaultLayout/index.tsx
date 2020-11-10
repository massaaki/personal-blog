import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';

import { Container } from './styles';

const DefaultLayout = ({ children, pageTitle, ...props }) => {
  return (
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>

      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default DefaultLayout;

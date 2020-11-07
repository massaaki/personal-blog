import Head from 'next/head';
import { Container } from './styles';

const DefaultLayout = ({ children, pageTitle, ...props }) => {
  return (
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>

      <main>{children}</main>

      <footer>Footer...</footer>
    </Container>
  );
};

export default DefaultLayout;

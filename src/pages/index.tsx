import Head from 'next/head';
import devIcon from '../assets/dev.svg';
import { Container } from '../styles/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Boilerplate - ReactJs + Next</title>
      </Head>

      <main>
        <h1>Boilerplate</h1>
        <h2>React.js + Next.js</h2>
        <img src={devIcon} alt="dev icon" />
      </main>
    </Container>
  );
};

export default Home;

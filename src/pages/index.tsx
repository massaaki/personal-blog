import devIcon from '../assets/dev.svg';
import Layout from '../components/layout';
import { Logo } from '../styles/Home';

const Home: React.FC = () => {
  return (
    <Layout pageTitle="Boilerplate - ReactJs + Next">
      <div className="content">
        <h1>Boilerplate</h1>
        <h2>React.js + Next.js</h2>
        <Logo src={devIcon} alt="dev icon" />

        <main>Posts here...</main>
      </div>
    </Layout>
  );
};

export default Home;

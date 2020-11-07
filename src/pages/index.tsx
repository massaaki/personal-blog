import devIcon from '../assets/dev.svg';
import DefaultLayout from '../shared/layout/DefaultLayout';
import { Logo } from '../styles/Home';

const Home: React.FC = () => {
  return (
    <DefaultLayout pageTitle="Boilerplate - ReactJs + Next">
      <div className="content">
        <h1>Boilerplate</h1>
        <h2>React.js + Next.js</h2>
        <Logo src={devIcon} alt="dev icon" />

        <main>Posts here...</main>
      </div>
    </DefaultLayout>
  );
};

export default Home;

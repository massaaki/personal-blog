import DefaultLayout from '../../shared/layout/DefaultLayout';
import HeaderSection from 'shared/components/HeaderSection';

const aboutPage = () => {
  return (
    <DefaultLayout pageTitle="About page">
      <div className="container">
        <HeaderSection
          topText="Hello, I'm"
          mainText="Maurício Massaaki"
          bottomText="Entrepeneur and passionate developer"
        />
        <h1>About page</h1>
      </div>
    </DefaultLayout>
  );
};

export default aboutPage;

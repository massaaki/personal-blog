import DefaultLayout from '../../shared/layout/DefaultLayout';
import HeaderSection from 'shared/components/HeaderSection';

const aboutPage = () => {
  return (
    <DefaultLayout pageTitle="About page">
      <div className="main">
        <HeaderSection
          topText="Hello, I'm"
          mainText="Maurício Massaaki"
          bottomText="Entrepeneur and passionate developer"
        />
      </div>
    </DefaultLayout>
  );
};

export default aboutPage;

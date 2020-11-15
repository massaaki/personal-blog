import DefaultLayout from 'shared/layout/DefaultLayout';
import HeaderSection from 'shared/components/HeaderSection';

const ImmersionPage = () => {
  return (
    <DefaultLayout pageTitle="Series - Real time Learning">
      <div className="main">
        <HeaderSection
          topText="Algumas coisas que estou me aprofundando"
          mainText="Imersão"
          bottomText="Machine Learn, Architecture & Development"
        />
        <p>Em andamento...</p>
      </div>
    </DefaultLayout>
  );
};

export default ImmersionPage;

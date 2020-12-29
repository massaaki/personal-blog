import DefaultLayout from 'shared/layout/DefaultLayout';
import HeaderSection from 'shared/components/HeaderSection';

const ImmersionPage = () => {
  return (
    <DefaultLayout pageTitle="Series - Real time Learning">
      <div className="main">
        <HeaderSection
          topText=""
          mainText="Projetos"
          bottomText="Desenvolvimento Front-end, Back-end, Infraestrutura e Data Science"
        />
        <p>Em andamento...</p>
      </div>
    </DefaultLayout>
  );
};

export default ImmersionPage;

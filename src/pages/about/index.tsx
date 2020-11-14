import matter from 'gray-matter';

import DefaultLayout from '../../shared/layout/DefaultLayout';
import HeaderSection from 'shared/components/HeaderSection';
import Profile from 'shared/components/Profile';
import Stack from 'models/enums/Stack';

interface IAbout {
  pageTitle?: string;
  topText?: string;
  mainText?: string;
  bottomText?: string;
  github?: string;
  stacks?: Stack[];
}

interface IRequest {
  aboutData: IAbout;
  markdownBody: string;
}
const aboutPage = ({ aboutData, markdownBody }: IRequest) => {
  return (
    <DefaultLayout pageTitle={aboutData?.pageTitle}>
      <div className="main">
        <HeaderSection
          topText={aboutData?.topText}
          mainText={aboutData?.mainText}
          bottomText={aboutData?.bottomText}
          github={aboutData?.github}
        />

        <Profile stacks={aboutData?.stacks}>{markdownBody}</Profile>
      </div>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const aboutMd = await import('contents/pages/about.md');
  const { data: aboutData, content: markdownBody } = matter(aboutMd.default);

  return {
    props: {
      aboutData,
      markdownBody
    }
  };
}

export default aboutPage;

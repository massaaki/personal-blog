import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import { Header, Content, Description } from './styles';

import IHeader from 'models/interfaces/IHeader';

const HeaderSection = ({ topText, mainText, bottomText, github }: IHeader) => {
  return (
    <Header>
      {/* <BackgroundAbstract /> */}
      <Content>
        <p>{topText}</p>
        <h1>{mainText}</h1>
        <Description>{bottomText}</Description>
        {github && (
          <ul>
            <li>
              <Link href={github}>
                <a target="_blank">
                  <FaGithub />
                </a>
              </Link>
            </li>
          </ul>
        )}
      </Content>
    </Header>
  );
};

export default HeaderSection;

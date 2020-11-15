import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import IHeader from 'models/interfaces/IHeader';

import { Header, Content, Description } from './styles';

const HeaderSection = ({
  topText,
  mainText,
  bottomText,
  github,
  BackgroundImage
}: IHeader) => {
  return (
    <Header>
      {BackgroundImage && (
        <div className="codeBlock">
          <BackgroundImage />
        </div>
      )}

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

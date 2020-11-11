import { Header, Content, Description } from './styles';

import IHeader from 'models/interfaces/IHeader';
import BackgroundAbstract from 'shared/icons/BackgroundAbstract';
const HeaderSection = ({ topText, mainText, bottomText }: IHeader) => {
  return (
    <Header>
      <BackgroundAbstract />
      <Content>
        <p>{topText}</p>
        <h1>{mainText}</h1>
        <Description>{bottomText}</Description>
      </Content>
    </Header>
  );
};

export default HeaderSection;

import { Header, Content, Description } from './styles';

import IHeader from 'models/interfaces/IHeader';

const HeaderSection = ({ topText, mainText, bottomText }: IHeader) => {
  return (
    <Header>
      <Content>
        <p>{topText}</p>
        <h1>{mainText}</h1>
        <Description>{bottomText}</Description>
      </Content>
    </Header>
  );
};

export default HeaderSection;

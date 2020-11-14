import {
  SiNextDotJs,
  SiReact,
  SiNodeDotJs,
  SiLaravel,
  SiVueDotJs,
  SiFirebase,
  SiMysql,
  SiDotNet
} from 'react-icons/si';

import Stack from 'models/enums/Stack';

interface IRequest {
  name: Stack;
}

const StackIconSelector = ({ name }: IRequest) => {
  const stackIcon = {
    [Stack.reactjs]: <SiReact />,
    [Stack.nextjs]: <SiNextDotJs />,
    [Stack.nodejs]: <SiNodeDotJs />,
    [Stack.laravel]: <SiLaravel />,
    [Stack.vuejs]: <SiVueDotJs />,
    [Stack.firebase]: <SiFirebase />,
    [Stack.sql]: <SiMysql />,
    [Stack.dotnet]: <SiDotNet />
  };

  return stackIcon[name];
};

export default StackIconSelector;

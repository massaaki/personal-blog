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

import Stacks from 'models/enums/Stack';

interface IRequest {
  name: string;
}

const StackIconSelector = ({ name }: IRequest) => {
  const stackIcon = {
    [Stacks.reactjs]: <SiReact />,
    [Stacks.nextjs]: <SiNextDotJs />,
    [Stacks.nodejs]: <SiNodeDotJs />,
    [Stacks.laravel]: <SiLaravel />,
    [Stacks.vuejs]: <SiVueDotJs />,
    [Stacks.firebase]: <SiFirebase />,
    [Stacks.sql]: <SiMysql />,
    [Stacks.dotnet]: <SiDotNet />
  };

  return stackIcon[name];
};

export default StackIconSelector;

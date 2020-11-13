import {
  SiNextDotJs,
  SiReact,
  SiNodeDotJs,
  SiLaravel,
  SiVueDotJs
} from 'react-icons/si';

enum StackName {
  reactjs = 'reactjs',
  nextjs = 'nextjs',
  nodejs = 'nodejs',
  laravel = 'laravel',
  vuejs = 'vuejs'
}

interface IRequest {
  name: string;
}

const StackIconSelector = ({ name }: IRequest) => {
  const stackIcon = {
    [StackName.reactjs]: <SiReact />,
    [StackName.nextjs]: <SiNextDotJs />,
    [StackName.nodejs]: <SiNodeDotJs />,
    [StackName.laravel]: <SiLaravel />,
    [StackName.vuejs]: <SiVueDotJs />
  };

  return stackIcon[name];
};

export default StackIconSelector;

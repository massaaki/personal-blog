import Level from '../enums/Level';
import Stack from '../enums/Stack';

interface IFrontMatter {
  title: string;
  author: string;
  publishDate?: Date;
  minToRead?: number;
  thumbnail?: string;
  level?: Level;
  stacks?: Stack[];
}

export default IFrontMatter;

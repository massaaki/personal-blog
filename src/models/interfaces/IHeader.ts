interface IHeader {
  topText?: string;
  mainText: string;
  bottomText: string;
  github?: string;
  BackgroundImage?: () => JSX.Element;
}

export default IHeader;

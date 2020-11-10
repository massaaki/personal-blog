import Link from 'next/link';

import { Menu, Content } from './styles';

const Header = () => {
  return (
    <Menu>
      <Content>
        <Link href="/">
          <a>LOGO</a>
        </Link>
        <nav className="nav">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About me</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Content>
    </Menu>
  );
};

export default Header;

import Link from 'next/link';

import PortfolioLogo from 'shared/icons/PortfolioLogo';
import { Menu, Content } from './styles';

const Header = () => {
  return (
    <Menu>
      <Content>
        <Link href="/">
          <a>
            <PortfolioLogo />
          </a>
        </Link>
        <nav className="nav">
          <ul>
            <li>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>Imersões</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Sobre mim</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Content>
    </Menu>
  );
};

export default Header;

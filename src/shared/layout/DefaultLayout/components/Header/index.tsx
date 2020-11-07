import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link href="/">
            <a>Home</a>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;

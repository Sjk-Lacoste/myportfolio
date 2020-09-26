import Link from 'next/link';

const Navbar = () => {
    return (
      <>
        <div className="nav-wrapper">
          <div className="grad-bar"></div>
          <nav className="navbar">
            <div className="container">
              <img className="logo" src="/logo.png" alt="Tshepo Mohlatlole" />

              <div className="menu-toggle">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>

              <ul className="nav no-search">
                <li className="nav-item">
                  <Link href="/">Home</Link>
                </li>
                {/* <li className="nav-item">
                  <Link href="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link href="/services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact">Contact</Link>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </>
    );
}

export default Navbar;
import { useState } from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import Image from 'next/image';
import Logo from '../../public/home.svg';
import ResponsiveContainer from '../ResponsiveContainer';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <ResponsiveContainer>
        <div className={styles.containerMenu}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={Logo} alt="Logo" width={40} height={40} />
            </Link>
          </div>

          <nav className={styles.nav}>
            <ul>
              <li>
                <Link href="/sobre-nos">Sobre nós</Link>
              </li>
              <li>
                <Link href="mailto:suportepagina10@gmail.com">Contato</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.hamburger} onClick={toggleMobileMenu}>
            <span className={isMobileMenuOpen ? styles.open : ''}></span>
            <span className={isMobileMenuOpen ? styles.open : ''}></span>
            <span className={isMobileMenuOpen ? styles.open : ''}></span>
          </div>

          <div
            className={`${styles.mobileMenu} ${
              isMobileMenuOpen ? styles.open : ''
            }`}
          >
            <ul>
              <li>
                <Link href="/" onClick={toggleMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={toggleMobileMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={toggleMobileMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={toggleMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </ResponsiveContainer>
    </header>
  );
};

export default Header;

import { useState } from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={150} height={50} />
          </Link>
        </div>

        {/* Menu for desktop */}
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger menu button (visible only on mobile/tablet) */}
        <div className={styles.hamburger} onClick={toggleMobileMenu}>
          <span className={isMobileMenuOpen ? styles.open : ''}></span>
          <span className={isMobileMenuOpen ? styles.open : ''}></span>
          <span className={isMobileMenuOpen ? styles.open : ''}></span>
        </div>

        {/* Mobile Menu */}
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
    </header>
  );
};

export default Header;

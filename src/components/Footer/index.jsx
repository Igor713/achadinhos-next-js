import Link from 'next/link';
import Image from 'next/image';
import ResponsiveContainer from '@/components/ResponsiveContainer';

import styles from './index.module.scss';
import Logo from '../../public/homeDark.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ResponsiveContainer>
        <div className={styles.containerMenu}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={Logo} alt="Logo" width={40} height={40} />
            </Link>
          </div>
          <ul className={styles.menu}>
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
        </div>
      </ResponsiveContainer>
    </footer>
  );
};

export default Footer;

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
              <Link href="/politica-de-privacidade">Política Privacidade</Link>
            </li>
            <li>
              <Link href="/termos-e-condicoes">Termos e condições</Link>
            </li>
            <li>
              <Link href="/sobre-nos">Sobre nós</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>
      </ResponsiveContainer>
    </footer>
  );
};

export default Footer;

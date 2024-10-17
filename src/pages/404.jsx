import Link from 'next/link';

import styles from '../styles/Custom404.module.scss';

export default function Custom404() {
  return (
    <div className={styles.custom404}>
      <h1>404 - Página não encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <Link href="/">
        <p>Voltar para a Home</p>
      </Link>
    </div>
  );
}

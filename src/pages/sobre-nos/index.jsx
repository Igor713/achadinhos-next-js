import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ResponsiveContainer from '@/components/ResponsiveContainer';

import styles from './index.module.scss';

export default function AboutUs() {
  return (
    <>
      <div className={styles.aboutUs}>
        <h2>Sobre Nós</h2>
        <p>
          Bem-vindo ao nosso projeto, uma plataforma dedicada a conectar você
          aos melhores produtos disponíveis em grandes e-commerces como Shopee,
          Amazon, Mercado Livre, entre outros. Nosso objetivo é facilitar a sua
          busca por itens de qualidade, reunindo em um só lugar uma curadoria de
          produtos acessíveis e de confiança.
        </p>

        <p>
          Este site começou como um projeto de estudo, onde pude aplicar e
          expandir meus conhecimentos em desenvolvimento web. Meu nome é Igor, e
          sou o desenvolvedor responsável por esse espaço. Minha paixão por
          tecnologia e desenvolvimento de software me levou a criar essa página,
          utilizando ferramentas como Next.js e MongoDB para construir um
          ambiente funcional e otimizado.
        </p>
      </div>
    </>
  );
}

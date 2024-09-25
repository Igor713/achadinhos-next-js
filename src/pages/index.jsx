import { useEffect, useRef } from 'react';
import styles from './Home.module.scss';

export default function Home() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        ref={(el) => (cardsRef.current[0] = el)}
        className={`${styles.card} ${styles.visible}`}
      >
        Card 1
      </div>
      <div
        ref={(el) => (cardsRef.current[1] = el)}
        className={styles.cardSmall}
      >
        Card 2
      </div>
      <div
        ref={(el) => (cardsRef.current[2] = el)}
        className={styles.cardSmall}
      >
        Card 3
      </div>
    </div>
  );
}

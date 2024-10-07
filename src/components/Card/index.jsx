import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.scss';

const Card = ({ name, imageLink, description, tagName, ecommerce }) => {
  const tagColors = {
    Casa: '#bc6c25',
    Limpeza: '#ff686b',
    Cozinha: '#ff69eb',
  };

  const tagColor = tagColors[tagName] || 'gray';

  return (
    <Link
      className={styles.cardLink}
      href={'https://google.com.br'}
      target="_blank"
    >
      <div className={styles.card}>
        <div className={styles.tagName} style={{ backgroundColor: tagColor }}>
          {tagName}
        </div>
        <div className={styles.cardImageWrapper}>
          <Image
            src={imageLink}
            className={styles.cardImage}
            alt={name}
            width={500}
            height={200}
          />
        </div>
        <div className={styles.cardContent}>
          <h3>{name}</h3>
          <p>
            {description.length > 100
              ? `${description.slice(0, 100)}...`
              : description}
          </p>
          <div className={styles.cardFooter}>
            <p className={styles.tagEcommerce}>{ecommerce}</p>
            <button className={styles.linkButton}>Clique e confira</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

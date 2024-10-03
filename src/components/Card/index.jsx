import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

const Card = ({ name, imageLink, description, tagName }) => {
  return (
    <div className={styles.card}>
      <div className={styles.tagName}>{tagName}</div>
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
        <p>{description}</p>
        <button>Clique e confira</button>
      </div>
    </div>
  );
};

export default Card;

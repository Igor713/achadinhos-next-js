import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

const Card = ({ name, imageLink, description }) => {
  return (
    <div className={styles.card}>
      <Image src={imageLink} className={styles.cardImage} alt={name} />
      <div className={styles.cardContent}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;

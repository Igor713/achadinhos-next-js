import React from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.scss';

const Card = ({
  _id,
  name,
  imageLink,
  description,
  tagName,
  ecommerce,
  productLink,
}) => {
  const handleProductClick = async () => {
    try {
      await axios.post('/api/clickProduct', { productId: _id });
    } catch (e) {
      console.log('Erro ao registrar clique', e);
    }
  };

  const tagColors = {
    Casa: '#D2691E',
    Limpeza: '#48C9B0',
    Cozinha: '#F39C12',
    Pet_food: '#8E44AD',
    Saúde: '#2ECC71',
    Bebida: '#2980B9',
    Moda: '#E74C3C',
    Tec: '#3498DB',
  };

  const tagColor = tagColors[tagName] || 'gray';

  if (tagName.includes('_')) {
    tagName = tagName.replace('_', ' ');
  }

  return (
    <Link
      className={styles.cardLink}
      href={productLink}
      target="_blank"
      onClick={handleProductClick}
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
              ? `${description.slice(0, 70)}...`
              : description}
          </p>
        </div>
        <div className={styles.cardFooter}>
          <p className={styles.tagEcommerce}>{ecommerce}</p>
          <button className={styles.linkButton}>Confira</button>
        </div>
      </div>
    </Link>
  );
};

export default Card;

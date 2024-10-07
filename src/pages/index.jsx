import { useState } from 'react';
import Card from '@/components/Card';
import Header from '@/components/Header';
import ResponsiveContainer from '@/components/ResponsiveContainer';
import axios from 'axios';

import styles from './Home.module.scss';

export async function getServerSideProps() {
  try {
    const res = await axios.get('http://localhost:3000/api/products');
    const productsList = res.data;

    return {
      props: {
        productsList,
      },
    };
  } catch (e) {
    console.error('Erro ao buscar produtos:', e);
    return {
      props: {
        productsList: [],
      },
    };
  }
}

const Home = ({ productsList }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = searchTerm
    ? productsList.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : productsList;

  return (
    <>
      <Header />
      <ResponsiveContainer>
        <div className={styles.searchInput}>
          <input
            type="text"
            placeholder="Buscar produtos"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className={styles.lobby}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Card key={product._id} {...product} />
            ))
          ) : (
            <p>Não há produtos disponíveis no momento.</p>
          )}
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default Home;

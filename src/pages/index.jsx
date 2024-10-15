import { useState } from 'react';
import Card from '@/components/Card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResponsiveContainer from '@/components/ResponsiveContainer';
import axios from 'axios';

import styles from './Home.module.scss';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export async function getServerSideProps() {
  try {
    const res = await axios.get('http://localhost:3000/api/products');
    const productsList = res.data;

    const mostClickedProducts = productsList
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 5);

    return {
      props: {
        productsList,
        mostClickedProducts,
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

const Home = ({ productsList, mostClickedProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = productsList.filter((product) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.tagName.toLowerCase().includes(searchLower)
    );
  });

  return (
    <>
      <div className={styles.searchInput}>
        <div className={styles.searchTitle}>Procure produtos</div>
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

      <div className={styles.carousel}>
        <h1 className={styles.carouselTitle}>
          Confira os produtos mais clicados
        </h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mostClickedProductsCarousel"
          breakpoints={{
            1194: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
        >
          {mostClickedProducts.length > 0 ? (
            mostClickedProducts.map((product) => (
              <SwiperSlide key={product._id}>
                <Card key={product._id} {...product} />
              </SwiperSlide>
            ))
          ) : (
            <p>Não há produtos disponíveis no momento.</p>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default Home;

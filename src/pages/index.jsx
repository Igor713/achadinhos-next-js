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

        <div>
          <h1>Confira os produtos mais clicados</h1>
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
            className="carousel"
            breakpoints={{
              // Quando a largura da viewport for >= 320px (mobile)
              320: {
                slidesPerView: 2, // 1 slide visível
                spaceBetween: 10, // Espaço entre os slides
              },
              // Quando a largura da viewport for >= 768px (tablet)
              768: {
                slidesPerView: 2, // 2 slides visíveis
                spaceBetween: 20,
              },
              // Quando a largura da viewport for >= 1024px (desktop)
              1024: {
                slidesPerView: 3, // 3 slides visíveis
                spaceBetween: 30,
              },
            }}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <SwiperSlide key={product._id}>
                  <Card key={product._id} {...product} />
                </SwiperSlide>
              ))
            ) : (
              <p>Não há produtos disponíveis no momento.</p>
            )}
          </Swiper>
        </div>
      </ResponsiveContainer>
      <Footer />
    </>
  );
};

export default Home;

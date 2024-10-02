import Card from '@/components/Card';
import ResponsiveContainer from '@/components/ResponsiveContainer';
import axios from 'axios';

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
  return (
    <ResponsiveContainer>
      {productsList.length > 0 ? (
        (console.log(productsList.length),
        productsList.map((product) => <Card key={product._id} {...product} />))
      ) : (
        <p>Não há produtos disponíveis no momento.</p>
      )}
    </ResponsiveContainer>
  );
};

export default Home;

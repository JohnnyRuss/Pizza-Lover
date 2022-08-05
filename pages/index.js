import axios from 'axios';
import { Featured, Products } from '../components';
import { Heading } from '../components/Layouts';

export default function Home({ productsList }) {
  return (
    <>
      <Heading title='Pizza Lover' />
      <Featured />
      <Products data={productsList} />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const { data } = await axios.get('http://localhost:3000/api/products');
  return {
    props: {
      productsList: data?.data,
    },
  };
};

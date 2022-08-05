import { Product as ProductEl } from '../../components';
import { Heading } from '../../components/Layouts';
import axios from 'axios';

function Product({ data }) {
  return (
    <>
      <Heading title={data?.title} />
      <ProductEl data={data} />
    </>
  );
}

export default Product;

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params;

  const { data } = await axios.get(`http://localhost:3000/api/products/${id}`);

  return {
    props: {
      data: data?.data,
    },
  };
};

import { Cart as ProductCart } from '../components';
import { Heading } from '../components/Layouts';

function Cart() {
  return (
    <>
      <Heading title='Pizza Lover' />
      <ProductCart />;
    </>
  );
}

export default Cart;

import { useSelector } from 'react-redux';

import styles from './components/cart.module.scss';
import ProductTable from './components/ProductTable';
import { CartInfo } from '../Layouts';

function Cart() {
  const cart = useSelector(({ cart }) => cart);

  return (
    <div className={styles.cart}>
      <ProductTable products={cart.products}/>
      <CartInfo className={styles.info} total={cart.total}/>
    </div>
  );
}

export default Cart;

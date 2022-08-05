import styles from './components/cart.module.scss';
import ProductTable from './components/ProductTable';
import { CartInfo } from '../Layouts';

function Cart() {
  return (
    <div className={styles.cart}>
      <ProductTable />
      <CartInfo className={styles.info} />
    </div>
  );
}

export default Cart;

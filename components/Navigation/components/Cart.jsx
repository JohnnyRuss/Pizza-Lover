import { Img, Link } from '../../Interface';
import styles from './cart.module.scss';

function Cart() {
  return (
    <figure className={styles.cart}>
      <Link path='/cart'>
        <Img src='/img/cart.png' alt='shopping cart' className={styles.cartIcon} />
        <span className={styles.contentAmount}>2</span>
      </Link>
    </figure>
  );
}

export default Cart;

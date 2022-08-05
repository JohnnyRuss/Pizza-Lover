import { useSelector } from 'react-redux';
import { Img, Link } from '../../Interface';
import styles from './cart.module.scss';

function Cart() {
  const quantity = useSelector(({ cart }) => cart.quantity);
  return (
    <figure className={styles.cart}>
      <Link path='/cart'>
        <Img src='/img/cart.png' alt='shopping cart' className={styles.cartIcon} />
        <span className={styles.contentAmount}>{quantity}</span>
      </Link>
    </figure>
  );
}

export default Cart;

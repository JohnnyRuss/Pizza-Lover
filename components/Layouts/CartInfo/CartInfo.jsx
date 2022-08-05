import styles from './cartInfo.module.scss';
import { BTN, Link } from '../../Interface';

function CartInfo({ className }) {
  return (
    <div className={`${styles.cartInfo} ${className}`}>
      <h5 className={styles.title}>cart total</h5>
      <p className={styles.detail}>
        <span>subtotal:</span>
        <span className={styles.value}>$79:60</span>
      </p>
      <p className={styles.detail}>
        <span>discount:</span>
        <span className={styles.value}>$0.00</span>
      </p>
      <p className={styles.detail}>
        <span>total:</span>
        <span className={styles.value}>$79:60</span>
      </p>
      <BTN>submit</BTN>
    </div>
  );
}

export default CartInfo;

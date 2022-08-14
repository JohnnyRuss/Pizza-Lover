import styles from './quantityForm.module.scss';
import { BTN } from '../../Interface';

function QuantityForm({ handlePriceByQuantity, handleAddToCart }) {
  return (
    <form className={styles.quantityForm}>
      <input
        type='number'
        defaultValue='1'
        onChange={(e) => handlePriceByQuantity(e.target.value)}
      />
      <BTN className={styles.btn} onClick={handleAddToCart}>
        add to cart
      </BTN>
    </form>
  );
}

export default QuantityForm;

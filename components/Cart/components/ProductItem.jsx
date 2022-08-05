import styles from './productItem.module.scss';
import { Img } from '../../Interface';

function ProductItem() {
  return (
    <tr className={styles.row}>
      <td>
        <Img src='/img/pizza.png' className={styles.figure} />
      </td>
      <td className={styles.productTitle}>coralzo</td>
      <td>double ingredients, spicy sauce</td>
      <td>$19.90</td>
      <td>2</td>
      <td className={styles.price}>39.80</td>
    </tr>
  );
}

export default ProductItem;

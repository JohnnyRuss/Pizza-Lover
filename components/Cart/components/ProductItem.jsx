import styles from './productItem.module.scss';
import { Img } from '../../Interface';

function ProductItem({ product }) {
  return (
    <tbody>
      <tr className={styles.row}>
        <td>
          <Img src='/img/pizza.png' className={styles.figure} />
        </td>
        <td className={styles.productTitle}>{product.productName}</td>
        <td>
          {product?.extras?.map((ext) => (
            <span key={ext._id}>{ext.text}</span>
          ))}
        </td>
        <td>{product.defaultPrice}</td>
        <td>{product.quantity}</td>
        <td className={styles.price}>{product.price * product.quantity}</td>
      </tr>
    </tbody>
  );
}

export default ProductItem;

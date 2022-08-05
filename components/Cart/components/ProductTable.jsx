import styles from './productTable.module.scss';
import ProductItem from './ProductItem';

function ProductTable() {
  return (
    <div className={styles.tableBox}>
      <table className={styles.productTable}>
        <tr>
          <th>product</th>
          <th>name</th>
          <th>extras</th>
          <th>price</th>
          <th>quantity</th>
          <th>total</th>
        </tr>
        <ProductItem />
        <ProductItem />
      </table>
    </div>
  );
}

export default ProductTable;

import styles from './productTable.module.scss';
import ProductItem from './ProductItem';

function ProductTable({ products }) {
  return (
    <div className={styles.tableBox}>
      <table className={styles.productTable}>
        <tbody>
          <tr>
            <th>product</th>
            <th>name</th>
            <th>extras</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
          </tr>
        </tbody>
        {products?.map((product) => (
          <ProductItem product={product} key={product.productId} />
        ))}
      </table>
    </div>
  );
}

export default ProductTable;

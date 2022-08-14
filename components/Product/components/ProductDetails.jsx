import styles from './productDetails.module.scss';

function ProductDetails({ title, price, description }) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>${price}</p>
      <p className={styles.description}>{description}</p>
    </>
  );
}

export default ProductDetails;

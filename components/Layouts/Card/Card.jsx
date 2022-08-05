import styles from './card.module.scss';
import { Img } from '../../Interface';
import Link from 'next/link';

function Card({ data }) {
  return (
    <Link href={`/product/${data?._id}`}>
      <a>
        <div className={styles.card}>
          <Img src={data?.image} className={styles.figure} />
          <div className={styles.productInfo}>
            <h4 className={styles.productTitle}>{data?.title}</h4>
            <span className={styles.productPrice}>${data?.prices.small}</span>
            <p className={styles.productDetails}>{data?.description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Card;

import { useState } from 'react';
import styles from './components/product.module.scss';
import { Img, BTN } from '../Interface';

function Product({ data }) {
  const [size, setSize] = useState('small');

  return (
    <main className={styles.product}>
      <Img src='/img/pizza.png' className={styles.figure} />
      <div className={styles.productDetails}>
        <h2 className={styles.title}>{data?.title}</h2>
        <p className={styles.price}>${data?.prices?.[size]}</p>
        <p className={styles.description}>{data?.description}</p>
        <p>choose the size</p>
        <form className={styles.sizesForm}>
          <label className={styles.size} htmlFor='small'>
            <Img src='/img/size.png' className={styles.sizeFigure} />
            <input
              type='checkbox'
              name='small'
              id='small'
              className={styles.inp}
              onChange={(e) => setSize(e.target.name)}
            />
            <figcaption>small</figcaption>
          </label>
          <label className={styles.size} htmlFor='medium'>
            <Img src='/img/size.png' className={styles.sizeFigure} />
            <input
              type='checkbox'
              name='big'
              id='big'
              className={styles.inp}
              onChange={(e) => setSize(e.target.name)}
            />
            <figcaption>big</figcaption>
          </label>
          <label className={styles.size} htmlFor='large'>
            <Img src='/img/size.png' className={styles.sizeFigure} />
            <input
              type='checkbox'
              name='large'
              id='large'
              className={styles.inp}
              onChange={(e) => setSize(e.target.name)}
            />
            <figcaption>large</figcaption>
          </label>
        </form>
        <h5 className={styles.ingredientsTitle}>choose additional ingredients</h5>
        <form className={styles.ingredientsForm}>
          {data?.extra?.map((ing) => (
            <label htmlFor={ing.text} className={styles.ingredient} key={ing._id}>
              <input type='checkbox' name={ing.text} id={ing.text} />
              {ing.text}
            </label>
          ))}
        </form>
        <form className={styles.quantityForm}>
          <input type='number' />
          <BTN className={styles.btn}>add to cart</BTN>
        </form>
      </div>
    </main>
  );
}

export default Product;

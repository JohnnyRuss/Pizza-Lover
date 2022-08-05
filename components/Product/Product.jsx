import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addProduct } from '../../store/reducers/cartReducer';

import styles from './components/product.module.scss';
import { Img, BTN } from '../Interface';

function Product({ data }) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(data?.prices?.small);
  const [extrasPrice, setExtrasPrice] = useState(0);
  const [defaultPrice, setDefaultPrice] = useState(data?.prices?.small);
  const [extras, setExtras] = useState([]);
  const [size, setSize] = useState('small');
  const [quantity, setQuantity] = useState(1);

  function handlePriceBySize(size) {
    setSize(size);
    setPrice(extrasPrice + data.prices[size]);
    setDefaultPrice(data.prices[size]);
  }

  function handleExtras(e, ing) {
    const checked = e.target.checked;

    if (checked) {
      setExtras((prevState) => [...prevState, ing]);
      setExtrasPrice((prevPrice) => prevPrice + ing.price);
      setPrice(ing.price + price);
    } else {
      setExtras((prevState) => prevState.filter((ex) => ex._id !== ing._id));
      setExtrasPrice((prevPrice) => prevPrice - ing.price);
      setPrice(price - ing.price);
    }
  }

  function handlePriceByQuantity(quantity) {
    if (+quantity === 0) return;
    setQuantity(quantity);
  }

  function handleAddToCart(e) {
    e.preventDefault();
    dispatch(
      addProduct({
        productId: data._id,
        productName: data.title,
        size,
        quantity,
        extras,
        price,
        defaultPrice,
      })
    );
  }

  return (
    <main className={styles.product}>
      <Img src='/img/pizza.png' className={styles.figure} />
      <div className={styles.productDetails}>
        <h2 className={styles.title}>{data?.title}</h2>
        <p className={styles.price}>${price}</p>
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
              onChange={(e) => handlePriceBySize(e.target.name)}
            />
            <figcaption>small</figcaption>
          </label>
          <label className={styles.size} htmlFor='big'>
            <Img src='/img/size.png' className={styles.sizeFigure} />
            <input
              type='checkbox'
              name='big'
              id='big'
              className={styles.inp}
              onChange={(e) => handlePriceBySize(e.target.name)}
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
              onChange={(e) => handlePriceBySize(e.target.name)}
            />
            <figcaption>large</figcaption>
          </label>
        </form>
        <h5 className={styles.ingredientsTitle}>choose additional ingredients</h5>
        <form className={styles.ingredientsForm}>
          {data?.extra?.map((ing) => (
            <label htmlFor={ing.text} className={styles.ingredient} key={ing._id}>
              <input
                type='checkbox'
                name={ing.text}
                id={ing.text}
                onChange={(e) => handleExtras(e, ing)}
              />
              {ing.text}
            </label>
          ))}
        </form>
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
      </div>
    </main>
  );
}

export default Product;

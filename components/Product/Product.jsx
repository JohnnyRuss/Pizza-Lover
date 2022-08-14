import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addProduct } from '../../store/reducers/cartReducer';

import styles from './components/product.module.scss';
import { Img } from '../Interface';
import ProductDetails from './components/ProductDetails';
import SizeForm from './components/SizeForm';
import IngredientsForm from './components/IngredientsForm';
import QuantityForm from './components/QuantityForm';

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
        <ProductDetails title={data?.title} price={price} description={data?.description} />
        <SizeForm handlePriceBySize={handlePriceBySize} />
        <IngredientsForm extra={data.extra} handleExtras={handleExtras} />
        <QuantityForm
          handlePriceByQuantity={handlePriceByQuantity}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </main>
  );
}

export default Product;

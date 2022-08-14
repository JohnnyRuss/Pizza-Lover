import styles from './sizeForm.module.scss';

function SizeForm({ handlePriceBySize }) {
  return (
    <>
      <p>choose the size</p>
      <form className={styles.sizesForm}>
        <label className={styles.size} htmlFor='small'>
          <span className={styles.sizeSmall}></span>
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
          <span className={styles.sizeMedium}></span>
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
          <span className={styles.sizeBig}></span>
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
    </>
  );
}

export default SizeForm;

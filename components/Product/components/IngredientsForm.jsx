import styles from './ingredientsForm.module.scss';

function IngredientsForm({ extra, handleExtras }) {
  return (
    <>
      <h5 className={styles.ingredientsTitle}>choose additional ingredients</h5>
      <form className={styles.ingredientsForm}>
        {extra?.map((ing) => (
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
    </>
  );
}

export default IngredientsForm;

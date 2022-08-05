import styles from './components/products.module.scss';
import { Card } from '../Layouts';
import axios from 'axios';

function Products({ data }) {
  return (
    <div className={styles.products}>
      <h3 className={styles.title}>the best pizza in town</h3>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nemo beatae veniam deleniti
        possimus aut quidem a, tempora quo ea, doloremque quam quasi maiores mollitia saepe eius
        velit nam placeat, quibusdam aliquid minus quisquam! Deserunt, ut. Consectetur earum qui,
        distinctio, dolore, vitae quis obcaecati cum non ipsa necessitatibus placeat! Officiis
        aspernatur sed cumque perspiciatis ratione soluta corporis nostrum, impedit iusto.
      </p>
      <div className={styles.productsList}>
        {data.map((product) => (
          <Card key={product._id} data={product} />
        ))}
      </div>
    </div>  
  );
}

export default Products;

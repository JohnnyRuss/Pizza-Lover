import styles from './call.module.scss';
import { Img } from '../../Interface';

function Call() {
  return (
    <div className={styles.call}>
      <Img src='/img/telephone.png' className={styles.figure} />
      <div className={styles.text}>
        <p>order now</p>
        <p>012 345 678</p>
      </div>
    </div>
  );
}

export default Call;

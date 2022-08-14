import styles from './components/order.module.scss';
import { CartInfo } from '../Layouts';
import UserDetails from './components/UserDetails';
import Progress from './components/Progress';

function Order() {
  return (
    <div className={styles.order}>
      <div className={styles.detailsBox}>
        <UserDetails />
        <Progress />
      </div>
      <CartInfo className={styles.info} />
    </div>
  );
}

export default Order;

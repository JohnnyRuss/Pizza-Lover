import styles from './components/order.module.scss';
import { CartInfo } from '../Layouts';
import { Img } from '../Interface';

function Order() {
  const status = 0;
  function statusClass(i) {
    if (i - status < 1) return styles.done;
    if (i - status === 1) return styles.inProgress;
    if (i - status > 1) return styles.undone;
  }

  return (
    <div className={styles.order}>
      <div className={styles.detailsBox}>
        <table className={styles.customerTable}>
          <tr>
            <th>order ID</th>
            <th>customer</th>
            <th>adress</th>
            <th>total</th>
          </tr>
          <tr>
            <td>129837819237</td>
            <td>ron mcelroy</td>
            <td>saint nicolas st. 212-33 LA</td>
            <td>$79.80</td>
          </tr>
        </table>
        <div className={styles.progressBox}>
          <div className={statusClass(0)}>
            <Img src='/img/paid.png' className={styles.progressIcon} />
            payment
            <Img src='/img/checked.png' className={styles.checkedIcon} />
          </div>
          <div className={statusClass(1)}>
            <Img src='/img/bake.png' className={styles.progressIcon} />
            preparing
            <Img src='/img/checked.png' className={styles.checkedIcon} />
          </div>
          <div className={statusClass(2)}>
            <Img src='/img/bike.png' className={styles.progressIcon} />
            on the way
            <Img src='/img/checked.png' className={styles.checkedIcon} />
          </div>
          <div className={statusClass(3)}>
            <Img src='/img/delivered.png' className={styles.progressIcon} />
            delivered
            <Img src='/img/checked.png' className={styles.checkedIcon} />
          </div>
        </div>
      </div>
      <CartInfo className={styles.info}/>
    </div>
  );
}

export default Order;

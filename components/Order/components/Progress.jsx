import styles from './progress.module.scss';
import { Img } from '../../Interface';

function Progress() {
  const status = 0;

  function statusClass(i) {
    if (i - status < 1) return styles.done;
    if (i - status === 1) return styles.inProgress;
    if (i - status > 1) return styles.undone;
  }

  return (
    <div className={styles.progressBox}>
      <div className={statusClass(0)}>
        <span className={styles.paidIcon}></span>
        payment
        <Img src='/img/checked.png' className={styles.checkedIcon} />
      </div>
      <div className={statusClass(1)}>
        <span className={styles.bakeIcon}></span>
        preparing
        <Img src='/img/checked.png' className={styles.checkedIcon} />
      </div>
      <div className={statusClass(2)}>
        <span className={styles.bikeIcon}></span>
        on the way
        <Img src='/img/checked.png' className={styles.checkedIcon} />
      </div>
      <div className={statusClass(3)}>
        <span className={styles.deliveredIcon}></span>
        delivered
        <Img src='/img/checked.png' className={styles.checkedIcon} />
      </div>
    </div>
  );
}

export default Progress;

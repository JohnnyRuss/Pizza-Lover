import styles from './components/footer.module.scss';
import { Img } from '../Interface';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Img src='/img/bg.png' className={styles.figure} />
      <div className={styles.details}>
        <p className={styles.motivation}>
          oh yes, we did the best pizza, well baked slice of pizza
        </p>
        <div className={styles.adressList}>
          <h5 className={styles.title}>find out restaurants</h5>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span>1654 R.Don Road #304.</span>
              <span>NewYourk, 85022</span>
              <span>(602) 867-1011</span>
            </li>
            <li className={styles.listItem}>
              <span>2356 K.Laquie Road #235.</span>
              <span>NewYourk, 85022</span>
              <span>(602) 867-1011</span>
            </li>
            <li className={styles.listItem}>
              <span>1614 E.Erwin St. #104.</span>
              <span>NewYourk, 85022</span>
              <span>(602) 867-1011</span>
            </li>
            <li className={styles.listItem}>
              <span>1654 W.Caroll St.#125.</span>
              <span>NewYourk, 85022</span>
              <span>(602) 867-1011</span>
            </li>
          </ul>
        </div>
        <div className={styles.hoursList}>
          <h5 className={styles.title}>workin hours</h5>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span>monday until friday</span>
              <span>9:00-22:00</span>
            </li>
            <li className={styles.listItem}>
              <span>saturday - sunday</span>
              <span>12:00-24:00</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { Call, Menu, Cart } from './components';
import styles from './components/navigation.module.scss';

function Navigation() {
  return (
    <>
      <input type='checkbox' name='burger' id='burger' className={styles.inp} />
      <label className={styles.burgerBtn} htmlFor='burger'>
        burger
      </label>
      <nav className={styles.navigation}>
        <Call />
        <Menu />
        <Cart />
      </nav>
    </>
  );
}

export default Navigation;

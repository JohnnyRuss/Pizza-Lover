import { Img, Link } from '../../Interface';
import styles from './menu.module.scss';

function Menu() {
  return (
    <ul className={styles.menu}>
      <Link path='/'>
        <li>homepage</li>
      </Link>
      <li>products</li>
      <li>menu</li>
      <Link path='/'>
        <Img src='/img/logo.png' className={styles.logo} />
      </Link>
      <li>events</li>
      <li>blog</li>
      <li>contact</li>
    </ul>
  );
}

export default Menu;

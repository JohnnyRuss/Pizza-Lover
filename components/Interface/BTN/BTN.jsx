import styles from './btn.module.scss';

function BTN({ children, className }) {
  return <button className={`${styles.btn} ${className}`}>{children}</button>;
}

export default BTN;

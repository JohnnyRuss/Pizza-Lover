import styles from './btn.module.scss';

function BTN({ children, className, onClick }) {
  return (
    <button className={`${styles.btn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default BTN;

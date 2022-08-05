import Image from 'next/image';
import styles from './img.module.scss';

function Img({ src, className }) {
  return (
    <figure className={`${styles.img} ${className}`}>
      <Image layout='fill' src={src} />
    </figure>
  );
}

export default Img;

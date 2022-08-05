import styles from './components/featured.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

import { uid } from 'uid';
import { featuredImages } from '../../utils/index';

function Featured() {
  return (
    <>
      <Swiper
        className={styles.slider}
        modules={[Navigation, Pagination]}
        wrapperTag='ul'
        tag='section'
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}>
        {featuredImages.map((img) => (
          <SwiperSlide key={uid(6)} tag='li' className={styles.sliderItem}>
            <Image
            //   width={100}
            //   height={100}
              layout='fill'
              src={img.img}
              alt='img'
              className={styles.sliderImg}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Featured;

import React from 'react';
import image from '../assets/img/logo.jpg'
import styles from './styles/Hero.module.scss'

const Hero = () => {
    return (
          <section className={styles.slider}>
            <div className={styles.imageWrapper}>
              <img src={image} alt="image"/>
            </div>
            <button className={styles.leftArrow}></button>
            <button className={styles.rightArrow}></button>
            <div className={styles.dots}>
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dot} />
            </div>
          </section>
    );
};

export default Hero;
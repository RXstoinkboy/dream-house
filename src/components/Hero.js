import React from 'react';
import image from '../assets/img/logo.jpg'
import styles from './styles/Hero.module.scss'

export const Hero = () => {
    return (
          <section className={styles.slider}>
            <div className={styles.imageWrapper}>
              <img className={styles.img} src={image} alt="apartment info - change it to something take from API"/>
            </div>
            <button className={styles.leftArrow}>
              <span className={styles.leftArrow__innerEl}></span>
            </button>
            <button className={styles.rightArrow}>
              <span className={styles.rightArrow__innerEl}></span>
            </button>
            <div className={styles.dots}>
              <div className={styles.dotMarked} />
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dot} />
            </div>
          </section>
    );
};

export default Hero;
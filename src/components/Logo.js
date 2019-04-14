import React from 'react'
import {Link} from 'react-router-dom'
import styles from './styles/Logo.module.scss'
import logo from '../assets/img/logo.jpg'

export const Logo = () => {
    return (
        <Link className={styles.wrapper} to='/'>
          <div className={styles.squareWrapper}>
            <div className={styles.bordersWrapper}>
              <div className={styles.topLeftBorder}></div>
              <div className={styles.topRightBorder}></div>
              <div className={styles.botRightBorder}></div>
              <div className={styles.botLeftBorder}></div>
            </div>
            <div className={styles.innerSqr}>d</div>
          </div>
          <div className={styles.logoText}>dream house</div>
        </Link>
    );
};

export default Logo;
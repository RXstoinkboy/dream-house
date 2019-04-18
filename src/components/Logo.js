import React from 'react'
import {Link} from 'react-router-dom'
import styles from './styles/Logo.module.scss'

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
            <div className={styles.innerSqr}>mf</div>
          </div>
          <div className={styles.logoText}>My Finder</div>
        </Link>
    );
};

export default Logo;
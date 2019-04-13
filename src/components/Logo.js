import React from 'react'
import {Link} from 'react-router-dom'
import styles from './styles/Logo.module.scss'
import logo from '../assets/img/logo.jpg'

export const Logo = () => {
    return (
        <div className={styles.wrapper}>
          <Link to='/'>
            <img src={logo} alt="dream house"/>  
          </Link>
        </div>
    );
};

export default Logo;
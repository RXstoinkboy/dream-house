import React from 'react'
import {Link} from 'react-router-dom'
import styles from './styles/Logo.module.css'
import logo from '../assets/img/logo.jpg'

const Logo = () => {
    return (
        <div className={styles.wrapper}>
          <Link to='/lala'>
            <img src={logo} alt="dream house"/>  
          </Link>
        </div>
    );
};

export default Logo;
import React from 'react'
import {Link} from 'react-router-dom'
import styles from './styles/NavLink.module.scss'

const NavLink = props => {
    return (
        <div className={styles.wrapper}>
            <Link className={styles.link} to={props.name === 'home' ? '/' : `/${props.name}`}>{props.name}</Link>
        </div>
    );
};

export default NavLink;
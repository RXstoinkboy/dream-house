import React from 'react'
import NavLink from './NavLink'
import styles from './styles/Navigation.module.scss'

const Navigation = () => {
    return (
        <div className={styles.navBar}>
            <nav className={styles.navWrapper}>
                <NavLink name='home' />
                <NavLink name='buy' />
                <NavLink name='sell' />
                <NavLink name='about us' />
                <NavLink name='contact' />
            </nav>
        </div>
    );
};

export default Navigation;
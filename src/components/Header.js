import React from 'react'
import styles from './styles/Header.module.scss'

// components
import Logo from './Logo'
import ContactsTopBar from './ContactsTopBar'
import SearchBar from './SearchBar'
import Favourites from './Favourites'
import HeaderTitle from './HeaderTitle'

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                <Logo />
                <ContactsTopBar />
                <div className={styles.infoBar}>
                    <HeaderTitle />
                    <SearchBar />
                    <Favourites />
                </div>
            </div>
        </div>
    );
};

export default Header;
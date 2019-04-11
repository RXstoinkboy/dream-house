import React from 'react'
import styles from './styles/Header.module.scss'

// components
import Logo from './Logo'
import Contacts from './Contacts'
import SearchBar from './SearchBar'
import Favourites from './Favourites'
import HeaderTitle from './HeaderTitle'

const Header = () => {
    return (
        <div className={styles.grid}>
            <Logo />
            <Contacts />
            <div className={styles.infoBar}>
                <HeaderTitle />
                <SearchBar />
                <Favourites />
            </div>
        </div>
    );
};

export default Header;
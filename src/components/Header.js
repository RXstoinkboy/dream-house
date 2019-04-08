import React from 'react'
import styles from './styles/Header.module.css'

// components
import Logo from './Logo'
import Contacts from './Contacts'
import SearchBar from './SearchBar'
import Favourites from './Favourites'

const Header = () => {
    return (
        <div className={styles.grid}>
            <Logo />
            <Contacts />
            <SearchBar />
            <Favourites />
        </div>
    );
};

export default Header;
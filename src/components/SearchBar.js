import React from 'react';
import styles from './styles/SearchBar.module.scss'
import {ReactComponent as SearchIcon} from '../assets/img/search.svg'

const SearchBar = () => {
    return (
        <form className={styles.wrapper}>
            <label htmlFor='searchBar' className={styles.searchElement}>
                <input id='searchBar' type='search' className={styles.searchBar}/>
                <SearchIcon className={styles.searchIcon}/>
            </label>
        </form>
    );
};

export default SearchBar;
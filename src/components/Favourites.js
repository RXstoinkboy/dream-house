import React from 'react'
import styles from './styles/Favourites.module.scss'
import {ReactComponent as FavIcon} from '../assets/img/heart.svg'

export const Favourites = () => {
    return (
        <div className={styles.wrapper}>
            <button className={styles.favouritesListBtn}>
                <p>favourites</p>
                <FavIcon className={styles.favIcon} />
            </button>
        </div>
    );
};

export default Favourites;
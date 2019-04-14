import React from 'react';
import styles from './styles/Home.module.scss'
import Hero from './Hero'

const Home = () => {
    return (
      <section className={styles.main}>
        <Hero />
        <section className={styles.wrapper}>
        hello from home  
        </section>
      </section>
    );
};

export default Home;
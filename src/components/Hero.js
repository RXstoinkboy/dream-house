import React, {Component} from 'react';
import image from '../assets/img/logo.jpg'
import styles from './styles/Hero.module.scss'
import axios from 'axios'
import homesList from '../assets/data/homesList'

export class Hero extends Component{

  componentDidMount(){
    createURL().forEach(el => {
      fetchData(el)
    })
  }
  render(){
    return (
          <section className={styles.slider}>
            <div className={styles.imageWrapper}>
              <img className={styles.img} src={image} alt="apartment info - change it to something take from API"/>
            </div>
            <button className={styles.leftArrow}>
              <span className={styles.leftArrow__innerEl}></span>
            </button>
            <button className={styles.rightArrow}>
              <span className={styles.rightArrow__innerEl}></span>
            </button>
            <div className={styles.dots}>
              <div className={styles.dotMarked} />
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dot} />
            </div>
          </section>
    );

  }
};

const createURL = () => {
  let URLlist = [];

  homesList.forEach(el => {
    const elURL = `http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=X1-ZWz17zmqybsd8r_3mmvk&zpid=${el}`;
    URLlist.push(elURL);
  })
  return URLlist;
}

const fetchData =(url)=>{
  axios.get(url).then(data => console.log(data));
}

export default Hero;
import React, {Component} from 'react';
// import image from '../assets/img/logo.jpg'
import styles from './styles/Hero.module.scss'
import axios from 'axios'
import {sliderData} from '../assets/data/sliderData'

import {loadHeroPictures} from '../actions/loadHeroPictures'
import { connect } from 'react-redux';

export class Hero extends Component{
  constructor(props){
    super(props);
    this.state = {
      pictures: []
    }
  }

  componentDidMount(){
    // console.log(this.state.pictures)
    // const results = connectToApi();
    
    // this.setState({
    //   pictures: results
    // },()=>{console.log(this.state.pictures)})
    console.log(this.props.heroPicturesReducer.data);
    sliderData.forEach(slide => {
      this.props.loadHeroPictures(slide.endpoint);
    })
    // this.props.loadHeroPictures(sliderData[1].endpoint);
  }

  // chyba trzeba dodać tutaj shouldComponentUpdate()

  render(){
    // console.log(this.state.pictures[1]);

    return (
          <section className={styles.slider}>
            <div className={styles.imageWrapper}>
              <img className={styles.img} src={this.props.heroPicturesReducer.data[0]} alt="apartment info - change it to something take from API"/>
            </div>
            <button className={styles.leftArrow}>
              <span className={styles.leftArrow__innerEl}></span>
            </button>
            <button className={styles.rightArrow}>
              <span className={styles.rightArrow__innerEl}></span>
            </button>
            <div className={styles.dots}>
              <p>{this.state.pictures[1]}</p>
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

const mapStateToProps = state => {
  return {
    heroPicturesReducer: state.heroPicturesReducer
  }
}

const mapDispatchToProps = {
  loadHeroPictures
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero);

// pictures for hero section
const connectToApi = () => {
  let pictures = [];

  sliderData.forEach(element => {
    axios.get(element.endpoint, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      }})
    .then((res) => {
      pictures.push(res.data.photos[element.picRoute])
    })
    .catch((err) => {
      console.log (`error: ${err}`)
    })
  })
  return pictures
}
import React from 'react';
import classes from './Dashboard.module.css';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const navigate= useNavigate();
  const navigation = (path) => {
    console.log("path---------->",path)
  if(path){
    navigate('/'+path);
  }else{
    navigate('/');
  }
  }
  return (
    <div className={classes.dashboard}>
      <div className={classes.text_container}>
        <div>
          <h6>NEW HERE?</h6>
          <h4>NEVER FORGET YOUR FIRST TIME</h4>
        </div>
        <div className={classes.h1_container}>
          <div>
            <h1>JOIN THE HUSTLE</h1>
            <button className={classes.btn} onClick={()=>navigation('Enrollment')}>ENROLL NOW</button>
          </div>
        </div>
      </div>
      {/* <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1400x600?text=First+slide"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1400x600?text=Second+slide"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1400x600?text=Third+slide"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </div>
  )
}

export default Dashboard
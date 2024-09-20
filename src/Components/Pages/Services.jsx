import React from 'react'
import classes from './Services.module.css';
import img1 from '../../assets/gym_images/1.jpg'
import img2 from '../../assets/gym_images/2.jpg'
import img3 from '../../assets/gym_images/3.jpg'
import img4 from '../../assets/gym_images/4.jpg'
import img5 from '../../assets/gym_images/5.jpg'
import img6 from '../../assets/gym_images/6.jpg'
import img7 from '../../assets/gym_images/7.jpg'
import img8 from '../../assets/gym_images/8.jpg'
import img9 from '../../assets/gym_images/9.png'
import img10 from '../../assets/gym_images/10.png'
import img11 from '../../assets/gym_images/11.png'
// import img1 from '../../assets/gym_images/1.jpg'
// import img1 from '../../assets/gym_images/1.jpg'
// import img1 from '../../assets/gym_images/1.jpg'
// import img1 from '../../assets/gym_images/1.jpg'
// import img1 from '../../assets/gym_images/1.jpg'
// import img1 from '../../assets/gym_images/1.jpg'

const Services = () => {
  return (
    <div className={classes.Services_container}>
      <div className={classes.Services_container_child}>
        <div className={classes.Services_Left}>
          <ul className={classes.services_ul}>
            <li>
              <h4>DIET PLAN</h4>
            </li>
            <li>
              <h4>AEROBICS</h4>
            </li>
            <li>
              <h4>CARDIO</h4>
            </li>
            <li>
              <h4>CIRCUIT TRAINING</h4>
            </li>
            <li>
              <h4>GENERAL TRAINING</h4>
            </li>
            <li>
              <h4>PERSONAL TRAINING</h4>
            </li>
          </ul>
        </div>
        <div className={classes.Services_right}>
        <div class={classes.grid_container}>
          <div class={classes.grid_item}><img src={img1} alt="" /></div>
          <div class={classes.grid_item}><img src={img2} alt="" /></div>
          <div class={classes.grid_item}><img src={img3} alt="" /></div>
          <div class={classes.grid_item}><img src={img4} alt="" /></div>
          <div class={classes.grid_item}><img src={img5} alt="" /></div>
          <div class={classes.grid_item}><img src={img6} alt="" /></div>
          <div class={classes.grid_item}><img src={img7} alt="" /></div>
          <div class={classes.grid_item}><img src={img8} alt="" /></div>
          <div class={classes.grid_item}><img src={img9} alt="" /></div>
          <div class={classes.grid_item}><img src={img10} alt="" /></div>
          <div class={classes.grid_item}><img src={img11} alt="" /></div>
          {/* <div class="grid-item">{img12}</div> */}
        </div>
        </div>
      </div>


    </div>
  )
}

export default Services
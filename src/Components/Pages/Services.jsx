import React from 'react'
import classes from './Services.module.css';
const Services = () => {
  return (
    <div className={classes.Services_container}>
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
  )
}

export default Services
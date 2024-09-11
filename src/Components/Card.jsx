import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {
  return (
    <div className={classes.card}>
        <h3>{props.plan}</h3> 
        <p><span className={classes.month}>&#8377;</span>{props.price}</p>
        <p>Duration - {props.month}</p>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.description}>No joining fees</p>
    </div>
  )
}

export default Card
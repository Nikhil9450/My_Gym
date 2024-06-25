import React from 'react'
import classes from './Enroll.module.css'
import { motion } from 'framer-motion';
const Enroll = () => {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: .5, ease: "easeInOut" }}
    >
        <div className={classes.enroll}>
    <h2>CHOOSE YOUR FITNESS </h2>
    <h2>MEMBERSHIP PLAN</h2>
        <div className={classes.card_container}>
            <div className={classes.card}>
                BASIC 
                <p>2000<span className={classes.month}>&#8377;/month</span></p>
                <p>Duration - 1 Month</p>
            </div>

            <div className={classes.card}>
                SILVER
                <p>1500<span className={classes.month}>&#8377;/month</span></p>
                <p>Duration - 3 Months</p>
            </div>

            <div className={classes.card}>
                GOLD
                <p>1200<span className={classes.month}>&#8377;/month</span></p>
                <p>Duration - 6 Months</p>
            </div>

            <div className={classes.card}>
                PLATINUM
                <p>1000<span className={classes.month}>&#8377;/month</span></p>
                <p>Duration - 12 Months</p>

            </div>
        </div>
    </div>
     </motion.div>
  )
}

export default Enroll
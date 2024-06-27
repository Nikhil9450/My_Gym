import React from 'react'
import classes from './Enroll.module.css'
import { motion } from 'framer-motion';
import Card from '../Card';
const Enroll = () => {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: .3, ease: "easeInOut" }}
    >
    <div className={classes.enroll}>
        <h2>CHOOSE YOUR FITNESS </h2>
        <h2>MEMBERSHIP PLAN</h2>
            <div className={classes.card_container}>
                <Card plan="BASIC"  price='2000' month="1 Month" description="Unlimited access to all area." />
                <Card plan="SILVER" price='1500' month="3 Month" description="Unlimited access to all area." />
                <Card plan="GOLD" price='1200' month="6 Month" description="Unlimited access to all area." />
                <Card plan="PLATINUM" price='1000' month="12 Month" description="Unlimited access to all area." />
            </div>
    </div>
     </motion.div>
  )
}

export default Enroll
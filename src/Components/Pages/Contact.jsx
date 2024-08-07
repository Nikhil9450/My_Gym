import React from 'react';
import TextField from '@mui/material/TextField';
import classes from './Contact.module.css'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MapIcon from '@mui/icons-material/Map';
import XIcon from '@mui/icons-material/X';
const Contact = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftdiv}>

         <div className={classes.links_container}>
            <MapIcon style={{color:'white',marginRight:'1rem'}}/>
           <a href="">Laxmi Nagar,Delhi</a>
         </div>
         <div className={classes.links_container}>
          <MailIcon style={{color:'white',marginRight:'1rem'}}/>
          <p>divinefitness@outlook.com</p>         
        </div>
         <div className={classes.links_container}>
           <LocalPhoneIcon style={{color:'white',marginRight:'1rem'}}/>
           <p>+918569321456</p>
         </div>
         <div className={classes.socialLink_container}>
            <a href="">
                <FacebookIcon style={{color:'white'}}/>
            </a>
            <a href="">
                <XIcon style={{color:'white'}}/>
            </a>
            <a href="">
                <InstagramIcon style={{color:'white'}}/>
            </a>
         </div>
      </div>
      <div className={classes.rightdiv}>
        <div className={classes['input-group']}>
            <input
              required
              type="text"
              name="text"
              autoComplete="off"
              className={classes.input}
            />
            <label className={classes['user-label']}>Your Name</label>
        </div>
        <div className={classes['input-group']}>
            <input
              required
              type="text"
              name="text"
              autoComplete="off"
              className={classes.input}
            />
            <label className={classes['user-label']}>Your Email</label>
        </div>
        <div className={classes['input-group']}>
            <input
              required
              type="text"
              name="text"
              autoComplete="off"
              className={classes.input}
            />
            <label className={classes['user-label']}>Subject</label>
        </div>
        <div className={classes['input-group']}>
          <textarea
            required
            name="text"
            autoComplete="off"
            className={classes.textarea}
          />
          <label className={classes['user-label']}>Message</label>
        </div>
        <div className={classes['input-group']}>
        <button className={classes.btn}>Send</button>
        </div>

      </div>
    </div>
  )
}

export default Contact
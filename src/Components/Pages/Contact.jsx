import React from 'react';
import TextField from '@mui/material/TextField';
import classes from './Contact.module.css'
const Contact = () => {
  return (
    <div className={classes.container}>
    <div className={classes.leftdiv}>

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
        <button className={classes.btn}>Send</button>
    </div>
    </div>
  )
}

export default Contact
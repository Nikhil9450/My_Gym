import * as React from 'react';
import { useNavigate } from 'react-router-dom';
// import logo from '../../../public/Icons/logo.png';
import classes from './Navbar.module.css';

const pages = ['About', 'Services', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate=useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigation = (path) => {
    console.log("path---------->",path)
  if(path){
    navigate('/'+path);
  }else{
    navigate('/');
  }
  }

  return (
   <div className={classes.navbar}>
      <div className={classes.logo_container}>
        <img className={classes.logo} src='Icons/logo.png' alt="logo" onClick={()=>navigation('')}/>
      </div>
      <div className={classes.navlink_container}>
        <ul>
          <li><button class={classes.button2} onClick={()=>navigation('About')}>ABOUT</button></li>
          <li><button class={classes.button2} onClick={()=>navigation('Services')}>SERVICES</button></li>
          <li><button class={classes.button2} onClick={()=>navigation('Contact')}>CONTACT</button></li>
          <li><button class={classes.button2} onClick={()=>navigation('Enrollment')}>ENROLL NOW</button></li>
        </ul>
      </div>
   </div>
  );
}
export default Navbar;

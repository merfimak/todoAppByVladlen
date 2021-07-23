import React, {Fragment} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import classes from './Navbar.module.css';



export const Navbar = () =>{
	return(
		<div className={classes.navbar}>
			<ul className={classes.navbar_ul}>
          <li className={classes.navbar_li}>
            <NavLink to="/" className={classes.navbar_link} exact  activeClassName={classes.active}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={classes.navbar_link} exact activeClassName={classes.active} >About</NavLink>
          </li>
        </ul>

		</div>	
		)
}






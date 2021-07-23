import React, {useContext} from 'react';
import classes from './Alert.module.css';
import {AlertContext} from '../context/alert/alertContext.js'
import {CSSTransition} from 'react-transition-group'

export const Alert = () =>{
const {alert, hide} = useContext(AlertContext)
//console.log(alert.visible)
if(!alert.visible){
  return null;
}


	return(
	<CSSTransition
		in={alert.visible}
		timeout={750}
		classNames={'alert'}
		mountOnEnter
		unmountOnExit
	>	

    <div className={`${classes.alert_body} ${classes[alert.tipe || 'worning']}`}>
     <div className={classes.alert_message}>{alert.text}</div>
     <div onClick={hide} className={classes.alert_cross}></div>
		</div>	
		</CSSTransition>
		)
}






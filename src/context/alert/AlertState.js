import React, {useReducer} from 'react';
import {AlertContext} from './alertContext';
import {alertReducer} from './alertReducer';
import {SHOW_ALERT, HIDE_ALERT} from '../tipes'

export const AlertState = ({children}) => {

const [state, dispatch] = useReducer(alertReducer, {visible: false})
const show = (text, type = 'worning') =>{
	dispatch({
		type: SHOW_ALERT,
		payload: {text, type}
	})
}

const hide = () => dispatch({type: HIDE_ALERT})

	return(
			<AlertContext.Provider value={{
				show, hide,
				alert: state
			}}>
				{children}


			</AlertContext.Provider>
		)
}


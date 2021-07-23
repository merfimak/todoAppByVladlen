import React, {Fragment, useState, useContext} from 'react';
import classes from './Form.module.css';
import {AlertContext} from '../context/alert/alertContext'
import {FirebaseContext} from '../context/firebase/firebaseContext.js'


export const Form = () =>{

	const [value, setValue] = useState('')
	const alert = useContext(AlertContext)
	const firebase = useContext(FirebaseContext)


	const submitHandler = event =>{
		event.preventDefault()
		if(value.trim()){
			firebase.addNote(value.trim()).then( () => {
				alert.show('заметка создана', 'seccess')
			}).catch( () => {
				alert.show('что то случилось', 'danger')
			})
			setValue('')
		}else{
			alert.show('введите текст заметки')
		}
		
	}




	return(
		<div>
		<form onSubmit={submitHandler}>
			<div className={classes.form_item}>
				<label for="formName" className={classes.form_lable}></label>
				<input type="text" id="formName" name="name"  placeholder="Введите заметку" className={classes.form_input}
				 value={value} 
				 onChange={e => setValue(e.target.value)}
				 />
			</div>

		</form>
		</div>
		)



}





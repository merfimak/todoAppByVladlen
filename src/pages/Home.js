import React, {Fragment, useContext, useEffect} from 'react';
import {Form} from '../components/Form.js';
import {Notes} from '../components/Notes.js';
import {FirebaseContext} from '../context/firebase/firebaseContext.js'
import {Loader} from '../components/Loader'


export const Home = () =>{

/*const notes = new Array(3)
	.fill('')
	.map((_, i) => ({id: i, title: `Note ${i + 1}`}))*/

const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)


useEffect( () => {
	fetchNotes()
}, [])

	return(
		<Fragment>
			<Form />
			{loading 
				? <Loader />
				: <Notes notes={notes} onRemove={removeNote} />
			}
		</Fragment>
		)
}






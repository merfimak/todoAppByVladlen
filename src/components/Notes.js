import React, {Fragment} from 'react';
import classes from './Notes.module.css';



export const Notes = ({notes, onRemove}) =>{
	return(
		<div className={classes.notes_body}>
			<ul className={classes.notes_ul}>

      {notes.map(note =>(
        <li className={classes.notes_li} key={note.id} >
          <div className={classes.li_name}>{note.title}<span>{note.date}</span></div>
          <div onClick={() => onRemove(note.id)} className={classes.li_cross}></div>
        </li>
        ))}
          


        </ul>

		</div>	
		)
}






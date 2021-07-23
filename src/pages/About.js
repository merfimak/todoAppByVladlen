import React, {Fragment} from 'react';
import classes from './About.module.css';

export const About = () =>{
	return(
		<Fragment>
			<div className={classes.about_body}>
				<h1 className={classes.about_title}>About</h1>
				<p className={classes.about_text}>Первое реакт приложение</p>
			</div>
		</Fragment>
		)
}






import React from 'react';

//Button to submit or to reset
const Button = (props) => {
	console.log(props.style);
	return(
	<button style= {props.style} onClick= {props.action} > 
	  {props.title} 
	</button>)
}


export default Button;
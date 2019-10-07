import React from 'react';
//to input the data
const Input = (props) => {
	console.log(props.value);
	return (  
  <div>
    <label for={props.name}>{props.title}</label>
    <input id={props.name} name={props.name} type={props.inputType} value={props.value} onChange={props.handleChange} placeholder={props.placeholder} {...props} />
  </div>
)
}

export default Input;
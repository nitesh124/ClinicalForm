import React from 'react';

//Used to create the feild for input
const InputField = (props) => (  
  <div>
    <label>{props.title}</label>
    <textarea name={props.name} rows={props.rows} cols = {props.cols} value={props.value} onChange={props.handleChange} placeholder={props.placeholder} />
  </div>
);

export default InputField;
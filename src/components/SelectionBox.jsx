import React from 'react';

//Used for selecting from multiple options by clicking on check
const SelectionBox = (props) => {
	return( <div>
    <label for={props.name} >{props.title}</label>
    <div>
      {props.options.map(option => {
        return (
          <label key={option}>
            <input id = {props.name} name={props.name} onChange={props.handleChange} value={option} checked={ props.selectedOptions.indexOf(option) > -1 } type="checkbox" /> {option}
          </label>
        );
      })}
    </div>
  </div>
);

}

export default SelectionBox;
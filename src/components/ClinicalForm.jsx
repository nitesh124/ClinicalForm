import React, {Component} from 'react';  

// Import Required Components 
import SelectionBox from './SelectionBox';  
import Input from './Input';  
import InputField from './InputField';  
import Select from './Select';
import Button from './Button';

class Form extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      variables: { 
        variableName:'',
        category: '',
        crfDataType: '',
        valueLowerLimit: '',
        valueUpperLimit: '',
        units: '',
        description: '',
        formName:[""],
        isRequired: ''
//all the details of variables in metadata
      },

      isRequiredOptions: ['True', 'False'],
      categoryOptions: ['Calculated', 'Original', 'Derived']

    }
    this.textBox = this.textBox.bind(this);
    this.input = this.input.bind(this);
    this.selectionBox = this.selectionBox.bind(this);
    this.textName = this.textName.bind(this);
    this.type = this.type.bind(this);
    this.submitData = this.submitData.bind(this);
    this.reset = this.reset.bind(this);
  }

  // Each hook below gets executed when the given component mounts
  
textBox(e) {
    console.log("TextBox");
    let value = e.target.value;
    this.setState(prevState => ({
      variables: {
        ...prevState.variables, description: value
      }
      }), ()=>console.log(this.state.variables))
  }

input(e) {
    let value = e.target.value;
    let variableName = e.target.variableName;
this.setState( prevState => ({ variables : 
     {...prevState.variables, [variableName]: value
     }
   }), () => console.log(this.state.variables))
}

selectionBox(e) {

  const newSelection = e.target.value;
  let newSelectionArray;

  if(this.state.variables.units.indexOf(newSelection) > -1) {
    newSelectionArray = this.state.variables.units.filter(s => s !== newSelection)
  } else {
    newSelectionArray = [...this.state.variables.units, newSelection];
  }

    this.setState( prevState => ({ variables:
      {...prevState.variables, units: newSelectionArray }
    })
    )
}

textName(e) {
   let value = e.target.value;
   this.setState( prevState => ({ variables : 
        {...prevState.variables, variableName: value
        }
      }), () => console.log(this.state.variables))
  }

type(e) {
       let value = e.target.value;
   this.setState( prevState => ({ variables : 
        {...prevState.variables, dataType: value
        }
      }), () => console.log(this.state.variables))
  }

submitData(e) {
    e.preventDefault();
    let userData = this.state.variables;

    fetch('http://example.org',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
    })
  }   
//to reset the form to null after every submit
reset(e) {
  
      e.preventDefault();
      this.setState({ 
        variables: {
          variableName:'',
          category: '',
          crfDataType: '',
          valueLowerLimit: '',
          valueUpperLimit: '',
          units:'',
          description: '',
          formName:[""],
          isRequired: ''
  
        },
      })
  }

  render() {
    return (
    
        <form style={{float:"right"}} onSubmit={this.submitData}>
       
          <Input inputType={'text'}
                   title= {'Name'} 
                   name= {'name'}
                   value={this.state.variables.variableName} 
                   placeholder = {'Variable Name'}
                   handleChange = {this.input}/> {/* Name of the Variable */}

          <Select  title= {'Category'}
                   name= {'category'}
                   options={this.state.categoryOptions}
                   value={this.state.variables.category}
                   placeholder={"Select Category"}
                   handleChange={this.selectionBox}/> {/* category of variable */}

          <InputField
                   title={'Crf Data Type'}
                   name={'crfDataType'}
                   value={this.state.variables.crfDataType}
                   handleChange={this.textBox}
                   placeholder={'Enter CRF Data Type'} />{/* crf Data Type you */}

          <InputField
                   title={'Description'}
                   value={this.state.variables.description}
                   name={'description'}
                   handleChange={this.textBox}
                   placeholder={'Describe'} />{/* description */}
        
          <Input   inputType={'number'} 
                   name={'valueLowerLimit'}
                   title= {'Lower Limit'} 
                   value={this.state.variables.valueLowerLimit} 
                   placeholder = {'Enter your Lower Limit'}
                   handleChange={this.type} /> {/* Value Lower Limit */} 

          <Input   inputType={'number'} 
                   name={'valueUpperLimit'}
                   title= {'Upper Limit'} 
                   value={this.state.variables.valueUpperLimit} 
                   placeholder = {'Enter your Upper Limit'}
                   handleChange={this.type} /> {/* Value Upper Limit */}

          <SelectionBox title= {'IsRequired'}
                   name= {'isRequired'}
                   options={this.state.isRequiredOptions}
                   value={this.state.variables.isRequired}
                   placeholder={"Select IsRequired"}
                   handleChange={this.selectionBox}/> {/* IsRequired */}

          <InputField
                   title={'Units'}
                   value={this.state.variables.units}
                   name={'units'}
                   handleChange={this.textBox}
                   placeholder={'Units'} />{/* Units */}

          <Input   inputType={'number'} 
                   name={'formName'}
                   title= {'Form Name'} 
                   value={this.state.variables.formName} 
                   placeholder = {'Enter your Form Name'}
                   handleChange={this.type} /> {/* Value Form Name */}
                   

          <Button 
                   action = {this.submitData}
                   type = {'primary'} 
                   title = {'Submit'} 
                   style={buttonStyle}/> { /*Submit Button */ }
          
          <Button 
                   action = {this.reset}
                   type = {'secondary'}
                   title = {'Clear'}
                   style={buttonStyle}/> {/* Reset the form */}
          
        </form>
  
    );
  }
}

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

export default Form;
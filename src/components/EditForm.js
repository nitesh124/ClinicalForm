import React, {Component} from 'react';
import axios from 'axios';

export default class EditFrom extends Component {

    constructor(props) {
        super(props);

        this.onChangevariableName = this.onChangevariableName.bind(this);
        this.onChangecategory = this.onChangecategory.bind(this);
        this.onChangecrfDataType = this.onChangecrfDataType.bind(this);
        this.onChangevalueLowerLimit = this.onChangevalueLowerLimit.bind(this);
        this.onChangevalueUpperLimit = this.onChangevalueUpperLimit.bind(this);
        this.onChangeunits = this.onChangeunits.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangeformName = this.onChangeformName.bind(this);
        this.onChangeisRequired = this.onChangeisRequired.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            variables_variableName: '',
            variables_category: '',
            variables_crfDataType: '',
            variables_valueLowerLimit: '',
            variables_valueUpperLimit: '',
            variables_units: '',
            variables_description: '',
            variables_formName: '',
            variables_isRequired: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8001/variables/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    variables_variableName: response.data.variables_variableName,
                    variables_category: response.data.variables_category,
                    variables_crfDataType: response.data.variables_crfDataType,
                    variables_valueLowerLimit: response.data.variables_valueLowerLimit,
                    variables_valueUpperLimit: response.data.variables_valueUpperLimit,
                    variables_units: response.data.variables_units,
                    variables_description: response.data.variables_description,
                    variables_formName: response.data.variables_formName,
                    variables_isRequired: response.data.variables_isRequired,
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onChangevariableName(e) {
        this.setState({
            variables_variableName: e.target.value
        });
    }

    onChangecategory(e) {
        this.setState({
            variables_category: e.target.value
        });
    }

    onChangecrfDataType(e) {
        this.setState({
            variables_crfDataType: e.target.value
        });
    }

    onChangevalueLowerLimit(e) {
        this.setState({
            variables_valueLowerLimit: e.target.value
        });
    }

    onChangevalueUpperLimit(e) {
        this.setState({
            variables_valueUpperLimit: e.target.value
        });
    }

    onChangeunits(e) {
        this.setState({
            variables_units: e.target.value
        });
    }

    onChangedescription(e) {
        this.setState({
            variables_description: e.target.value
        });
    }

    onChangeformName(e) {
        this.setState({
            variables_formName: e.target.value
        });
    }

    onChangeisRequired(e) {
        this.setState({
            variables_isRequired: !this.state.variables_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            variables_variableName: this.state.variables_variableName,
            variables_category: this.state.variables_category,
            variables_crfDataType: this.state.variables_crfDataType,
            variables_valueLowerLimit: this.state.variables_valueLowerLimit,
            variables_valueUpperLimit: this.state.variables_valueUpperLimit,
            variables_units: this.state.variables_units,
            variables_description: this.state.variables_description,
            variables_formName: this.state.variables_formName,
            variables_isRequired: this.state.variables_isRequired
        };
        axios.post('http://localhost:8001/variables/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <p>Welcome to Edit Form</p> {/* Admin can write, update, or delete the variable*/}
            </div>
        )
    }
}
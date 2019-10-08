import React, {Component} from 'react';
import axios from 'axios';

export default class FormList extends Component {
    constructor(props) {
        super(props);
        this.state = {variables: []};
    }
    componentDidMount() {
        axios.get('http://localhost:8001/variables/')
            .then(response => {
                this.setState({variables: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:8001/variables/')
        .then(response => {
            this.setState({variables: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })   
    }
    render() {
        return (
            <div>
                <p>Welcome to Form List</p>{/* Admin can Read all the variables */}
            </div>
        )
    }
}
import React, { Component } from 'react';
import Form from './components/ClinicalForm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EditForm from "./components/EditForm";
import FormList from "./components/FormList";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          {/* Options to redirect to page where admin can read update or delete the Variables */}
          <nav className="title Page">
            <h2 className="title">Clinical Form</h2>
            <div className="nav-items">
              <ul>
                <li> <Link to="/" >Form List</Link> </li>
                <li> <Link to="/edit" >Edit</Link> </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={FormList} />
          <Route path="/edit" component={EditForm} />
          <Form/>
        </div>
      </Router>
      
    );
  }
}

export default App;

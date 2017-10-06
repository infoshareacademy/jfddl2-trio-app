import React, { Component } from 'react';
import './App.css';
import PeopleView from "./PeopleView/PeopleView";
import {
    BrowserRouter as Router,

} from 'react-router-dom'
import {
    Grid
} from 'react-bootstrap'


class App extends Component {
  render() {
    return (
      <Router>
          <Grid>
            <PeopleView/>
          </Grid>
      </Router>
    );
  }
}

export default App;

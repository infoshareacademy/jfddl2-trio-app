import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import {
    Grid
} from 'react-bootstrap'

import Person from './Person'
import PersonDetails from "./Person/PersonDetails";


class App extends Component {
  render() {
    return (
        <Router>
            <Grid>
                <Person/>
            </Grid>
        </Router>
    );
  }
}

export default App;

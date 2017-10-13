import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import {
    Grid
} from 'react-bootstrap'

import PersonDetails from "./PersonDetails";


class App extends Component {
  render() {
    return (
        <Router>
            <Grid>
                <Route path="/PersonDetails/:id" component={PersonDetails}/>
            </Grid>
        </Router>
    );
  }
}

export default App;

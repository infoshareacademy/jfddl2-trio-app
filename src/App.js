import React, { Component } from 'react';
import './App.css';
import PeopleView from "./PeopleView";
import {
    BrowserRouter as Router, Route,

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
              <Route exact path="/PeopleView" component={PeopleView}/>
              <Route path="/PersonDetails/:personId" component={PersonDetails}/>
          </Grid>
      </Router>
    );
  }
}

export default App;

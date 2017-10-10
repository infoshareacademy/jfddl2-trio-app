import React, { Component } from 'react';
import './App.css';
import PeopleView from "./PeopleView/PeopleView";
import {
    BrowserRouter as Router, Route,

} from 'react-router-dom'
import {
    Grid
} from 'react-bootstrap'
import PersonDetails from "./PersonDetails/PersonDetails";


class App extends Component {
  render() {
    return (
      <Router>
          <Grid>
              <Route exact path="/peopleView" component={PeopleView}/>
              <Route path="/peopleView/:personId" component={PersonDetails}/>
            <PeopleView/>
          </Grid>
      </Router>
    );
  }
}

export default App;

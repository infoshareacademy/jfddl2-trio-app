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
import ShareButton from "./ShareButton"


class App extends Component {
  render() {
    return (
      <Router>
          <Grid>

              <Route exact path="/" component={PeopleView}/>
              <Route path="/PersonDetails/:personId" component={PersonDetails}/>
              <Route exact path ="/ShareButton" component ={ShareButton}/>
          </Grid>
      </Router>
    );
  }
}

export default App;

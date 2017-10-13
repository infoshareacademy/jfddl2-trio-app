import React, { Component } from 'react';
import {
    BrowserRouter as Router,

} from 'react-router-dom'
import {
    Grid
} from 'react-bootstrap'

import GroupsView from './GroupsView'

class App extends Component {
  render() {
    return (
      <Router>
          <Grid>
              App
              <GroupsView/>
          </Grid>
      </Router>
    );
  }
}

export default App;

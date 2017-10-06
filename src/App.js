import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import {
    Grid
} from 'react-bootstrap'

import GroupsView from './GroupsView'

class App extends Component {
  render() {
    return (
      <div>
          App
          <GroupsView/>
      </div>
    );
  }
}

export default App;

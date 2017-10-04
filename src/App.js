import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateGroupView from "./CreateGroupView";
import CreatePersonView from "./CreatePersonView";
import PeopleView from "./PeopleView";
import GroupsView from "./GroupsView";
import PersonDetails from "./PersonDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <CreateGroupView/>
          <CreatePersonView/>
          <PeopleView/>
          <GroupsView/>
          <PersonDetails/>
      </div>
    );
  }
}

export default App;

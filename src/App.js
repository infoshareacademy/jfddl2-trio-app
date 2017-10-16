import React, {Component} from 'react';
import './App.css';
import PeopleView from "./PeopleView";

import PersonDetails from "./PersonDetails";
import ShareButton from "./ShareButton"

import {
    BrowserRouter as Router, Route

} from 'react-router-dom'
import {
    Grid
} from 'react-bootstrap'

import GroupsView from './GroupsView'
import MainMenu from './MainMenu'
import Form from './Form'

class App extends Component {
    render() {
        return (
            <Router>
                <Grid>
                    <MainMenu/>
                    <Route exact path="/" component={PeopleView}/>
                    <Route path="/PersonDetails/:id" component={PersonDetails}/>
                    <Route exact path="/ShareButton" component={ShareButton}/>
                    <Route exact path='/GroupsView' component={GroupsView}/>
                    <Route exact path="/Form" component={Form}/>
                </Grid>
            </Router>
        );
    }
}

export default App;

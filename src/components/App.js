import React, {Component} from 'react';
import './App.css';
import PeopleView from "./PeopleView";

import PersonDetails from "./PersonDetails/index";
import ShareButton from "./ShareButton/index"

import {
    BrowserRouter as Router, Route

} from 'react-router-dom'
import {
    Grid
} from 'react-bootstrap'

import GroupsView from './GroupsView/index'
import MainMenu from './MainMenu/index'
import Form from './Form/index'
import Favorites from './Favorites/index'

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
                    <Route exact path="/FavoritesTable" component={Favorites}/>
                </Grid>
            </Router>
        );
    }
}

export default App;

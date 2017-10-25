import React from 'react'
import { connect } from 'react-redux'
import {
    Navbar,
    Nav,
    NavItem
} from 'react-bootstrap'
import {
    withRouter
} from 'react-router-dom'
import {
    LinkContainer
} from 'react-router-bootstrap'

import { signOut } from '../../state/auth'
import ShareButton from "../ShareButton/ShareButton";


const MainMenu = props => (
    <Navbar>
        <Nav>
            <LinkContainer exact to="/">
                <NavItem>Użytkownicy</NavItem>
            </LinkContainer>
            <LinkContainer to="/GroupsView">
                <NavItem>Grupy</NavItem>
            </LinkContainer>
            <LinkContainer to="/AddPeopleForm">
                <NavItem>Dodaj użytkownika</NavItem>
            </LinkContainer>
            <LinkContainer to="/FavoritesTable">
                <NavItem>Ulubione</NavItem>
            </LinkContainer>

            <NavItem onClick={props.signOutHelper}>Sign out</NavItem>

        </Nav>
    </Navbar>
)

const mapDispatchToProps = dispatch => ({
    signOutHelper: () => dispatch(signOut())
})

export default withRouter(connect(
    null,
    mapDispatchToProps
)(MainMenu))
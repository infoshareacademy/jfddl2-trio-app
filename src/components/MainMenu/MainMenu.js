import React from 'react'
import { connect } from 'react-redux'
import {
    Navbar,
    Nav,
    NavItem
} from 'react-bootstrap'
import {
    LinkContainer
} from 'react-router-bootstrap'

import { signOut } from '../../state/auth'


const MainMenu = props => (
    <Navbar>
        <Nav>
            <LinkContainer to="/">
                <NavItem>Użytkownicy</NavItem>
            </LinkContainer>
            <LinkContainer to="/GroupsView">
                <NavItem>Grupy</NavItem>
            </LinkContainer>
            <LinkContainer to="/Form">
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

export default connect(
    null,
    mapDispatchToProps
)(MainMenu)
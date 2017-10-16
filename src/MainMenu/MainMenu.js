import React from 'react'
import {
    Navbar,
    Nav,
    NavItem,
} from 'react-bootstrap'

import {
    LinkContainer
} from 'react-router-bootstrap'


const MainMenu = () => (
    <Navbar>
        <Nav>
            <LinkContainer to="/">
                <NavItem>People</NavItem>
            </LinkContainer>
            <LinkContainer to="/GroupsView">
                <NavItem>Groups</NavItem>
            </LinkContainer>
            <LinkContainer to="/Form">
                <NavItem>Add</NavItem>
            </LinkContainer>
            <LinkContainer to="/FavoritesTable">
                <NavItem>Favorites</NavItem>
            </LinkContainer>
        </Nav>
    </Navbar>
)

export default MainMenu
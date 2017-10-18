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
        </Nav>
    </Navbar>
)

export default MainMenu
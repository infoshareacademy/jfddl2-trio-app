import React from 'react'
import {Table, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap'

class PersonDetails extends React.Component {

    state = {
        persons: [],
        savePersons: JSON.parse(localStorage.getItem('addedPersons')) || [],
        finalPerson: null,
        favourites: JSON.parse(localStorage.getItem('favourites')) || []
    }

    componentDidMount() {
        fetch
        (`${process.env.PUBLIC_URL}/data/MOCK_DATA.json`)
            .then(
                response => response.json()
            ).then(
            persons => {
                console.log(persons, this.props.match.params.id);
                persons = persons.concat(this.state.savePersons);
                persons = persons.filter((person) => {
                    return person.id === parseInt(this.props.match.params.id)
                });
                this.setState({persons: persons, finalPerson: persons[0]})
            }
        )
    }
    buttonAddToGroup = (event) => {
        event.preventDefault()
        console.log("dsdd")
        this.setState({
            favourites: this.state.favourites.concat(this.state.finalPerson)
        }, () => {
            localStorage.setItem('favourites', JSON.stringify(this.state.favourites));
        });
    }

    render() {
        return (
            <div>
                {this.state.finalPerson ? <div>

                        <Table striped bordered condensed hover style={{
                                        marginTop: 50
                                    }}>

                                        <thead>
                                    <tr>
                                            <th>Imię</th>
                                            <th>Nazwisko</th>
                                            <th>Profesja</th>
                                            <th>Wiek</th>
                                            <th>Adres</th>
                                            <th>Adres email</th>
                                            <th>Telefon</th>
                                        </tr>
                                    </thead>
                            <tr>
                                <td>

                            {this.state.finalPerson.id}


                            <td>{this.state.finalPerson.last_name}</td>
                            <td>{this.state.finalPerson.email}</td>
                            <td>{this.state.finalPerson.phone}</td>
                            <td>{this.state.finalPerson.proffesion}</td>
                                </td>
                            </tr>


                        </Table>
                    <button onClick={this.buttonAddToGroup}>Dodaj</button>

                    </div>
                    : 'Ładowanie..'}
            </div>

        )
    }
}


export default PersonDetails
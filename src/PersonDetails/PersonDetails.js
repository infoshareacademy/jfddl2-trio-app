import React from 'react'
import {Table, ButtonToolbar, ButtonGroup, Button, Image} from 'react-bootstrap'
class PersonDetails extends React.Component {
    state = {
        persons: [],
        savePersons: JSON.parse(localStorage.getItem('addedPersons')) || [],
        finalPerson: null,
        personGroup: JSON.parse(localStorage.getItem('personGroup')) || [],
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
        console.log("dodaj do grupy")
        this.setState({
            personGroup: this.state.personGroup.concat(this.state.finalPerson)
        }, () => {
            localStorage.setItem('personGroup', JSON.stringify(this.state.personGroup));
        });
    }
    buttonAddToFavourites = (event) => {
        event.preventDefault()
        console.log("ulubione")
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
                        <h1>Informacje o pracowniku</h1>
                        <Image src="facet.jpeg" style={{width: 200, height: 300}}/>
                        <Table striped bordered condensed hover style={{
                            marginTop: 50
                        }}>
                            <thead>
                            <tr>
                                <th>Imię</th>
                                <th>Nazwisko</th>
                                <th>Wiek</th>
                                <th>Profesja</th>
                                <th>Adres</th>
                                <th>Email</th>
                                <th>Telefon</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{this.state.finalPerson.first_name}</td>
                                <td>{this.state.finalPerson.last_name}</td>
                                <td>{this.state.finalPerson.age}</td>
                                <td>{this.state.finalPerson.proffesion}</td>
                                <td>{this.state.finalPerson.adress}</td>
                                <td>{this.state.finalPerson.email}</td>
                                <td>{this.state.finalPerson.phone}</td>
                            </tr>
                            </tbody>
                        </Table>
                        <button onClick={this.buttonAddToGroup}>Dodaj</button>
                        <button style ={{background: 'yellow'}} onClick={this.buttonAddToFavourites}>Dodaj do ulubionych</button>
                    </div>
                    : 'Ładowanie..'}
            </div>
        )
    }
}
export default PersonDetails
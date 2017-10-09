import React from 'react';
import { Table, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'

class PersonDetails extends React.Component {
    render() {
        const personId = this.props.personId
        const persons = this.props.collections.persons.data
        const person = persons && persons.find(
            person => personId === person.id
        )

        return (
            person === null ?
                <div>No data yet</div> :
                <div>
                    <h1>Informacje o pracowniku</h1>
                    <div>
                        <h2>{person.name}</h2>

                    </div>
                    <img src={ require('./facet.jpeg')} style= {{width: 300, height: 200}} />
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
                        <tbody>

                                    <tr>
                                        <td>
                                            {person.first_name}
                                        </td>
                                        <td>
                                            {person.last_name}
                                        </td>
                                        <td>
                                            {person.proffesion}
                                        </td>
                                        <td>
                                            {person.age}

                                        </td>
                                        <td>
                                            {person.adress}
                                        </td>
                                        <td>
                                            {person.email},
                                        </td>
                                        <td>
                                            {person.phone}
                                        </td>
                                    </tr>
                        </tbody>
                    </Table>
                </div>
        )
    }
}

export default PersonDetails
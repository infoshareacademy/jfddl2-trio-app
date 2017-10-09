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


                    <Table striped bordered condensed hover style={{
                        marginTop: 50
                    }}>
                        <thead>
                        <tr>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                            <th>Profesja</th>
                            <th>Doświadczenie</th>
                            <th>Wiek</th>
                            <th>Kontakt</th>
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
                                            {person.name}
                                        </td>
                                        <td>
                                            {person.name}
                                        </td>
                                        <td>
                                            {person.name}
                                        </td>
                                        <td>
                                            {person.name}
                                        </td>
                                    </tr>
                        </tbody>

                    </Table>
                </div>

        )

    }
}

export default PersonDetails
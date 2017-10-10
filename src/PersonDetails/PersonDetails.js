import React from 'react'
import {Table} from 'react-bootstrap'

class PersonDetails extends React.Component {
    render() {
        const personId = this.props.personId
        const persons = this.props.collections.person.data
        const person = persons && persons.find(
            person => personId === person.id
        )
        console.log(person)
        return (
            person === null ?
                <div>No data yet</div> :
                <div>
                    <Table striped bordered condensed hover style={{
                        marginTop: 20
                    }}>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>first_name</th>
                            <th>last_name</th>
                            <th>city</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>{person.id}</th>
                            <th>{person.first_name}</th>
                            <th>{person.last_name}</th>
                            <th>{person.city}</th>
                        </tr>
                        </tbody>
                    </Table>


                </div>
        )
    }
}

export default PersonDetails
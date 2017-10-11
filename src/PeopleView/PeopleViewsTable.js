import React from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'


class PeopleViewsTable extends React.Component {

    render() {
        const search = this.props.currentSearchPhrase || ''
        const data = this.props.collections.people.data || [];
        return (
            <div>
                <Table striped bordered condensed hover style={{
                    marginTop: 20
                }}>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Proffesion</th>
                        <th>City</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data && data.filter(
                            people =>
                                (
                                    people.first_name.toLowerCase().includes(search.toLowerCase())

                                    ||

                                    people.last_name.toLowerCase().includes(search.toLowerCase())

                                    ||

                                    people.proffesion.toLowerCase().includes(search.toLowerCase())

                                    ||

                                    people.city.toLowerCase().includes(search.toLowerCase())

                                )).map(
                            people =>
                                <tr key={people.id}>
                                    <td>
                                        {people.first_name}
                                    </td>
                                    <td>
                                        {people.last_name}
                                    </td>
                                    <td>
                                        {people.proffesion}
                                    </td>
                                    <td>
                                        {people.city}
                                    </td>
                                    <td>
                                        <Link to={'/PersonDetails/' + people.id}>open</Link>
                                    </td>
                                </tr>
                        )


                    }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default PeopleViewsTable
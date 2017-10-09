import React from 'react'
import data from '../MOCK_DATA.json'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'


class PeopleViewsTable extends React.Component {
    render() {
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
                        data.map(
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
                                        <Link to={'/PeopleView/' + people.id}>open</Link>
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
import React from 'react'
import {Table} from 'react-bootstrap'

class PeopleViewsTable extends React.Component {
    render() {
        return (
            <div>
                <Table striped bordered condensed hover style={{
                    marginTop: 20
                }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Proffesion</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Adress</th>
                        </tr>
                    </thead>
                    <tbody>

                    {this.props.people}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default PeopleViewsTable
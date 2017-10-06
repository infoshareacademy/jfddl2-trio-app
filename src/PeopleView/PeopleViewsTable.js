import React from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'


class PeopleViewsTable extends React.Component {
    render() {
        const { people: { data } } = this.props.collections
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

                    </tbody>
                </Table>
            </div>
        )
    }
}
export default PeopleViewsTable
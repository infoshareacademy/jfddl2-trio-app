import React, {Component} from 'react';
import {Table} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

class GroupsViewTable extends Component {
    state = {collections: []}

    componentWillMount() {
        console.log('tasker will mount')
        this.setState({
            collections: JSON.parse(
                localStorage.getItem('userId')
            )
        })
    }

    handleRemoveTaskClick = (id) => {
        console.log('handleRemoveTaskClick', id)
    }

    render() {
        const data = this.state.collections
        return (
            <div>
                <Table striped bordered condensed hover style={{marginTop: 20}}>
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
                            person =>

                                <tr key={person.id}>
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
                                        {person.city}
                                    </td>
                                    <td>
                                        {/*<Button to={'/GroupsView/' + person.id}>Delete</Button>*/}
                                        <Button
                                            onClick={() => {
                                                this.handleRemoveTaskClick(person.id)
                                            }}
                                        >
                                            delete
                                        </Button>
                                    </td>
                                </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default GroupsViewTable;
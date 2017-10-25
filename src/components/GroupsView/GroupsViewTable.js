import React, {Component} from 'react';
import {Table} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Link} from 'react-bootstrap'

class GroupsViewTable extends Component {
    state = {collections: []}

    componentWillMount() {
        this.setState({
            personGroup: JSON.parse(localStorage.getItem('personGroup')) || [],
        })
    }

    handleRemoveTaskClick = (id) => {
        console.log('handleRemoveTaskClick', id);
        //
        // console.log( this.state.collections);
        // delete this.state.collections[id];
        // console.log( this.state.collections[id]);
        this.setState({collections: this.state.collections})
    }

    render() {
        const data = this.state.collections
        return (
            <div>
                <Table striped bordered condensed hover style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Profesja</th>
                        <th>Miasto</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.personGroup.map(
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
                                                this.handleRemoveTaskClick(data)
                                            }}
                                        >
                                            Usuń
                                        </Button>
                                    </td>
                                    <td>
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
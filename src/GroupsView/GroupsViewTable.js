import React, {Component} from 'react';
import {Table} from 'react-bootstrap'
import { Button } from 'react-bootstrap'

class GroupsViewTable extends Component {

    handleRemoveTaskClick = ()=>{

    }

    render() {
        console.log(this.props);
        const data = this.props.collections ? this.props.collections.person.data : []
        return (
            <div>
                <Table striped bordered condensed hover style={{ marginTop:20}}>
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
                            // dodawanie po czym mamy szukac
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
                                        <Button to={'/GroupsView/' + person.id}>Delete</Button>
                                        {/*<Button*/}
                                            {/*data-task-id={GroupsView.id}*/}
                                            {/*onClick={this.handleRemoveTaskClick}*/}
                                        {/*>*/}
                                            {/*delete*/}
                                        {/*</Button>*/}
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
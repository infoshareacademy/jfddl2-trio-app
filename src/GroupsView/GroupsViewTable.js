import React, {Component} from 'react';
import {Table} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

class GroupsViewTable extends Component {
    state = {collections: []}

    componentWillMount() {
        this.setState({
            collections: JSON.parse(localStorage.getItem('userId')) || [
                {"id":18,"first_name":"Vina","last_name":"Greer","email":"vgreerh@google.com.hk","phone":"2261756642","proffesion":"Programmer Analyst III","age":32,"city":"Wrocław","adress":"6 Dovetail Center"},
                {"id":19,"first_name":"Johna","last_name":"Nettles","email":"jnettlesi@cyberchimps.com","phone":"2345663175","proffesion":"Recruiting Manager","age":74,"city":"Lublin","adress":"5 Sugar Crossing"},
            ],
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
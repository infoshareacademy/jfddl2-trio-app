import React from 'react'
import {Table} from 'react-bootstrap'

class PersonDetails extends React.Component {


    componentWillMount() {

        fetch(`${process.env.PUBLIC_URL}/data/MOCK_DATA.json`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log('fetched',  data);
            })

    }

    render() {
        const id = this.props.match.params.personId;
        return (
            <div>
                <Table striped bordered condensed hover style={{
                    marginTop: 20
                }}>
                    <thead>
                    <tr>
                        <th>imie</th>
                        <th>nazwisko</th>
                        <th>profesja</th>
                        <th>miasto</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                            person =>
                                <tr key={person.id}>
                                    <th>{person.first_name}</th>
                                    <th>{person.last_name}</th>
                                    <th>{person.proffesion}</th>
                                    <th>{person.city}</th>
                                </tr>
                    }
                    </tbody>
                </Table>


            </div>
        )
    }
}

export default PersonDetails
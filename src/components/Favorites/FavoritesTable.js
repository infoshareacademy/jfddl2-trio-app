import React from 'react'
import {Table} from 'react-bootstrap'
import {connect} from 'react-redux'

class FavoritesTable extends React.Component {


    render() {
        const data = this.props.data || [];
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
                        data && data.filter(
                            person => person.isFavorite === true
                        ).map(
                            person => (
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
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.people.data
})

export default connect(
    mapStateToProps
)(FavoritesTable)
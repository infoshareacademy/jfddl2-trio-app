import React from 'react'
import {Table} from 'react-bootstrap'

class PersonDetails extends React.Component {

    componentWillMount() {
        const id = this.props.match.params.personId;

        fetch(`${process.env.PUBLIC_URL}/data/MOCK_DATA.json`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log('fetched',  data);
            })

    }

    render() {
        return (
            <div>
                PersonDetails
            </div>
        )
    }
}

export default PersonDetails
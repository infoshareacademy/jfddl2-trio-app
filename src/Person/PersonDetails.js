import React from 'react';

class PersonDetails extends React.Component {
    render() {
        const personId = this.props.personId
        const persons = this.props.collections.persons.data
        const person = persons && persons.find(
            person => personId === person.id
        )

        return (
            person === null ?
                <div>No data yet</div> :
                <div>
                    <h2>person</h2>
                </div>
        )
    }
}

export default PersonDetails
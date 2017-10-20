import React from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'


class Person extends React.Component {

    render() {
        const personId = this.props.match.params.personId
        const person = (this.props.data || []).find(person => person.id === personId);

        if (person === undefined) {
            return null
        }

        return (
            <div>
                {person.first_name}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.people.data
})

export default connect(
    mapStateToProps
)(Person)
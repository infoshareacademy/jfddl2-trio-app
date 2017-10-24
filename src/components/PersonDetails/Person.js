import React from 'react'

import {connect} from 'react-redux'
import { Button } from 'react-bootstrap'

import {toggleFav} from '../../state/person'


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
                <img src={person.photo}/>
                <Button
                    data-person-id={person.id}
                    onClick={toggleFav}
                >
                    {
                        person.isFavorite ?
                            'Usuń z ulubionych' :
                            'Dodaj do ulubionych'
                    }
                </Button>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.people.data
})
const mapDispatchToProps = dispatch => ({
    toggleFav: event => dispatch(
        toggleFav(
            event.target.dataset.personId
        )
    )
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Person)
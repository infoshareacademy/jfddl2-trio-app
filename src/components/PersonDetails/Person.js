import React from 'react'

import {connect} from 'react-redux'
import { Button } from 'react-bootstrap'

import {toggleFav, toggleGroupInUser} from '../../state/person'


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
                    onClick={()=>this.props.toggleFav(person.id)}>
                    {
                        person.isFavorite ?
                            'Usuń z ulubionych' :
                            'Dodaj do ulubionych'
                    }
                </Button>

                <br/>
                <br/>
                <br/>

                <ul>
                    {this.props.groups && this.props.groups.map((group)=>{
                        return <li onClick={()=>{this.props.toggleGroupInUser(person.id , group.key)}}>
                            {person.groups && person.groups.includes(group.key) ? 'X ' : ''}
                            {group.name}
                            </li>
                })}
                </ul>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.people.data,
    groups: state.groups.data
})

const mapDispatchToProps = dispatch =>({
    toggleFav: id => dispatch(toggleFav(id)),
    toggleGroupInUser: (userId, groupId) => dispatch(toggleGroupInUser(userId, groupId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Person)
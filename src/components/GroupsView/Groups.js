import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {deleteGroup} from '../../state/groups'
import {Link} from 'react-router-dom'

const Groups = (props) => (
    <div>
        <ul>
            {
                props.groups && props.groups.map(
                    group => (
                        <li key={group.key}>
                            <Link to={`/people/${group.key}`}>
                                {group.name}
                            </Link>
                            <Button onClick={() => props.deleteGroup(group.key)}>
                                Usuń grupę
                            </Button>
                        </li>
                    )
                )
            }
        </ul>
    </div>
)

const mapDispatchToProps = dispatch => ({
    deleteGroup: id => dispatch(deleteGroup(id))
})

const mapStateToProps = state => ({
    groups: state.groups.data
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Groups)
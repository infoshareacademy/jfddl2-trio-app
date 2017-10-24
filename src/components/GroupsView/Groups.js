import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import {deleteGroup} from '../../state/groups'

const Groups = (props) => (
    <div>
        <ul>
            {
                props.groups && props.groups.map(
                    group => <li key={group.key}>{group.name}<Button
                        data-group-id={group.key}
                        onClick={()=>props.deleteGroup(group.key)}
                    >usun</Button></li>
                )
            }
        </ul>
    </div>
)

const mapDispatchToProps = dispatch =>({
    deleteGroup: id => dispatch(deleteGroup(id))
})

const mapStateToProps = state => ({
    groups: state.groups.data
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Groups)
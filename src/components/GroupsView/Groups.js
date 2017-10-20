import React from 'react'
import { connect } from 'react-redux'

const Groups = ({groups}) => (
    <div>
        <ul>
            {
                groups && groups.map(
                    group => <li key={group.id}>{group.name}</li>
                )
            }
        </ul>
    </div>
)

const mapStateToProps = state => ({
    groups: state.groups.data
})

export default connect(
    mapStateToProps
)(Groups)
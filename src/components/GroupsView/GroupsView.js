import React from 'react'
import GroupsViewTable from "./GroupsViewTable"
import AddGroupForm from './AddGroupForm'
import Groups from './Groups'

class GroupsView extends React.Component {

    render() {
        return(
            <div>
                <GroupsViewTable />
                <AddGroupForm/>
                <Groups/>
            </div>
        )
    }
}
export default GroupsView


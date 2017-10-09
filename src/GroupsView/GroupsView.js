import React from 'react'
import GroupsViewTable from "./GroupsViewTable"
import DataFetcher from "../DataFetcher/DataFetcher"

class GroupsView extends React.Component {

    render() {
        return(
            <div>
            <DataFetcher collections={{
                person: {
                    url: `${process.env.PUBLIC_URL}/data/MOCK_DATA.json`,
                    label: 'Person'
                }
            }}>
                <GroupsViewTable />
            </DataFetcher>
            </div>
        )
    }
}
export default GroupsView


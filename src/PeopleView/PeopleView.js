import React from 'react'
import PeopleViewsTable from "./PeopleViewsTable";
import DataFetcher from "../DataFetcher/DataFetcher";
import'./PeopleView.css'

class PeopleViews extends React.Component {

    render() {

        return (
            <div>
                <h1>People</h1>

                <DataFetcher collections={{
                    people: {
                        url: `${process.env.PUBLIC_URL}/data/MOCK_DATA.json`,
                        label: 'People'
                    }
                }}>
                    <PeopleViewsTable/>
                </DataFetcher>
            </div>
        );
    }
}

export default PeopleViews;
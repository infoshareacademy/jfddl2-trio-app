import React from 'react'
import PeopleViewsTable from "./PeopleViewsTable";
import DataFetcher from "../DataFetcher/DataFetcher";
import './PeopleView.css'
import PeopleSearchForm from './PeopleSearchForm'

class PeopleViews extends React.Component {
    handleChange = () => {
        console.log('Ala ma kota')
    }

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
                    <PeopleSearchForm handleChange={this.handleChange}/>
                    <PeopleViewsTable/>
                </DataFetcher>
            </div>
        );
    }
}

export default PeopleViews;
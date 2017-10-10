import React from 'react'
import PeopleViewsTable from "./PeopleViewsTable";
import DataFetcher from "../DataFetcher/DataFetcher";
import './PeopleView.css'
import PeopleSearchForm from './PeopleSearchForm'

class PeopleViews extends React.Component {

    state = {
        activeFilterNames: [],
        currentSearchPhrase: ''
    }

    handleSearchPhraseChange = event => {
        this.setState({
            currentSearchPhrase: event.target.value
        })
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
                    <PeopleSearchForm
                        handleChange={this.handleSearchPhraseChange}
                        currentSearchPhrase={this.state.currentSearchPhrase}

                    />
                    <PeopleViewsTable
                        currentSearchPhrase={this.state.currentSearchPhrase}
                    />
                </DataFetcher>
            </div>
        );
    }
}

export default PeopleViews;
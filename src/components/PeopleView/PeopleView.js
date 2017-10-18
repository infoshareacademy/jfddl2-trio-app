import React from 'react'
import PeopleViewsTable from "./PeopleViewsTable";
import './PeopleView.css'
import PeopleSearchForm from './PeopleSearchForm'
import ShareButton from "../ShareButton/ShareButton";

class PeopleView extends React.Component {

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
                <h1>Użytkownicy</h1>
                    <ShareButton/>

                    <PeopleSearchForm
                        handleChange={this.handleSearchPhraseChange}
                        currentSearchPhrase={this.state.currentSearchPhrase}

                    />
                    <PeopleViewsTable
                        currentSearchPhrase={this.state.currentSearchPhrase}
                    />

            </div>
        );
    }
}

export default PeopleView;
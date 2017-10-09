import React from 'react'

class Search extends React.Component {

    handleChange = event => {

    }

    handleSearchPhraseChange = event => {
        this.setState({
            currentSearchPhrase: event.target.value
        })
    }

    render() {
    }
}

export default Search
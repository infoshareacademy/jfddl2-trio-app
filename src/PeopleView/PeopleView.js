import React from 'react'
import PeopleViewsTable from "./PeopleViewsTable";

class PeopleViews extends React.Component {

    state = {
        people: null,
        fetching: false,
        error: null
    }
    componentDidMount() {
        this.setState({
            fetching: true
        })

        fetch(
            `${process.env.PUBLIC_URL}/data/MOCK_DATA.json`
        ).then(
            response => response.json()
        ).then(
            peopleViews => this.setState({ peopleViews, fetching: false })
        ).catch(
            error => this.setState({ error, fetching: false })
        )
    }

    render() {

        return (
            <div>
                <h1>PeopleViews</h1>
                <PeopleViewsTable people={this.state.people}/>
            </div>
        );
    }
}

export default PeopleViews;
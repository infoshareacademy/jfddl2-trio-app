import React from 'react'

class PeopleView extends React.Component {

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
            peopleView => this.setState({ peopleView, fetching: false })
        ).catch(
            error => this.setState({ error, fetching: false })
        )
    }

    render() {

        return (
            <div>

            </div>
        );
    }
}

export default PeopleView;
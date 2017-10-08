import React from 'react'
import DataFetcher from '../DataFetcher/index'
import PersonDetails from './PersonDetails'

class Person extends React.Component {
    render() {
        const personId = parseInt(
            // this.props.match.params.personId,
            '1',
            10
        )

        return (
            <div>
                <h1>Person</h1>
                <DataFetcher collections={{
                    persons: {
                        url: `${process.env.PUBLIC_URL}data/MOCK_DATA.json`,
                        label: 'Person'
                    }
                }}>
                    <PersonDetails personId={personId}/>
                </DataFetcher>
            </div>
        )
    }
}


export default Person
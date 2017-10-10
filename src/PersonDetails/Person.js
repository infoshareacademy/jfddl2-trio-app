import React from 'react'
import DataFetcher from "../DataFetcher/DataFetcher";
import StudentDetails from "./PersonDetails";


class Person extends React.Component{
    render(){
        const personId = parseInt(
            this.props.match.params.personId,
            10
        )
        return(
            <div>
                <h1>Person</h1>

                <DataFetcher collections={{
                    person: {
                        url: `${process.env.PUBLIC_URL}/data/MOCK_DATA.json`,
                        label: 'Person'
                    }
                }}>
                    <StudentDetails personId={personId}/>
                </DataFetcher>
            </div>
        )
    }
}
export default Person
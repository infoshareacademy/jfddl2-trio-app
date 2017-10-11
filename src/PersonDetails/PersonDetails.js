import React from 'react'

class PersonDetails extends React.Component {

    componentWillMount() {
        const id = this.props.match.params.personId;
console.log(id)
        fetch(`${process.env.PUBLIC_URL}/data/MOCK_DATA.json`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log('fetched',  data);
            })

    }

    render() {
        return (
            <div>
                asdasd
            </div>
        )
    }
}

export default PersonDetails
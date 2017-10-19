import React from 'react'
import { connect } from 'react-redux'

import { addPeopleTask } from '../../state/people'


class AddTaskForm extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        proffesion: '',
        city: ''
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    handleSubmit = event => {
        event.preventDefault()
        this.props.addPeopleHelper(this.state)
    }
    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <input
                    name="first_name"
                    type="text"
                    value={this.state.first_name}
                    onChange={this.handleChange}
                    placeholder="First name"
                />
                <input
                    name="last_name"
                    type="text"
                    value={this.state.last_name}
                    onChange={this.handleChange}
                    placeholder="Last name"
                />
                <input
                    name="proffesion"
                    type="text"
                    value={this.state.proffesion}
                    onChange={this.handleChange}
                    placeholder="Proffesion"
                />
                <input
                    name="city"
                    type="text"
                    value={this.state.city}
                    onChange={this.handleChange}
                    placeholder="City"
                />

                <button>
                    Zapisz użytkownika
                </button>
            </form>

        )
    }
}



const mapDispatchToProps = dispatch => ({
    addPeopleHelper: content => dispatch(addPeopleTask(content))
})

export default connect(
    null,
    mapDispatchToProps
)(AddTaskForm)
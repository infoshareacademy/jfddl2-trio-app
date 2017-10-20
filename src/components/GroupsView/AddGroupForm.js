import React from 'react'
import { connect } from 'react-redux'

import { addGroupTask } from '../../state/groups'


class AddGroupForm extends React.Component {

    state = {
        name: ''
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    handleSubmit = event => {
        event.preventDefault()
        this.props.addGroupHelper(this.state)
    }
    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <input
                    name="name"
                    type="text"
                    value={this.state.first_name}
                    onChange={this.handleChange}
                    placeholder="name"
                />

                <button>
                    Zapisz grupe
                </button>
            </form>

        )
    }
}



const mapDispatchToProps = dispatch => ({
    addGroupHelper: content => dispatch(addGroupTask(content))
})

export default connect(
    null,
    mapDispatchToProps
)(AddGroupForm)
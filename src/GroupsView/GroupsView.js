import React, { Component } from 'react';
import data from '../MOCK_DATA.json'

class GroupsView extends Component {
    render() {
        return (
            <div>
                GroupsViews
                {
                    data.map(
                        // dodawanie po czym mamy szukac
                        person => <p>{person.first_name}</p>
                    )
                }
            </div>
        );
    }
}

export default GroupsView;
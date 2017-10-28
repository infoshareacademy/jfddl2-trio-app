import {database} from '../firebase'

// action type


// action creator

export const toggleGroupInUser = (userId, groupId) => (dispatch, getState) => {
    console.log('toggleGroupInUser', userId, groupId)
    const person = getState().people.data.find(person => parseInt(person.id, 10) === parseInt(userId, 10))
    if (person.groups && person.groups.includes(groupId))
        database().ref(`/people/${userId}/groups/${person.groups.indexOf(groupId)}`).set(null)
    else
        database().ref(`/people/${userId}/groups/${person.groups ? person.groups.length : 0}`).set(groupId)

}


export const toggleFav = id => (dispatch, getState) => {
    console.log('toggleFav', id)
    const person = getState().people.data.find(person => parseInt(person.id, 10) === parseInt(id, 10))
    database().ref('/people/' + id + '/isFavorite').set(!person.isFavorite)
}


// initial state
const initialState = {
    isFavorite: false
}

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default reducer
import { auth, database } from '../firebase'

// action type


// action creator



export const toggleFav = id => (dispatch, getState) => {
    console.log("dupa")
    const person = getState().person.find(person => person.id === id)
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
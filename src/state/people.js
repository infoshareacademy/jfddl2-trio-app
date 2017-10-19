import { database } from '../firebase'

const SET_PEOPLE = 'people/SET_PEOPLE'

const setPeople = people => ({
    type: SET_PEOPLE,
    data: people
})

export const init = () => dispatch => {
    database().ref('/people').on(
        'value',
        snapshot => {
            dispatch(setPeople(snapshot.val()))
        }
    )
}

const initialState = {
    data: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PEOPLE:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}
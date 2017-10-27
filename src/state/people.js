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
export const addPeopleTask = (content) => dispatch => {
    database().ref('/people').push(content)
}

export const deletePeople = id => dispatch => {
    // const uid = auth().currentUser.uid
    database().ref(`/people/${id}`).set(null)
}

const initialState = {
    data: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PEOPLE:
            return {
                ...state,
                data: Object.entries(action.data).map(
                    ([key, val]) => ({
                        id: key,
                        ...val
                    })
                )
            }
        default:
            return state
    }
}
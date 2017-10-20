import { database } from '../firebase'

const SET_GROUPS = 'people/SET_GROUPS'

const setGroups = people => ({
    type: SET_GROUPS,
    data: people
})

export const init = () => dispatch => {
    database().ref('/groups').on(
        'value',
        snapshot => {
            dispatch(setGroups(snapshot.val()))
        }
    )
}


export const addGroupTask = (content) => () => {
    database().ref('/groups').push(content)
}

const initialState = {
    data: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_GROUPS:
            return {
                ...state,
                data: Object.entries(action.data).map(([key, val]) => ({ key, ...val}))
            }
        default:
            return state
    }
}
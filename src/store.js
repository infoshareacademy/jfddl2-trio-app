import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux'
import thunk from 'redux-thunk'

import auth, {init as initAuth} from './state/auth'
import people, {init as initPeopleSync} from './state/people'


const reducer = combineReducers({
    auth,
    people
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(initAuth())
store.dispatch(initPeopleSync())

export default store
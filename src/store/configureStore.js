import { createStore, compose, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import rootReducer from '../reducers'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxPromise),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store

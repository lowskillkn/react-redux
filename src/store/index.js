import { createStore, combineReducers, applyMiddleware } from 'redux'
import { countReducer } from './reducers/countReducer'
import { userReducer } from './reducers/userReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  countReducer,
  userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

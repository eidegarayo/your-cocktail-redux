import { GET_CATEGORIES } from '../actions/'

export default function (state = {}, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      const newState = Object.assign({}, ...state, action.payload.data)
      return newState
    default:
      return state
  }
}

import { SELECT_INGREDIENT, RESET } from '../actions/'

export default function (state = [], action) {
  switch (action.type) {
    case SELECT_INGREDIENT:
      let newState = state
      if (!state.includes(action.payload)) {
        newState = [...state, action.payload]
      }
      return newState
    case RESET:
      return []
    default:
      return state
  }
}

import { COCKTAILS_LIST_BY_CAT, COCKTAIL_LIST_BY_INGREDIENT, RESET } from '../actions/'

export default function (state = [], action) {
  switch (action.type) {
    case COCKTAILS_LIST_BY_CAT:
      let newState = action.payload.data.drinks
      return newState
    case COCKTAIL_LIST_BY_INGREDIENT:
      newState = action.payload
      return newState
    case RESET:
      return []
    default:
      return state
  }
}

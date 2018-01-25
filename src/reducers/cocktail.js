import { COCKTAIL_DETAIL } from '../actions/'

export default function (state = {}, action) {
  switch (action.type) {
    case COCKTAIL_DETAIL:
      return action.payload.data.drinks
    default:
      return state
  }
}

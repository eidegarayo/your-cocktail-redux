import { SELECT_CATEGORY, RESET } from '../actions/'

export default function (state = '', action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.payload
    case RESET:
      return ''
  }
  return state
}

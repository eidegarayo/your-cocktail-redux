export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_INGREDIENTS':
      const newState = Object.assign({}, ...state, action.payload.data)
      return newState
    default:
      return state
  }
}

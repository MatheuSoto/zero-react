export const counterInitialState = { number: 0 }

export const counterReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, number: action.number }
    default:
      return state
  }
}

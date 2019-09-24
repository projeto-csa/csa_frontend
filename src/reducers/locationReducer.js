const reducer = (state = '', action) => {
  switch(action.type){
    case 'SET_APP_LOCATION':
      return action.location
    default:
      return state
  }
}

export default reducer

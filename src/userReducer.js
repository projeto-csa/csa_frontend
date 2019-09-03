const reducer = (initialState = null, action) => {
  switch(action.type){
    case 'SET_USER':
      return action.user
    default:
      return initialState
  }
}

export default reducer

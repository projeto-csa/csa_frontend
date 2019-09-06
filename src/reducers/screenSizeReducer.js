const reducer = (initialState = '', action) => {
  switch(action.type){
    case 'SCREEN_SIZE':
      return action.screenSize
    default:
      return initialState
  }
}
export default reducer

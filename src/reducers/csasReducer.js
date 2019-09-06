export default (state = null, action) => {
  switch(action.type){
    case "ADD_CSAS":
      return action.csas
    default:
      return state
  }
}

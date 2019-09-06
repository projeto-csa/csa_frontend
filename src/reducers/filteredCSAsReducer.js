export default (state = null, action) => {
  switch(action.type){
    case "FILTER":
      return action.csas
    default:
      return state
  }
}

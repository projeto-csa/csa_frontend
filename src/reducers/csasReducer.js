const extractRegions = (csas) =>
  csas.reduce( (prev, csa) => {
    var a = csa.specific.meetingPoints.map( meetingPoint => meetingPoint.region )
    var filtered = a.filter( element => prev.indexOf(element) < 0)
    return [...prev, ...filtered]
  }, [])

export default (state = null, action) => {
  switch(action.type){
    case "FILTER":
      return {...state, filtered: action.csas}
    case "FETCH_CSAS":
      return {
          csas: action.csas,
          filtered: action.csas,
          regions: extractRegions(action.csas)
        }
    default:
      return state
  }
}

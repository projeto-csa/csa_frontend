export const filterCSAs = csas => {
  return {
    type: "FILTER",
    csas: csas
  }
}

export const fetchCSAs = (csas) => {
  return {
    type: "FETCH_CSAS",
    csas: csas
  }
}

export const toggleDay = (day) => {
  return{
    type: "TOGGLE_DAY",
    day: day
  }
}
export const setRegions = (regions) => {
  return{
    type: "SET_REGIONS",
    regions: regions
  }
}

export const toggleRegion = (region) => {
  return{
    type: "TOGGLE_REGION",
    region: region
  }
}

export const setLocation = (location) => {
  return{
    type: "SET_APP_LOCATION",
    location: location
  }
}

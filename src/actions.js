export const filterCSAs = csas => {
  return {
    type: "FILTER",
    csas: csas
  }
}

export const addCSAs = (csas) => {
  return {
    type: "ADD_CSAS",
    csas: csas
  }
}

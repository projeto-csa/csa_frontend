import axios from 'axios'

const requestCSA = (id, handleData) => {
  axios
    .get(`http://localhost:1337/csas/${id}`)
    .then(response => {
      console.log('csa: ', response.data)
      handleData(response.data)
    })
    .catch(error => {
      console.log(error)
    })
}

const requestRoutines = (handleData) => {
  axios
    .get(`http://localhost:1337/routines`)
    .then(response => {
      console.log('rotinas: ', response.data)
      handleData(response.data)
    })
    .catch(error => {
      console.log(error)
    })
}

export { requestCSA, requestRoutines }

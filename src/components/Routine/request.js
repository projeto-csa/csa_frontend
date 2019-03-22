import axios from 'axios'

const requestData = (id, handleData) => {
  axios
    .get(`http://localhost:1337/rotinas/${id}`)
    .then(response => {
      handleData(response.data)
    })
    .catch(error => {
      console.log('Routine request: ', error)
    })
}

export default requestData

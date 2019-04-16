import axios from 'axios'

const request = (id, handleData) => {
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

export default request

import axios from 'axios'

const request = (id, handleData) => {
  axios
    .get(`http://localhost:1337/users/${id}`)
    .then( response => {
      handleData(response.data)
    })
    .catch( error => {
      console.log(error)
    })

}
export default request

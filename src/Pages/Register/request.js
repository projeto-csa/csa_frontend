import axios from 'axios'

const request = (payload, handleData) => {
  console.log("making request. payload: ", payload)
  axios
    .post('http://localhost:1337/auth/local/register', payload)
    .then(response => {
      console.log('response was: ', response.data)
      handleData(response.data)
    })
    .catch(error => {
      console.log(error)
    })
}
export default request

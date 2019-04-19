import axios from 'axios'

const request = (payload, handleData) => {
  console.log('payload: ', payload)
  axios
    .post('http://localhost:1337/auth/local', payload)
    .then(response =>{
      console.log('user: ', response.data)
      if(handleData) handleData(response.data)
    })
    .catch(error => {
      console.log(error)
    })
}

export default request

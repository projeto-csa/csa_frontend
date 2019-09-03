import axios from 'axios'

const request = (payload, handleData) => {
  axios({
    method: 'POST',
    url: 'http://localhost:1337/csas',
    headers:{
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    data: payload
  })
  .then( response => {
    console.log('created csa: ', response.data)
    handleData(response.data)
  })
  .catch( error => {
    console.log(error)
  })
}

export default request

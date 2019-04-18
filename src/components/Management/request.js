import axios from 'axios'

const request = (payload, handleData) => {
  axios({
    method: 'PUT',
    url: `http://localhost:1337/csas/${payload.id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    data: payload
  })
  .then(response => {
    console.log('variation PUT: ', response.data)
    handleData(response.data)
  })
  .catch( error => {
    console.log(error)
  })
}

export default request

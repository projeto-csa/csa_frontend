import axios from 'axios'

const request = (payload, handleData) => {
  console.log('payload', payload)
  axios({
        method: 'POST',
        url: 'http://localhost:1337/topics',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        data: payload
      })
      .then(response => {
        handleData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
}
export default request

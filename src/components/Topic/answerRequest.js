import axios from 'axios'

const answerRequest = (payload, handleData) => {
  console.log('payload', payload)
  axios({
        method: 'POST',
        url: 'http://localhost:1337/respostas',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        data: payload
      })
      .then(response => {
        console.log('resposta do POST: ', response.data)
        handleData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
}
export default answerRequest

import axios from 'axios'

const requestCSAs = (handleData) => {
  axios
    .get('http://localhost:1337/csas')
    .then( response => {
      console.log('csas: ', response.data)
      handleData(response.data)
    })
    .catch( error => {
      console.log(error)
    })
}

const requestParticipation = (payload, handleData) => {
  axios({
    method: 'PUT',
    url: `http://localhost:1337/csas/${payload.id}`,
    headers:{
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    data: payload
  })
  .then( response => {
    console.log('csa entrace: ', response.data)
    handleData(response.data)
  })
  .catch( error => {
    console.log(error)
  })
}
export { requestCSAs, requestParticipation }

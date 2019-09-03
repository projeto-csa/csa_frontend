import axios from 'axios'

const requestData = (topicId, handleData) => {
  axios
    .get(`http://localhost:1337/topics/${topicId}`)
    .then(response => {
      handleData(response.data)
    })
    .catch(error =>{
      console.log(error)
    })
}

export default requestData

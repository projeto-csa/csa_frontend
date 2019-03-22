import axios from 'axios'

const requestData = (rotinas, handleData) => {
  axios
    .get('http://localhost:1337/rotinas')
    .then(response => {
      handleData(response.data.filter((item) => rotinas.includes(item._id) ))
    })
    .catch(error =>{
      console.log(error)
    })
}

export default requestData

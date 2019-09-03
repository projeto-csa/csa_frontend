import axios from 'axios'

const requestData = (handleData) => {
  axios
    .get('http://localhost:1337/csas')
    .then(response => {
      // Handle success.
      console.log('csas: ', response.data);
      handleData(response.data)
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
    })
}

export default requestData
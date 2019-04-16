import axios from 'axios'

const requestData = (handleData) => {
  axios
    .get('http://localhost:1337/csas')
    .then(response => {
      // Handle success.
      console.log('Well done, here is the list of csas: ', response.data);
      handleData(response.data)
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
    })
}

export default requestData
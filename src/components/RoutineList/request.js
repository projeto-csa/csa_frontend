import axios from 'axios'

const requestData = (handleData) => {
  axios
    .get('http://localhost:1337/rotinas', {
      params: {
        _sort: 'createdAt:desc' // Generates http://localhost:1337/posts?_sort=createdAt:desc
      }
    })
    .then(response => {
      // Handle success.
      console.log('Well done, here is the list of topics: ', response.data);
      handleData(response.data)
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
    })
}

export default requestData

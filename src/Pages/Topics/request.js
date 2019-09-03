import axios from 'axios'

const requestData = (handleData) => {
  axios
    .get('http://localhost:1337/topics', {
      params: {
        _sort: 'createdAt:desc' // Generates http://localhost:1337/posts?_sort=createdAt:desc
      }
    })
    .then(response => {
      // Handle success.
      console.log('topics: ', response.data);
      handleData(response.data)
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
    })
}

export default requestData

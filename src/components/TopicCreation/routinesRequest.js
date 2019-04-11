import axios from 'axios'

const request = (handleData) => {
  axios
    .get('http://localhost:1337/routines', {
      params: {
        _sort: 'name:asc'
      }
    })
    .then(response => {
      // Handle success.
      console.log('from /routines: ', response.data);
      handleData(response.data)
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
    })
}

export default request

import axios from 'axios'

const requestTopic = (topicId) => {
  axios
    .get(`http://localhost:1337/topicos/${topicId}`, {
      params: {
        _sort: 'createdAt:desc' // Generates http://localhost:1337/posts?_sort=createdAt:desc
      }
    })
    .then(response => {
      // Handle success.
      console.log('topic: ', response.data);
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
    })
}

export default requestTopic

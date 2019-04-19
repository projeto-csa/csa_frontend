import axios from 'axios'

import request from './request';

const answerRequest = async (payload, handleData) => {
  
  // add new answer
  try {
    await axios({
      method: 'POST',
      url: 'http://localhost:1337/answers',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      data: payload
    });
  } catch (err) {
    console.log(err);
    return null;
  }
  // adds users to topic's interested users
  let response = await axios.get(`http://localhost:1337/topics/${payload.topic}`)
  let topic = response.data;
  if (!topic.interestedUsers.map(user => user.id).includes(payload.user))
    topic.interestedUsers.push(payload.user)
  try {
    response = await axios({
      method: 'PUT',
      url: `http://localhost:1337/topics/${topic._id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      data: topic,
    })
  } catch (err) {
    console.log(err);
    return null;
  }
  topic = response.data;
  handleData(topic);
  return response.data;
}
export default answerRequest

import React from 'react';
import axios from 'axios';

const ToggleInterested = ({ topic, userId, afterFetch }) => {
  
  const isInterested = topic.interestedUsers.map(_user => _user.id).includes(userId);
  // const isInterested = true;
  
  const toggleInterested = () => {
    if (isInterested) {
      // remove user from interested users
      const newInterestedUsers = topic.interestedUsers.filter((value) => value.id !== userId);
      topic.interestedUsers = newInterestedUsers;
    } else {
      // add user to interested users
      topic.interestedUsers.push(userId);
    }
    axios({
      method: 'PUT',
      url: `http://localhost:1337/topics/${topic._id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      data: topic,
    })
    .then(response => afterFetch(response.data))
    .catch(error => console.log(error))
  };

  return (
    <div
      onClick={toggleInterested}
    >
      {
        isInterested
        ? 'Remover dos tópicos de interesse'
        : 'Adicionar aos tópicos de interesse'
      }
    </div>
  );
};

export default ToggleInterested;

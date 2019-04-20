import axios from 'axios'

const requestEdit = (payload, handleData) => {
  axios({
    method: 'PUT',
    url: `http://localhost:1337/csas/${payload.id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    data: payload
  })
  .then(response => {
    console.log('variation PUT: ', response.data)
    handleData(response.data)
  })
  .catch( error => {
    console.log(error)
  })
}

const requestNewVariation = (payload, handleData) => {
  let p = {...payload}
  delete p.csa
  axios({
    method: 'POST',
    url: `http://localhost:1337/variations`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    data: p
  })
  .then(response => {
    console.log('new variation: ', response.data)
    handleData(response.data)
    let p = {id: response.data._id, csas: [...response.data.csas, payload.csa]}
    axios({
      method: 'PUT',
      url: `http://localhost:1337/variations/${response.data._id}`,
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      data: p
    })
    .then( response => {
      console.log('variation added to csa')
    })
    .catch(error => {
      console.log(error)
    })
  })
  .catch( error => {
    console.log(error)
  })
}

export { requestEdit, requestNewVariation }

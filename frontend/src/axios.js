import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://tinder-backend-mern-01.herokuapp.com'
})

export default instance 
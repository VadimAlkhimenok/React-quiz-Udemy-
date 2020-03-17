import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-e98b8.firebaseio.com/'
})
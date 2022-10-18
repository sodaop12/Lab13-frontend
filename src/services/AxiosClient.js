import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://52.0.124.81:8999',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default apiClient

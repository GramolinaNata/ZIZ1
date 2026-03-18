import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://69ba3b51b3dcf7e0b4bc373a.mockapi.io/api/v1',
})
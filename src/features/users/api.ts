import { apiClient } from '../../shared/api/client'

export const getUsers = async (search: string) => {
  const { data } = await apiClient.get('/users', {
    params: { search },
  })
  return data
}
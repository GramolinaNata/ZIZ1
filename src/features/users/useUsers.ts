import { useQuery } from '@tanstack/react-query'
import { getUsers } from './api'

export const useUsers = (search: string) => {
  return useQuery({
    queryKey: ['users', search],
    queryFn: () => getUsers(search).catch(() => []),
  })
}
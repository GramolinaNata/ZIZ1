import { useState } from 'react'
import { useUsers } from '../features/users/useUsers'

export const UsersPage = () => {
  const [search, setSearch] = useState('')
  const { data, isLoading } = useUsers(search)

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h2 style={{ marginBottom: 16 }}>Users</h2>
      <input
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: '100%',
          padding: '8px 12px',
          border: '1px solid #ccc',
          borderRadius: 6,
          marginBottom: 20,
          fontSize: 14,
          boxSizing: 'border-box'
        }}
      />
      {isLoading && <p>Loading...</p>}
{data?.length === 0 && <p style={{ color: '#888' }}>Not found</p>}
{data?.map((user: any) => (
        <div key={user.id} style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '12px 0',
          borderBottom: '1px solid #eee',
          fontSize: 14
        }}>
          <span style={{ fontWeight: 500 }}>{user.name}</span>
          <span style={{ color: '#888' }}>{user.email}</span>
        </div>
      ))}
    </div>
  )
}
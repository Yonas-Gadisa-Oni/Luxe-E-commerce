import { useState } from 'react'

export function useAuth() {
  const [user, setUser] = useState(null)
  const login = credentials => setUser({ email: credentials.email })
  const logout = () => setUser(null)

  return { user, login, logout }
}

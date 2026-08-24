import { apiClient } from '../../services/apiClient'

export function loginUser(credentials) {
  return apiClient('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  })
}

export function registerUser(details) {
  return apiClient('/auth/register', {
    method: 'POST',
    body: JSON.stringify(details),
  })
}

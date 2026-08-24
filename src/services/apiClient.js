const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

export async function apiClient(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || 'API request failed')
  }

  return response.json()
}

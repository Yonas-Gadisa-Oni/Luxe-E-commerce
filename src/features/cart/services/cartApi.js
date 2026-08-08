import { apiClient } from '../../services/apiClient'

export function submitCart(cart) {
  return apiClient('/cart', {
    method: 'POST',
    body: JSON.stringify(cart),
  })
}

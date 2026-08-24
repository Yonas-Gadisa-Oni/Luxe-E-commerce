import { apiClient } from '../../services/apiClient'

export function submitOrder(order) {
  return apiClient('/checkout', {
    method: 'POST',
    body: JSON.stringify(order),
  })
}

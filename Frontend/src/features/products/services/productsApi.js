import { apiClient } from '../../services/apiClient'

export function fetchProducts() {
  return apiClient('/products')
}

export function fetchProductById(id) {
  return apiClient(`/products/${id}`)
}

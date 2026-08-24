import { useState } from 'react'

export function useCart() {
  const [items, setItems] = useState([])
  const addToCart = item => setItems(current => [...current, item])

  return { items, addToCart }
}

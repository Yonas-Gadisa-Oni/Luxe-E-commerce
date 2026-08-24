import { useEffect, useState } from 'react'
import { mockProducts } from '../../data/mockProducts'

export function useProducts() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(mockProducts)
  }, [])

  return { products }
}

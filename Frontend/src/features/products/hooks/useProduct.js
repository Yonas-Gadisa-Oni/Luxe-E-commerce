import { useEffect, useState } from 'react'
import { mockProducts } from '../../data/mockProducts'

export function useProduct(productId) {
  const [product, setProduct] = useState(null)
  useEffect(() => {
    setProduct(mockProducts.find(item => item.id === productId) || null)
  }, [productId])

  return { product }
}

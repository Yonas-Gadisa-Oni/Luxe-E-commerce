import { useState } from 'react'

export function useCheckout() {
  const [shippingInfo, setShippingInfo] = useState({})

  return { shippingInfo, setShippingInfo }
}

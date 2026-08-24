export default function CartItem({ item }) {
  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <span>{item.quantity}</span>
    </div>
  )
}

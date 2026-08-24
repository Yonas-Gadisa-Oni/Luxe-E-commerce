export default function CartSummary({ total }) {
  return (
    <div className="cart-summary">
      <strong>Total:</strong> ${total.toFixed(2)}
    </div>
  )
}

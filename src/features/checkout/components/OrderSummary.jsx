export default function OrderSummary({ total }) {
  return (
    <aside className="order-summary">
      <h3>Order Summary</h3>
      <p>Total: ${total.toFixed(2)}</p>
    </aside>
  )
}

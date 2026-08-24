export default function ProductInfo({ product }) {
  return (
    <div className="product-info">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  )
}

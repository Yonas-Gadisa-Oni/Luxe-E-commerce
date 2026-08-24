export default function ProductImages({ images = [] }) {
  return (
    <div className="product-images">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Product image ${index + 1}`} />
      ))}
    </div>
  )
}

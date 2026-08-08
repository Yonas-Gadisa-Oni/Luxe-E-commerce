from pathlib import Path

root = Path(r"E:\project\E-Commerce\e-commerc project")

paths = [
    'public/images',
    'src/components/ui',
    'src/components/layout',
    'src/components/common',
    'src/features/products/components',
    'src/features/products/hooks',
    'src/features/products/services',
    'src/features/cart/components',
    'src/features/cart/hooks',
    'src/features/cart/services',
    'src/features/auth/components',
    'src/features/auth/hooks',
    'src/features/auth/services',
    'src/features/checkout/components',
    'src/features/checkout/hooks',
    'src/features/checkout/services',
    'src/pages/Home',
    'src/pages/Shop',
    'src/pages/Product',
    'src/pages/Cart',
    'src/pages/Checkout',
    'src/pages/Login',
    'src/pages/NotFound',
    'src/services',
    'src/hooks',
    'src/utils',
    'src/data',
    'src/styles',
]

for path in paths:
    (root / path).mkdir(parents=True, exist_ok=True)

files = {
    'public/favicon.ico': '',
    'src/App.js': "import './styles/globals.css'\n\nexport default function App() {\n  return (\n    <div className=\"app-shell\">\n      <h1>Welcome to E-Commerce</h1>\n      <p>This project is organized by components, features, pages, and utilities.</p>\n    </div>\n  )\n}\n",
    'src/index.js': "import React from 'react'\nimport { createRoot } from 'react-dom/client'\nimport './styles/globals.css'\nimport App from './App'\n\ncreateRoot(document.getElementById('root')).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n)\n",
    'src/data/mockProducts.js': "export const mockProducts = [\n  {\n    id: '1',\n    name: 'Classic Tee',\n    price: 29.99,\n    image: '/images/product-1.jpg',\n    description: 'A timeless wardrobe essential with soft cotton comfort.',\n  },\n  {\n    id: '2',\n    name: 'Everyday Sneakers',\n    price: 74.99,\n    image: '/images/product-2.jpg',\n    description: 'Lightweight support and modern style for daily wear.',\n  },\n]\n",
    'src/services/apiClient.js': "const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'\n\nexport async function apiClient(path, options = {}) {\n  const response = await fetch(`${BASE_URL}${path}`, {\n    headers: { 'Content-Type': 'application/json' },\n    ...options,\n  })\n\n  if (!response.ok) {\n    const errorData = await response.json().catch(() => ({}))\n    throw new Error(errorData.message || 'API request failed')\n  }\n\n  return response.json()\n}\n",
    'src/hooks/useDebounce.js': "import { useEffect, useState } from 'react'\n\nexport function useDebounce(value, delay = 300) {\n  const [debouncedValue, setDebouncedValue] = useState(value)\n\n  useEffect(() => {\n    const timer = setTimeout(() => setDebouncedValue(value), delay)\n    return () => clearTimeout(timer)\n  }, [value, delay])\n\n  return debouncedValue\n}\n",
    'src/hooks/useMediaQuery.js': "import { useEffect, useState } from 'react'\n\nexport function useMediaQuery(query) {\n  const [matches, setMatches] = useState(false)\n\n  useEffect(() => {\n    const media = window.matchMedia(query)\n    setMatches(media.matches)\n\n    const listener = () => setMatches(media.matches)\n    media.addEventListener('change', listener)\n    return () => media.removeEventListener('change', listener)\n  }, [query])\n\n  return matches\n}\n",
    'src/utils/formatPrice.js': "export function formatPrice(amount) {\n  return new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD',\n  }).format(amount)\n}\n",
    'src/utils/validation.js': "export function isEmail(value) {\n  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)\n}\n\nexport function isRequired(value) {\n  return value != null && String(value).trim().length > 0\n}\n",
    'src/styles/globals.css': "@import './variables.css';\n\n:root {\n  color: var(--text-color);\n  background: var(--background-color);\n  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  min-height: 100vh;\n}\n\nbutton,\ninput {\n  font: inherit;\n}\n\n.app-shell {\n  padding: 2rem;\n}\n",
    'src/styles/variables.css': ":root {\n  --background-color: #f8f9fa;\n  --surface-color: #ffffff;\n  --text-color: #111827;\n  --muted-color: #6b7280;\n  --border-color: #e5e7eb;\n  --primary-color: #2563eb;\n  --primary-contrast: #ffffff;\n}\n",
    'src/components/ui/Button.jsx': "export default function Button({ children, onClick, type = 'button' }) {\n  return (\n    <button type={type} onClick={onClick} className=\"button\">\n      {children}\n    </button>\n  )\n}\n",
    'src/components/ui/Input.jsx': "export default function Input(props) {\n  return <input {...props} className=\"input\" />\n}\n",
    'src/components/ui/Modal.jsx': "export default function Modal({ title, children }) {\n  return (\n    <div className=\"modal-backdrop\">\n      <div className=\"modal\">\n        <h2>{title}</h2>\n        {children}\n      </div>\n    </div>\n  )\n}\n",
    'src/components/ui/Spinner.jsx': "export default function Spinner() {\n  return <div className=\"spinner\">Loading...</div>\n}\n",
    'src/components/ui/Skeleton.jsx': "export default function Skeleton({ width = '100%', height = '1rem' }) {\n  return <div className=\"skeleton\" style={{ width, height }} />\n}\n",
    'src/components/layout/Header.jsx': "export default function Header({ children }) {\n  return <header className=\"site-header\">{children}</header>\n}\n",
    'src/components/layout/Navbar.jsx': "export default function Navbar() {\n  return (\n    <nav className=\"navbar\">\n      <ul>\n        <li>Home</li>\n        <li>Shop</li>\n        <li>Cart</li>\n      </ul>\n    </nav>\n  )\n}\n",
    'src/components/layout/Footer.jsx': "export default function Footer() {\n  return <footer className=\"site-footer\">© 2026 E-Commerce</footer>\n}\n",
    'src/components/layout/Container.jsx': "export default function Container({ children }) {\n  return <div className=\"container\">{children}</div>\n}\n",
    'src/components/common/LoadingState.jsx': "import Spinner from '../ui/Spinner'\n\nexport default function LoadingState() {\n  return (\n    <div className=\"loading-state\">\n      <Spinner />\n      <p>Loading data...</p>\n    </div>\n  )\n}\n",
    'src/components/common/EmptyState.jsx': "export default function EmptyState({ message = 'No results found.' }) {\n  return <div className=\"empty-state\">{message}</div>\n}\n",
    'src/components/common/ErrorMessage.jsx': "export default function ErrorMessage({ message = 'Something went wrong.' }) {\n  return <div className=\"error-message\">{message}</div>\n}\n",
    'src/features/products/components/ProductCard.jsx': "import { formatPrice } from '../../../utils/formatPrice'\n\nexport default function ProductCard({ product }) {\n  return (\n    <article className=\"product-card\">\n      <img src={product.image} alt={product.name} />\n      <h3>{product.name}</h3>\n      <p>{formatPrice(product.price)}</p>\n    </article>\n  )\n}\n",
    'src/features/products/components/ProductGrid.jsx': "import ProductCard from './ProductCard'\n\nexport default function ProductGrid({ products }) {\n  return (\n    <div className=\"product-grid\">\n      {products.map(product => (\n        <ProductCard key={product.id} product={product} />\n      ))}\n    </div>\n  )\n}\n",
    'src/features/products/components/ProductImages.jsx': "export default function ProductImages({ images = [] }) {\n  return (\n    <div className=\"product-images\">\n      {images.map((src, index) => (\n        <img key={index} src={src} alt={`Product image ${index + 1}`} />\n      ))}\n    </div>\n  )\n}\n",
    'src/features/products/components/ProductInfo.jsx': "export default function ProductInfo({ product }) {\n  return (\n    <div className=\"product-info\">\n      <h2>{product.name}</h2>\n      <p>{product.description}</p>\n    </div>\n  )\n}\n",
    'src/features/products/components/ProductFilters.jsx': "export default function ProductFilters() {\n  return (\n    <section className=\"product-filters\">\n      <h3>Filters</h3>\n    </section>\n  )\n}\n",
    'src/features/products/hooks/useProducts.js': "import { useEffect, useState } from 'react'\nimport { mockProducts } from '../../data/mockProducts'\n\nexport function useProducts() {\n  const [products, setProducts] = useState([])\n  useEffect(() => {\n    setProducts(mockProducts)\n  }, [])\n\n  return { products }\n}\n",
    'src/features/products/hooks/useProduct.js': "import { useEffect, useState } from 'react'\nimport { mockProducts } from '../../data/mockProducts'\n\nexport function useProduct(productId) {\n  const [product, setProduct] = useState(null)\n  useEffect(() => {\n    setProduct(mockProducts.find(item => item.id === productId) || null)\n  }, [productId])\n\n  return { product }\n}\n",
    'src/features/products/services/productsApi.js': "import { apiClient } from '../../services/apiClient'\n\nexport function fetchProducts() {\n  return apiClient('/products')\n}\n\nexport function fetchProductById(id) {\n  return apiClient(`/products/${id}`)\n}\n",
    'src/features/products/index.js': "export * from './hooks/useProducts'\nexport * from './hooks/useProduct'\nexport * from './services/productsApi'\n",
    'src/features/cart/components/CartItem.jsx': "export default function CartItem({ item }) {\n  return (\n    <div className=\"cart-item\">\n      <span>{item.name}</span>\n      <span>{item.quantity}</span>\n    </div>\n  )\n}\n",
    'src/features/cart/components/CartList.jsx': "import CartItem from './CartItem'\n\nexport default function CartList({ items }) {\n  return (\n    <div className=\"cart-list\">\n      {items.map(item => (\n        <CartItem key={item.id} item={item} />\n      ))}\n    </div>\n  )\n}\n",
    'src/features/cart/components/CartSummary.jsx': "export default function CartSummary({ total }) {\n  return (\n    <div className=\"cart-summary\">\n      <strong>Total:</strong> ${total.toFixed(2)}\n    </div>\n  )\n}\n",
    'src/features/cart/hooks/useCart.js': "import { useState } from 'react'\n\nexport function useCart() {\n  const [items, setItems] = useState([])\n  const addToCart = item => setItems(current => [...current, item])\n\n  return { items, addToCart }\n}\n",
    'src/features/cart/services/cartApi.js': "import { apiClient } from '../../services/apiClient'\n\nexport function submitCart(cart) {\n  return apiClient('/cart', {\n    method: 'POST',\n    body: JSON.stringify(cart),\n  })\n}\n",
    'src/features/cart/index.js': "export * from './hooks/useCart'\nexport * from './services/cartApi'\n",
    'src/features/auth/components/LoginForm.jsx': "export default function LoginForm() {\n  return (\n    <form className=\"login-form\">\n      <label>Email</label>\n      <input type=\"email\" />\n      <label>Password</label>\n      <input type=\"password\" />\n      <button type=\"submit\">Sign In</button>\n    </form>\n  )\n}\n",
    'src/features/auth/components/RegisterForm.jsx': "export default function RegisterForm() {\n  return (\n    <form className=\"register-form\">\n      <label>Name</label>\n      <input type=\"text\" />\n      <label>Email</label>\n      <input type=\"email\" />\n      <label>Password</label>\n      <input type=\"password\" />\n      <button type=\"submit\">Register</button>\n    </form>\n  )\n}\n",
    'src/features/auth/hooks/useAuth.js': "import { useState } from 'react'\n\nexport function useAuth() {\n  const [user, setUser] = useState(null)\n  const login = credentials => setUser({ email: credentials.email })\n  const logout = () => setUser(null)\n\n  return { user, login, logout }\n}\n",
    'src/features/auth/services/authApi.js': "import { apiClient } from '../../services/apiClient'\n\nexport function loginUser(credentials) {\n  return apiClient('/auth/login', {\n    method: 'POST',\n    body: JSON.stringify(credentials),\n  })\n}\n\nexport function registerUser(details) {\n  return apiClient('/auth/register', {\n    method: 'POST',\n    body: JSON.stringify(details),\n  })\n}\n",
    'src/features/checkout/components/CheckoutForm.jsx': "export default function CheckoutForm() {\n  return (\n    <form className=\"checkout-form\">\n      <label>Billing Address</label>\n      <input type=\"text\" />\n    </form>\n  )\n}\n",
    'src/features/checkout/components/ShippingForm.jsx': "export default function ShippingForm() {\n  return (\n    <div className=\"shipping-form\">\n      <label>Shipping Address</label>\n      <input type=\"text\" />\n    </div>\n  )\n}\n",
    'src/features/checkout/components/OrderSummary.jsx': "export default function OrderSummary({ total }) {\n  return (\n    <aside className=\"order-summary\">\n      <h3>Order Summary</h3>\n      <p>Total: ${total.toFixed(2)}</p>\n    </aside>\n  )\n}\n",
    'src/features/checkout/hooks/useCheckout.js': "import { useState } from 'react'\n\nexport function useCheckout() {\n  const [shippingInfo, setShippingInfo] = useState({})\n\n  return { shippingInfo, setShippingInfo }\n}\n",
    'src/features/checkout/services/checkoutApi.js': "import { apiClient } from '../../services/apiClient'\n\nexport function submitOrder(order) {\n  return apiClient('/checkout', {\n    method: 'POST',\n    body: JSON.stringify(order),\n  })\n}\n",
    'src/pages/Home/HomePage.jsx': "export default function HomePage() {\n  return <section><h2>Home Page</h2></section>\n}\n",
    'src/pages/Shop/ShopPage.jsx': "export default function ShopPage() {\n  return <section><h2>Shop Page</h2></section>\n}\n",
    'src/pages/Product/ProductPage.jsx': "export default function ProductPage() {\n  return <section><h2>Product Page</h2></section>\n}\n",
    'src/pages/Cart/CartPage.jsx': "export default function CartPage() {\n  return <section><h2>Cart Page</h2></section>\n}\n",
    'src/pages/Checkout/CheckoutPage.jsx': "export default function CheckoutPage() {\n  return <section><h2>Checkout Page</h2></section>\n}\n",
    'src/pages/Login/LoginPage.jsx': "export default function LoginPage() {\n  return <section><h2>Login Page</h2></section>\n}\n",
    'src/pages/NotFound/NotFoundPage.jsx': "export default function NotFoundPage() {\n  return <section><h2>Page Not Found</h2></section>\n}\n",
    '.env': "VITE_API_BASE_URL=https://api.example.com\n",
    '.env.example': "VITE_API_BASE_URL=https://api.example.com\n",
}

for rel_path, content in files.items():
    path = root / rel_path
    if not path.exists():
        path.write_text(content, encoding='utf-8')
    else:
        print(f'Skipped existing file: {path}')

print('Scaffolding completed.')

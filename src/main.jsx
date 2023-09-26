import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes } from 'react-router-dom'
import App from './pages/App/App'
import { CartProvider } from './components/Cart/Context/CartContext'
import { ProductsProvider } from './assets/context/ProductsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
            <App />
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

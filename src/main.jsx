import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import App from './pages/App'
import { CartProvider } from './components/Cart/Context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
          <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

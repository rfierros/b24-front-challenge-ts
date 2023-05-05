import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import { CartProvider } from './context/CartContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
)

import {
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom'
import React, { createContext, useState } from 'react'
import HomePage from './pages/HomePage.jsx'
import TermsAndConditionsPage from './pages/TermsAndConditionsPage.jsx'
import CartPage from './pages/CartPage.jsx'
import FormPage from './pages/FormPage.jsx'
import ProductPage from './pages/ProductPage.jsx'


export const CartContext = createContext();

const App = () => {
  const [cart, setCart] = useState([])
  const cartValue = {cart, setCart}

  return (
    <CartContext.Provider value={cartValue}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/details/:id' element={<ProductPage />} />
          <Route path='/termsandconditions' element={<TermsAndConditionsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/form' element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
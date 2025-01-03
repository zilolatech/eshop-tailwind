import React, { useContext } from 'react'
import { CartContext } from '../App'
import { useNavigate } from 'react-router-dom'

const CartItem = ({product}) => {
    const {cart, setCart} = useContext(CartContext)

  const deleteItem = (item) => {
    setCart([...cart.slice(item, 1)])
  }

  const navigate = useNavigate()

  return (
    <section>
      <img src={`/eshop-images/${product.img}`} alt="headwear" width="200" />
          <div className="product-info">
          <div className='inline-block md:block h-[80%]'>
              <h3 className='text-xl md:text-2xl'>{product.title}</h3>
              <div className="price">$ {product.price}</div>
              </div>
              <button onClick={() => navigate('/form')} class="buy">Buy</button>
          <button class="delete" onClick={() => deleteItem(product)}>Delete from Cart</button>
        </div>
    </section>
  )
}

export default CartItem
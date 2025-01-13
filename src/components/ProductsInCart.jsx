import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../App'


const ProductsInCart = () => {
  const {cart, setCart} = useContext(CartContext)

  const navigate = useNavigate()

  const deleteItem = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id != item.id))
  }

  const updateQuantity = (item, quantity) => {
    if (quantity < 1) return
    setCart(cart.map((cartItem) => cartItem.id === item.id ? {...cartItem, quantity} : cartItem))

  }  

  return (
    <main id='cartLayout' className='flex flex-wrap m-5 min-h-[80vh] md:mx-48 md:my-5 place-content-start' >
        {cart.map((product) => (
          <section className='flex basis-full my-2 md:my-3' key={product.id}>
              <img className='rounded max-h-[150px]' src={`/eshop-images/${product.img}`} alt="headwear" width="100" />
              <div className='pl-4 w-full'>
                  <div className='inline-block'>
                      <h3 className='text-xl md:text-2xl'>{product.title}</h3>
                      <div className="price">$ {Math.round(product.price * product.quantity * 100) / 100}</div>
                  </div>

                  <div className='flex flex-col float-right'>
                    <div className='flex border rounded mr-1 ml-8 md:ml-4'>
                      <button className={`mx-3 text-2xl ${product.quantity <= 1 && 'text-gray-400'}`} onClick={() => updateQuantity(product, product.quantity - 1)} disabled={product.quantity <= 1}>-</button>
                      <p className='mx-1 md:mx-2 mt-1 md:text-xl'>{product.quantity}</p>
                      <button className={`${product.quantity <= 9 && 'ml-4'} mx-2 text-2xl`} onClick={() => updateQuantity(product, product.quantity + 1)}>+</button>
                    </div>
                    <div className='mt-1'>
                      <button className='bg-amber-300 rounded m-1 p-2 w-20' onClick={() => navigate('/form')}><p className='block'>Buy</p></button>
                      <button className='bg-cyan-900 rounded m-1 p-2 text-white' onClick={() => deleteItem(product)}>
                        {/* <p className='hidden md:inline-block'>Delete from Cart</p> */}
                        <img className='inline-block' src='icons/delete.svg' width='18px' />
                      </button>
                    </div>
                  </div>
              </div>
          </section>
          )) }

      {cart.length > 0 ? (<button className='mx-auto mt-5 bg-cyan-900 text-white p-1 px-3 md:p-3 rounded' onClick={() => navigate('/form')} id="buy-all">Buy All in the Cart</button>) : (<p className='mx-auto text-2xl md:text-3xl text-gray-400'>Cart is empty</p>)}
    </main>
  )
}

export default ProductsInCart
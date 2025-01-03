import React, { useContext } from 'react'
import { CartContext } from '../App'
import { Link } from 'react-router-dom'

const Product = ({product, layout}) => {
  const {cart, setCart} = useContext(CartContext)

  
  const addToCart = (item) => {
    const itemExist = cart.some(cartItem => cartItem.id === item.id)

    if (!itemExist) {
      setCart([...cart, item])
    } else {
      alert('This item is already in the cart!')
      return
    }
  }

  const isInCart = (item) => cart.includes(item)
  
  
  return (
    <section className={`px-2 my-2 md:max-w-full md:p-5 ${layout == 'grid' ? 'basis-1/2 md:flex max-w-56' : 'flex w-full'}`}>
        <Link to={`/details/${product.id}`}><img className='rounded max-h-[200px]' src={`/eshop-images/${product.img}`} alt="headwear" width="200" /></Link>
        <div className={`md:pl-4 ${layout == 'list' ? 'pl-2' : ''}`}>
            <Link to={`/details/${product.id}`}>
              <div className='inline-block md:block h-[80%]'>
                <h3 className='text-xl md:text-2xl'>{product.title}</h3>
                <div className="price">$ {product.price}</div>
                {layout == 'list' && <p className='hidden md:block'>{product.description}</p>}
                {layout == 'list' && <p className='md:hidden'>{product.description.substring(0, 80) + '...'}</p>}
              </div>
            </Link>
            <button className={`md:h-[20%] float-right md:m-0 rounded md:w-32 md:bg-amber-300 ${layout == 'list' ? 'float-right' : 'm-3'}`} onClick={() => {addToCart(product)}}>
              <img className='md:hidden' src={isInCart(product) ? 'icons/cart-check.svg' :'icons/cart-plus.svg'} width='30px' />
              <p className='hidden md:block'>Add to Cart</p>
            </button>
        </div>
    </section>
  )
}

export default Product
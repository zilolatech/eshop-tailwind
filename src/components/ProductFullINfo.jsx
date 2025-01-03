import products from '../products.json'
import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CartContext } from '../App'

const ProductFullINfo = () => {
  const {id} = useParams()
  const product = products.find(d => d.id == parseInt(id))

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

  const navigate = useNavigate()

  if (!product) {
    return <p>This product doesn't exist</p>
  }

  return (
    <main className='flex flex-wrap mx-1 my-3 min-h-[80vh] md:mx-48 md:my-5'>
        <div className='px-2 my-2 flex flex-col md:flex-row'>
            <h1 className='text-3xl md:hidden'>{product.title}</h1>
            <Link to={`/details/${product.id}`} className='md:w-[30%]'><img className={`rounded`} src={`/eshop-images/${product.img}`} alt="headwear" /></Link>
            <div className='md:flex-1 md:mx-5'>
                <h1 className='hidden md:block text-3xl'>{product.title}</h1>
                <div className='flex gap-3'>
                    <div className='border rounded my-4 h-10 w-10 hover:border-black'><div className='m-2 rounded-full h-[60%] bg-red-400'></div></div>
                    <div className='border rounded my-4 h-10 w-10 hover:border-black'><div className='m-2 rounded-full h-[60%] bg-blue-400'></div></div>
                    <div className='border rounded my-4 h-10 w-10 hover:border-black'><div className='m-2 rounded-full h-[60%] bg-yellow-400'></div></div>
                </div>
                <p className='hidden md:block'>{product.description}</p>
            </div>
            <div className='flex-1 p-3 border rounded h-[40%]'>
                <p className='text-3xl'>$ {product.price}</p>
                <p className='inline-block line-through text-xl text-gray-500'>$ {(product.price * 1.3).toFixed(2)}</p><span className='bg-black rounded text-white px-1 ml-3'>-30%</span>

                <div className='md:mt-[35%]'>
                    <button className={`inline-block p-2 md:m-0 rounded w-[45%] bg-amber-300`} onClick={() => {addToCart(product)}}><p className='block'>Add to Cart</p></button>
                    <button className='inline-block bg-cyan-900 rounded m-3 p-2 w-[45%]' onClick={() => navigate('/form')}><p className='block text-white'>Buy</p></button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default ProductFullINfo
import React from 'react'
import products from '../products.json'
import Product from './Product'

const ProductsSearch123 = ({input}) => {
    const filtered = products.filter((el) => {
        return input === '' || el.name.toLowerCase().includes(input.toLowerCase())
    })

  return (
    <div className='flex flex-wrap place-content-evenly'>
        {filtered.map((product) => (
            <Product key={product.id} product={product} layout={'grid'} />
        )) }
    </div>
  )
}

export default ProductsSearch123
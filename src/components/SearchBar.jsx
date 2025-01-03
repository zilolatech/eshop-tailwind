import React, { useState } from 'react'
import ProductsSearch123 from './ProductsSearch123'

const SearchBar = () => {
    const [inputText, setInputText] = useState('')


  return (
    <>
        <div className='hidden md:flex absolute m-2 left-1/2 top-0 -translate-x-1/2 p-0.5 pl-2 bg-white rounded w-[50%]'>
            <input className='inline-block bg-white text-black w-[90%] flex-auto' placeholder='Search' value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <button className='px-2 float-right flex-auto'><img className='inline-block' src='icons/search.svg' width='25px' /></button>
        </div>

    <ProductsSearch123 input={inputText} />
    </>
  )
}

export default SearchBar


{/* <div className='flex mx-3 p-1 bg-slate-100 rounded md:hidden'>
          <img className='inline-block flex-auto' src='icons/search.svg' width='20px' />
          <input className='block bg-slate-100 text-black flex-auto w-[90%]' />
        </div> */}
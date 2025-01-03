import products from '../products.json'
import React, { useState } from 'react'
import Header from '../components/Header'
import Products from '../components/Products'
import Footer from '../components/Footer'


const HomePage = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
    <Header searchValue={searchValue} onSearch={setSearchValue}/>
    <Products searchValue={searchValue} />
    <Footer />
    </>
  )
}

export default HomePage
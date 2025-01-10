import products from '../products.json'
import React, { useEffect, useState } from 'react'
import Product from './Product'
import LayoutBtn from './LayoutBtn'

const Products = ({searchValue}) => {
  const [layout, setLayout] = useState('grid')

  const [show, setShow] = useState(false)
  const [items, setItems] = useState([])

  const getProducts = () => {
    const filteredItems = products.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    setItems(filteredItems)
  }



  const sortItems = (type) => {
    let sortedItems = [...items]
    if (type == 'cheapFirst') {
      sortedItems.sort((a, b) => (Math. round(a.price) > Math. round(b.price)) ? 1 : -1)
    } else if (type == 'expensiveFirst') {
      sortedItems.sort((a, b) => (Math. round(a.price) < Math. round(b.price)) ? 1 : -1)
    } else if (type == 'alphabetically') {
      sortedItems.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1)
    } else {
      sortedItems.slice(0, 4)
    }
    setItems(sortedItems)
  }


  const [currentPage, setCurrentPAge] = useState(1)
  const itemsPerPage = 4
  const totalPages = Math.ceil(items.length / itemsPerPage)
  const paginate = (items, pageNumber, itemsPerPage) => {
    const startIndex = (pageNumber - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return items.slice(startIndex, endIndex)
  }
  const paginatedItems = paginate(items, currentPage, itemsPerPage)
  const goToPreviousPage = () => {
    if(currentPage > 1) {
      setCurrentPAge(currentPage - 1)
    }
  }
  const goToNexPage = () => {
    if(currentPage < totalPages) {
      setCurrentPAge(currentPage + 1)
    }
  }

  useEffect(() => {
    getProducts()
  }, [searchValue])


  return (
    <>
      <nav>
          <h2 className='inline-block p-2.5 text-xl'>Products</h2>
          <LayoutBtn layout={layout} setLayout={setLayout} />
          <button className='inline-block float-right my-2.5 h-[32px] p-1 border border-black rounded' onClick={() => setShow(!show)}>Sort By...</button>
            <div className={`absolute flex flex-col right-3 md:right-12 p-1 border border-black rounded bg-white ${!show && 'hidden'}`}>
              <button className='hover:bg-gray-100 text-left' onClick={() => sortItems('alphabetically')}>Alphabetical</button>
              <button className='hover:bg-gray-100 text-left' onClick={() => sortItems('cheapFirst')}>Cheap first</button>
              <button className='hover:bg-gray-100 text-left' onClick={() => sortItems('expensiveFirst')}>Expensive first</button>
            </div>
      </nav>
      <main className='flex flex-wrap flex-col mx-1 my-3 min-h-[70vh] md:mx-48 md:my-5'>
          <div className='flex flex-wrap place-content-evenly'>
            {paginatedItems.map((product) => (
                <Product key={product.id} product={product} layout={layout} />
            )) }
          </div>
          
          <div className={`flex mx-auto my-5 gap-1.5 ${totalPages <= 1 && 'hidden'}`}>
            <button className={`py-2 px-3.5 max-h-10 ${currentPage == 1 ? 'bg-slate-900 text-white' : 'hover:border'} rounded`} onClick={goToPreviousPage}>1</button>
            <button className={`py-2 px-3.5 max-h-10  ${currentPage == 2 ? 'bg-slate-900 text-white' : 'hover:border'} rounded`} onClick={goToNexPage}>2</button>
          </div>
      </main>
    </>

  )
}

export default Products
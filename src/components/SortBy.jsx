import React, { useState } from 'react'

const SortBy = (sortby) => {
  const [show, setShow] = useState(false)

  // const cheapFirst = products.sort((a, b) => (Math. round(a.price) > Math. round(b.price)) ? 1 : -1)
  // const expensiveFirst = products.sort((a, b) => (Math. round(a.price) < Math. round(b.price)) ? 1 : -1)
  // const alphabetically = products.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1)

  return (
    <>
      <button className='inline-block float-right my-2.5 h-[32px] p-1 border border-black rounded' onClick={() => setShow(!show)}>Sort By...</button>
        <div className={`absolute flex flex-col right-3 md:right-12 p-1 border border-black rounded bg-white ${!show && 'hidden'}`}>
          <button className='hover:bg-gray-100 text-left' onClick={() => setSortBy(sortBy = 'alphabetically')}>Alphabetical</button>
          <button className='hover:bg-gray-100 text-left' onClick={() => setSortBy(sortBy = 'cheapFirst')}>Cheap first</button>
          <button className='hover:bg-gray-100 text-left' onClick={() => setSortBy(sortBy = 'expensiveFirst')}>Expensive first</button>
        </div>
    </>
  )
}

export default SortBy
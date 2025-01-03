import React from 'react'

const LayoutBtn = ({layout, setLayout}) => {

    const layoutChange = () => {
        setLayout(layout == 'grid' ? 'list' : 'grid')
    }

  return (
    <button className='inline-block float-right m-2.5 border border-black rounded' onClick={layoutChange}><img className='p-1' src={layout == 'list' ? "icons/squares.svg" : "icons/list.svg"} width="30px"/></button>
  )
}

export default LayoutBtn
import { Link, useLocation } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import { CartContext } from '../App'

const Header = ({searchValue, onSearch}) => {
  const {cart} = useContext(CartContext)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const location = useLocation()
  const isActive = (path) => location.pathname === path


  return (
    <header className={`text-xl bg-cyan-900 text-white ${isActive('/') && 'bg-gradient-to-b from-cyan-900 via-cyan-900 to-white md:bg-none'}`}>
        <button className='inline-block md:hidden px-4 py-2 rounded hover:bg-cyan-800' onClick={() => setIsMenuOpen(!isMenuOpen)}><img src={isMenuOpen ? "/icons/cancel2.svg" : "/icons/menu.svg"} width="32px"/></button>
        
        <div className={`md:inline-block hidden p-2.5 ${isActive('/') ? 'bg-cyan-950' : 'hover:bg-cyan-800'}`}><Link to='/' className='no-underline text-white'>Home</Link></div>
        <div className={`md:inline-block hidden p-2.5 ${isActive('/termsandconditions') ? 'bg-cyan-950' : 'hover:bg-cyan-800'}`}><Link className='no-underline text-white' to='/termsandconditions'>Terms&Conditions</Link></div>

        <div className={`inline-block float-right p-2.5 ${isActive('/cart') ? 'bg-cyan-950' : 'hover:bg-cyan-800'}`}>
            <Link className='no-underline text-white' to='/cart'>
              <div className='inline-block'>Cart</div>
              <span className='float-right ml-1 mt-[-5px] py-0 px-1.5 bg-amber-400 text-slate-900 text-base rounded-full rounded-bl-none'>{cart.length}</span>
            </Link>
        </div>

       

        <div className={`hidden absolute m-2 left-1/2 top-0 -translate-x-1/2 p-0.5 pl-2 bg-white rounded w-[50%] ${isActive('/') ? 'md:flex' : ''}`}>
          <input className='inline-block bg-white text-black w-[90%] flex-auto' placeholder='Search' defaultValue={searchValue} onChange={(e) => onSearch(e.target.value)} />
          <button className='px-2 float-right flex-auto'><img className='inline-block' src='icons/search.svg' width='25px' /></button>
        </div>



        <div className={`${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className='md:hidden'>
            <li className={`block ${isActive('/') ? 'bg-cyan-950' : 'hover:bg-cyan-800'}`}>
              <div className='block p-2.5'><Link className='block no-underline text-white w-full' to='/'>Home</Link></div>
            </li>
            <li className={`block ${isActive('/termsandconditions') ? 'bg-cyan-950' : 'hover:bg-cyan-800'}`}>
              <div className='block p-2.5'><Link className='block no-underline text-white w-full' to='/termsandconditions'>Terms&Conditions</Link></div>
            </li>
          </ul>
        </div>

        <div className={`flex mx-3 p-1 max-h-10 bg-white rounded border border-slate-600 ${isActive('/') ? 'md:hidden' : 'hidden'} `}>
          <img className='inline-block flex-auto' src='icons/search.svg' width='20px' />
          <input className='block text-black flex-auto w-[90%]' placeholder='Search' defaultValue={searchValue} onChange={(e) => onSearch(e.target.value)} />
        </div>
    </header>
    
  )
}

export default Header
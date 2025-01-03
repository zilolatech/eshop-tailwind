import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NavigationBtn = () => {
    const navigate = useNavigate()

    const location = useLocation()
    const isActive = (path) => location.pathname === path

  return (
    <div className='flex mx-auto my-5 gap-1.5'>
        <button className={`py-2 px-3.5 max-h-10 ${isActive('/') ? 'bg-slate-900 text-white' : 'hover:border'} rounded`} onClick={() => navigate('/')}>1</button>
        <button className={`py-2 px-3.5 max-h-10  ${isActive('/2') ? 'bg-slate-900 text-white' : 'hover:border'} rounded`} onClick={() => navigate('/2')}>2</button>
    </div>
  )
}

export default NavigationBtn
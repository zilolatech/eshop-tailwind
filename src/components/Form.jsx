import React from 'react'

const Form = () => {
  return (
    <main id='form' className='m-5 min-h-[80vh] md:mx-48 md:my-5'>
        <form className='border-black border-[1px] rounded p-5 w-full'>
            <h2 className='text-2xl'>Delivery Form</h2>
            <h3 className='text-xl my-3'>Full Name</h3>
            <div id="full-name">
                <input className='w-full md:w-[46%] border-black border-[1px] mr-5 rounded p-2' type="text" id="fname" name="fname" placeholder="First Name" required />
                <input className='w-full md:w-[46%] border-black border-[1px]  mt-5 md:mt-0 rounded p-2' type="text" id="lname" name="lname" placeholder="Last Name" required />
            </div>
            <h3 className='text-xl my-3'>Address</h3>
            <div>
                <input className='w-full md:w-[46%] border-black border-[1px] mr-5 rounded p-2' type="text" id="s-address" name="s-address" placeholder="Street Address" required />
                <input className='w-full md:w-[46%] border-black border-[1px] mt-5 md:mt-0 rounded p-2' type="text" id="city" name="city" placeholder="City" required />
                <input className='w-full md:w-[46%] border-black border-[1px] mt-5 rounded p-2' type="text" id="zip-code" name="zip-code" placeholder="Zip Code" required />
            </div>
            <h3 className='text-xl my-3'>Phone Number</h3>
            <div>
                <input className='w-full md:w-[46%] border-black border-[1px] rounded p-2' type="tel" id="tel" name="tel" placeholder="Phone Number" required />
            </div>
            <h3 className='text-xl my-3'>E-mail</h3>
                <input className='w-full md:w-[46%] border-black border-[1px] rounded p-2' type="email" id="email" name="email" placeholder="E-mail" required />
            
            <button className='w-full bg-amber-400 border-amber-400 border-[1px] rounded p-2 mt-5' type="submit" id="submit">Submit Form</button>
            
        </form>
    </main>
  )
}

export default Form
import React from 'react'

const App = () => {
  return (
    <div>
      <div className='w-full bg-[#f77170] h-28 border-t-4 border-[#244f80] px-7 flex justify-between items-center'>
        <div className='flex items-center'>
          <p className='text-white text-3xl font-bold mr-8'>Kalvium</p>
          <div className='flex items-center'>
            <p className='mr-5 text-[#d3bcb3] font-bold'>About Us</p>
            <p className='mr-5 text-[#d3bcb3] font-bold'>Contacts</p>
            <p className=' text-[#d3bcb3] font-bold'>Courses</p>
          </div>
        </div>
        <button className='border-white border-2 w-24 h-10 text-white text-lg rounded'>Login</button>
      </div>



      <div className='w-full px-44 pt-7'>
        <button className='w-36 h-12 bg-[#3c81f6] rounded text-white font-bold text-lg'>Button One</button>

        <div className='w-full bg-[#fee2e1] h-14 my-7 rounded border-2 border-[#e6807f] flex items-center px-7'>
          <p className='text-[#b61d1b]'><span className='font-bold'>Alert! </span><span className='font-semibold'>This is awesome!</span></p>
        </div>
        <div className='w-96 h-28 drop-shadow-lg bg-white rounded-lg mx-auto px-5 py-5 flex gap-x-7'>
            <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" className='w-12 h-14'/>
            <div>
              <p className='font-medium text-2xl mb-1'>Kavlium Store</p>
              <p className='text-[#4c5564] font-medium'>You have a new course!</p>
            </div>
        </div>
      </div>
        <div className='bg-[#e6e7eb] w-full h-14 flex justify-center items-center font-medium'><span className='text-[#384151]'>© 2021 Copyright:</span>Kalvium</div>
    </div>
  )
}

export default App
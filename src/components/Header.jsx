import React from 'react'

function Header() {
  return (
    <div className='w-[80%] absolute top-0 left-0 rounded-[50px] m-[0.5%] ml-[10%] p-[0.4%] flex justify-center bg-yellow-50 z-50 bg-opacity-[0.2] border-[1px] border-gray-500'>
        {/* navbar */}
        <div className='flex gap-[50%] justify-between items-center w-[90%]'>
            <div>
                <h1 className='text-gray-300 text-[25px]'>Core-Fit</h1>
            </div>

            <div className='flex gap-[25px]'>
                <a href="#" className='text-gray-200'>Home</a>
                <a href="#" className='text-gray-200'>Service</a>
                <a href="#" className='text-gray-200'>Goals</a>
                <a href="#" className='text-gray-200'>Class Schedules</a>
                <a href="#" className='text-gray-200'>Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Header
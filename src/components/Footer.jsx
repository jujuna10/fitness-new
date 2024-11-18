import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col gap-[50px] justify-center items-center mt-[50px]'>
        <div className='bg-custom-patter bg-repeat w-[68%] mr-[6%] flex flex-col gap-[20px] items-center rounded-[50px] py-[35px] relative'>
            <p className='text-[35px] font-bold'>Lets Join Community</p>
            <p className='text-green-800'>You are not allone, many have was joined</p>
            <input type="email" name="email" placeholder='enter your email' className='pl-[10px] rounded-[10px] h-[50px] w-[400px]' />
            <button className='ml-2 absolute top-[68%] left-[58%] bg-[rgb(36,39,49)] p-[4px] rounded-[8px] text-white font-anton'>Join Now</button>
        </div>
        <div className='flex items-center justify-around w-[90%] translate-x-[-35px]'>
            <p className='text-gray-300 font-anton text-[25px]'>Core-Fit</p>
            <p className='text-gray-300'>Copyright @ 2024 CORE-FIT. All Right Reserved</p>
            <p className='text-gray-300 font-anton text-[20px]'>Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer
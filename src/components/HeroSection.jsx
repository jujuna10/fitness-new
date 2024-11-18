import React from 'react'
// import girl from '../../public/kk.webp'
import Image from 'next/image'


function HeroSection() {
  return (
    <div className='relative w-full top-0'>
        <div>
            <Image src="/fitness.webp" alt="fitness girl" width={2000} height={1000} quality={100} className='w-full h-[900px] object-cover' />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/5"></div>

        </div>
        {/* people images */}
        <div className='absolute top-[35%] left-[10%] flex flex-col'>
          <div className='flex'>
              <Image src="/men1.jpg" alt="fitness girl" width={2000} height={1000} quality={100} className='w-[65px] h-[55px] rounded-[50%] border-[1px] border-white' />
              <Image src="/men2.jpeg" alt="fitness girl" width={2000} height={1000} quality={100} className='w-[65px] h-[55px] rounded-[50%] border-[1px] border-white translate-x-[-45%]' />
              <Image src="/women1.jpeg" alt="fitness girl" width={2000} height={1000} quality={100} className='w-[65px] h-[55px] rounded-[50%] border-[1px] border-white translate-x-[-90%]' />
              <Image src="/women2.avif" alt="fitness girl" width={2000} height={1000} quality={100} className='w-[65px] h-[55px] rounded-[50%] border-[1px] border-white translate-x-[-135%]' />
          </div>
          <div className='mt-5'>
            <p className='text-white font-anton text-[25px]'>220k+</p>
            <p className='text-white'>Happy Customers</p>
          </div>
        </div>
        {/* text */}
        <div className='absolute top-[35%] left-[80%] flex flex-col justify-center items-center gap-[10px]'>
          <p className='text-[35px] text-gray-300 font-bold'>250+</p>
          <p className='text-[18px] text-gray-300'>workers</p>
          <button className='w-[120px] h-[55px] rounded-[70px] bg-[rgb(147,251,4)] font-bold'>Join Now</button>
        </div>
        {/* main text */}
        <div className='absolute top-[90%] left-[31%]'>
          <p className="text-white text-[70px] font-bold text-transparent bg-clip-text font-anton bg-gradient-to-b from-gray-100 via-gray-300 to-gray-600" style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.7)" }}>STAY FITT NOT STILL</p>        
        </div>

    </div>
  )
}

export default HeroSection
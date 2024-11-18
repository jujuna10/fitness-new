'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import clas from '../../public/training.png'
import club from '../../public/club.png'
import timetable from '../../public/calendar.png'




function Features() {
    const [indexx,setIndexx] = useState(0)
    const name = ['Class','Club','Timetable']
    const text = ['Our amenities ensure you get the most out of your workouts and enjoy a superior gym experience.','Our gym features cutting-edge fitness equipment designed to elevate your workouts to the next level','Searching for a class that suits your schedule? We offer a variety of time options to fit your needs.']
    const images = [clas,club,timetable]

    const handleNext = () => {
        setIndexx(prev => (prev === 2 ? 0 : prev + 1))
    }

    const handlePrev = () => {
        setIndexx(prev => (prev === 0 ? 2 : prev - 1))
    }

  return (
    <div className='absolute pl-[2%] pr-[2%] w-full flex flex-col gap-[100px] mt-[50px]'>
        {/* title and buttons */}
        <div className='flex justify-between items-center w-full'>
            <div className='flex flex-col'>
                <h1 className='text-gray-300 text-[62px] font-anton'>Features at Fitness Core-Fit</h1>
                <p className='max-w-[490px] text-gray-300'>Fitness Core-Fit offers top-notch amenities, cutting-edge equipment, and expert trainers to enhance your workout and achieve your goals.</p>
            </div>
            <div className='flex gap-[20px] justify-center items-center'>
                <button className='rotate-[180deg] border-[1px] border-yellow-400 rounded-full w-[50px] h-[50px] flex justify-center items-center hover:w-[70px] hover:h-[70px] duration-500' onClick={handlePrev}><Image src='/next.png' width={35} height={35} style={{ filter: 'invert(100%) sepia(100%) saturate(100000%) hue-rotate(0deg) brightness(100%)' }} alt='Next' /></button>
                <button className='border-[1px] border-yellow-400 rounded-full w-[50px] h-[50px] flex justify-center items-center hover:w-[70px] hover:h-[70px] duration-500' onClick={handleNext}><Image src='/next.png' width={35} height={35} style={{ filter: 'invert(100%) sepia(100%) saturate(100000%) hue-rotate(0deg) brightness(100%)' }} alt='Next' /></button>
            </div>
        </div>
        {/* features */}
        <div className='flex gap-[50px]'>
            {name.map((item,index) => (
                <div key={index} className={`bg-[rgb(24,25,30)] p-[25px] h-[520px] rounded-[50px] flex flex-col gap-[20px] ${index === indexx ? 'translate-y-[-50px] duration-500' : ''} `}>
                    <div className={`rounded-[50%] border-[1px] border-white w-[80px] h-[80px] flex justify-center items-center ${index === indexx ? 'border-yellow-400' : ''}`}>
                        <Image src={images[index]} alt={item} width={35} height={35} className='invert' />
                    </div>
                    <div>
                        <p className='text-[35px] text-gray-300 font-anton'>{item}</p>
                        <p className='max-w-[55%] text-gray-300'>{text[index]}</p>
                    </div>
                    <div className='flex justify-end translate-y-[250%]'>
                        <div className={`rounded-[50%] border-[1px] border-white w-[55px] h-[55px] flex justify-center ${index === indexx ? 'border-yellow-400' : ''}  `}>
                            <Image src='/next.png' width={45} height={35} style={{ filter: 'invert(100%) sepia(100%) saturate(100000%) hue-rotate(0deg) brightness(100%)' }}  />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features
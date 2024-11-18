import React from 'react'
import Image from 'next/image'
import p1 from '../../public/p1.png'
import p2 from '../../public/p2.png'
import p3 from '../../public/p3.png'
import p4 from '../../public/p4.png'



function Progrmas() {

  const images = [p1,p2,p3,p4]
  const programs = ["Personal Trainer", "Outdoor Classes", "Digital Coursing", "Group Training"];
  const days = ["Monday - Wednesday", "Tuesday - Thursday", "Friday - Saturday", "Sunday - Monday"];
  return (
    <div className='mt-[45%] pl-[2%] pr-[2%] flex flex-col gap-[50px]'>
        {/* title */}
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-[62px] text-gray-300 font-anton max-w-[620px]'>Explore Our Wide Range of Programs</h1>
            </div>

            <div>
                <p className='text-gray-300 max-w-[620px]'>Explore our wide range of programs designed to cater to all fitness levels and preferences. From strength training to yoga, each program is crafted to help you meet your specific goals and enhance your overall health and well-being.</p>
            </div>
        </div>
      <div className='flex gap-[100px] justify-center'>
        {images.map((item,index) => (
          <div key={index} className={`flex flex-col gap-[20px] ${index % 2 === 1 ? 'translate-y-[12%]' : ''}`}>
            {/* <img src={item} alt="photo" /> */}
            <Image src={item} width={320} height={290}  alt='image'  className='rounded-[25px] border-[1px] border-red-500' />
            <div>
              <p className='text-gray-300 font-anton text-[25px]'>{programs[index]}</p>
              <p className='text-gray-300'>{days[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Progrmas
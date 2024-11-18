import React from 'react'
import Image from "next/image";


function Classes() {
  return (
    <div className='pl-[12%] mt-14 flex flex-col gap-[100px]'>
        {/* main div first */}
        <div className='flex justify-around gap-[450px] pr-[7%]'>
            <div className='translate-x-[-50px]'>
                <h1 className='text-gray-300 font-anton text-[45px]'>Our Classes</h1>
                <p className='text-gray-300 max-w-96'>"Our classes cater to all ages and preferences. You and your child can safely enjoy the facilities together. Whether young or old, our programs welcome everyone, making fitness a family affair."</p>
            </div>

            <div className='flex flex-col gap-5 w-[60%]'>
                <div className='flex gap-[420px] w-[25%]'>
                    <div className='flex gap-[525px] w-[25%]'>
                        <p className='text-gray-300 max-w-[20px] font-anton text-[22px]'>Men</p>
                        <Image src='/up-right-arrow.png' width={20} height={20} className='invert' />
                    </div>
                </div>
                <hr  className='w-[75%] mt-4 h-[1px] bg-white'/>


                <div className='flex gap-[420px] w-[25%]'>
                    <div className='flex gap-[525px] w-[25%]'>
                        <p className='text-gray-300 max-w-[20px] font-anton text-[22px]'>Women</p>
                        <Image src='/up-right-arrow.png' width={20} height={20} className='invert' />
                    </div>
                </div>

                
                <hr  className='w-[75%] mt-4 h-[1px] bg-white'/>
                <div className='flex gap-[420px] w-[25%]'>
                    <div className='flex gap-[525px] w-[25%]'>
                        <p className='text-gray-300 max-w-[20px] font-anton text-[22px]'>Kids</p>
                        <Image src='/up-right-arrow.png' width={20} height={20} className='invert' />
                    </div>
                </div>
                <hr  className='w-[75%] mt-4 h-[1px] bg-white'/>
            </div>
        </div>

        {/* main div second */}
        <div className=''>
            <div className='flex gap-[35px]'>
                <Image src='/v1.png' width={800} height={200} className='w-[25%] h-[20%] rounded-[35px] border-[1px] border-red-500' />
                {/* first div */}
                <div className='w-[52%] flex flex-col gap-[120px] bg-[rgb(24,25,30)] p-[20px] rounded-[28px] border-[1px] border-[rgb(95,36,36)]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-[20px]'>
                            <Image src='/old-man.jpg' width={50} height={90} className='rounded-[50%] h-[50px]' />
                            <p className='text-gray-300 font-anton text-[22px]'>Leslie Alexander</p>
                        </div>
                        <button className='text-[18px] w-[100px] h-[50px] bg-yellow-400 rounded-[50px]'>See All</button>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-gray-300 font-anton text-[35px] max-w-48'>Training Experience</p>
                        <Image src='/up-right-arrow.png' width={50} height={10} className='invert h-[35px] w-[35px]' />
                    </div>
                </div>
            </div>
            <div className='flex gap-[55px] items-center'>
                {/* second div */}
                <div className='w-[410px] mt-[20px] bg-[rgb(24,25,30)] border-[rgb(95,36,36)] ] p-[20px] rounded-[28px] flex justify-center items-center h-[290px]'>
                    <p className='text-gray-300 font-anton max-w-[145px] text-[25px]'>Credit and personalize your <span className='text-yellow-400'>workout</span></p>
                </div>
                {/* third div */}
                <div>
                <div className='mt-[20px] flex gap-[55px]'>
                    <Image src='/v2.png' width={800} height={200} className='w-[400px] h-[290px] rounded-[35px] border-[1px] border-red-500' />
                    <Image src='/v3.png' width={800} height={200} className='w-[400px] h-[290px] rounded-[35px] border-[1px] border-red-500' />
                 </div>

                <div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Classes
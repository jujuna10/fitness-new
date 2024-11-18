import React from 'react'
import Image from "next/image";


function Prices() {
    const prices = ["$19.99/Month", "$11.99/Month", "Free"];
    const names = ["Premium Plan", "Elite Plan", "Basic Plan"];
    const descriptions = [
        "The premium package designed for dedicated fitness enthusiasts who seek the highest level of training.",
        "The elite plan for passionate fitness lovers, offering top-tier resources and exclusive benefits",
        "Our Basic Plan offers essential gym access, perfect for beginners or those with a simple workout routine."
    ];
  return (
    <div className='mt-[150px] pl-[8%] flex gap-8'>
        {/* first */}
        <div className='flex bg-[rgb(24,25,30)] w-[38%] p-7 rounded-[50px]'>
            {/* first */}
            <div className='flex flex-col gap-32'>
                <div className='flex flex-col gap-7'>
                    <div className='w-[50px] h-[50px] bg-[rgb(144,254,0)] flex justify-center items-center rounded-[50%]'>
                        <Image src='/star.png' width={35} height={35} />
                    </div>
                    <p className='text-[35px] text-gray-300 font-anton'>Success Stories</p>
                </div>

                <div>
                    <p className='text-gray-300 max-w-96'>"I reached my fitness goals faster than ever with tailored workouts. Wrist notifications keep me on track, even during sessions. Absolutely love this feature and how it enhances my experience"</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <div>
                        <p className='text-gray-300 text-[35px] font-anton'>Kende Attila</p>
                        <p className='text-gray-300 text-[17px]'>CEO of Starbucks</p>
                    </div>
                    <div className='flex gap-2'>
                        <Image src='/star (1).png' width={20} height={20} />
                        <Image src='/star (1).png' width={20} height={20} />
                        <Image src='/star (1).png' width={20} height={20} />
                        <Image src='/star (1).png' width={20} height={20} />
                        <Image src='/star.png' width={20} height={20} className='invert' />
                    </div>


                </div>

            </div>

            {/* second */}
            <div className='flex items-end'>
                <Image src='/man.png' width={200} height={200} />

            </div>
        </div>

        {/* second */}
        <div>
            <h1 className='text-gray-300 font-anton text-[55px] max-w-72'>Best Training Plan For You</h1>
            <div className='flex flex-col gap-14'>
                {names.map((item,index) => (
                    <div className='flex gap-[200px] justify-around items-start bg-[rgb(24,25,30)] h-[150px] rounded-[50px] p-[20px]'>
                        <p className={`text-yellow-500 font-bold ${prices[index] === prices[0] ? 'w-[150px] bg-yellow-500 !text-black rounded-[50px] p-[18px]' : ''}`}>{prices[index]}</p>
                        <div className='flex flex-col gap-2 justify-center'>
                            <p className='text-gray-300 font-anton text-[22px] text-right pr-10'>{item}</p>
                            <p className='text-gray-300 max-w-96'>{descriptions[index]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Prices
import React from 'react'

function Card({ name, img, percentage, time, price ,graph}) {

  return (
    <div className="flex flex-col justify-center items-center gap-[.8vw] text-[3vw] md:text-[3vw] lg:text-[1vw] font-bold text-white rounded-[1vw] bg-gradient-to-r to-gray-600/30 from-gray-800/100 h-[25vw] lg:h-[17vw] w-[20vw] lg:w-[13vw] ml-[5vw] mx-[2vw]">
      <div className="w-full flex items-center justify-center">
        <div className="w-[1.5vw] overflow-hidden rounded-[50%] ">
          <img alt="Logo" className="w-[100%] h-[100%] object-cover" src={img} />
        </div>
        <div className="text-[2vw] md:text-[1.9vw] font-semibold lg:text-[.8vw]">{name || 'name'}</div>
      </div>
      <div className="w-[16vw] md:w-[12vw] lg:w-[8vw]">
        <img alt="Graph" src={graph} className="w-[100%] h-[100%] object-cover"/>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-[.5vw]">
          <div className={`${percentage > 0 ? 'text-red-700' : 'text-green-600'} text-[2vw] md:text-[1.5vw] lg:text-[.8vw]`}>{percentage}%</div>
          <div className='text-gray-400 text-[2vw] md:text-[1.5vw] lg:text-[.8vw]'>{time || 'Time Period'}</div>
        </div>
        <div className="text-[2vw] md:text-[1.5vw] lg:text-[.8vw]">{price || 'price'}</div>
      </div>
      <div style={{ borderBottom: '.2vw solid green' }} className='text-[2vw] md:text-[1.5vw] lg:text-[.8vw]'>
        Trade Now
      </div>
    </div>
  )
}

export default Card

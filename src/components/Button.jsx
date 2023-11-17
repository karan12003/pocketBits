import React from 'react'
import signinSvg from './Header/signIn-icon.bb4a4491.svg'

function Button({ name,img,imgDim,bg="#42cba4",bgHover="#1E886A",py="0.7vw", ...props }) {
    return (
        <div>
            <button className={`text-white flex items-center gap-[.5vw] transition bg-[#42cba4] hover:bg-[#1E886A]
             ease-in rounded-[2vw] font-[800] text-[2.8vw] md:text-[1.8vw] lg:text-[1vw] px-[2vw] md:px-[1.5vw] lg:px-[1vw] py-[1.5vw] md:py-[1.1vw] lg:py-[0.7vw] `} 
            {...props}>
                <img src={img||signinSvg} className={`max-w-[4vw] ${imgDim}`} />
            {name}
            </button>

        </div>
    )
}

export default Button

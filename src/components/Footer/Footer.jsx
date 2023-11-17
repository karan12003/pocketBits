import React from 'react'
import playStore from './google-play-badge.f902960a.png'
import ios from './iosAppStore.c408eb36.svg'

function Footer() {
    return (
        <div style={{ backgroundImage: "url('../src/assets/waves.b413f6f1.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
            <div className="sm:block lg:flex items-start justify-around text-gray-400 p-[5vw]">
                <div className="flex justify-around lg:gap-[10vw] text-gray-400 p-[1vw] lg:p-[2vw]">
                    <div className="list p-[3vw] lg:p-[1vw]  w-[40%]  flex flex-col">
                        <h3 className="text-white text-[7vw] md:text-[3vw] lg:text-[1.8vw] my-[5vw] lg:my-[2vw] font-bold">Company</h3>
                        <div className='flex gap-[.5vw] flex-col cursor-pointer font-medium text-[3vw] md:text-[2vw] lg:text-[1vw]'>
                            <p>About Us</p>
                            <p>Blog</p>
                            <p>Fee Structure</p>
                            <p>Terms & Conditions</p>
                            <p>AML & KYC</p>
                            <p>We're Hiring</p>
                            <p>Site Updates</p>
                        </div>
                    </div>
                    <div className="list p-[3vw] lg:p-[1vw]  w-[40%]  flex flex-col">
                        <h3 className="text-white text-[7vw]  md:text-[3vw]  lg:text-[1.8vw] my-[5vw] lg:my-[2vw] font-bold">Support</h3>
                        <div className='flex gap-[.5vw] flex-col cursor-pointer font-medium text-[3vw] md:text-[2vw] lg:text-[1vw]'>
                            <p>Support Center</p>
                            <p>Support Ticket</p>
                            <p>Partnership Queries</p>
                            <p>Coin Listing Request</p>
                            <p>Contact Us</p>
                        </div>

                    </div>
                </div>
                <div className="flex justify-around lg:gap-[10vw] text-gray-400  lg:p-[2vw]">
                    <div className="list p-[3vw] lg:p-[1vw] w-[40%]  flex flex-col">
                        <h3 className="text-white text-[7vw]  md:text-[3vw] whitespace-nowrap lg:text-[1.8vw] my-[5vw] lg:my-[2vw] font-bold">Follow Us!</h3>
                        <div className='flex gap-[.5vw] w-[10%] flex-col cursor-pointer font-medium text-[3vw] md:text-[2vw] lg:text-[1vw]'>
                            <p>Twitter</p>
                            <p>Instagram</p>
                            <p>Facebook</p>
                            <p>Telegram</p>
                            <p>Youtube</p>
                            <p>Linkedin</p>
                        </div>
                    </div>
                    <div className="list p-[3vw] lg:p-[1vw] w-[40%] flex flex-col">
                        <h3 className="text-white text-[7vw]  md:text-[3vw]  lg:text-[1.8vw] my-[5vw] lg:my-[2vw] font-bold">App</h3>
                        <div className="flex flex-col cursor-pointer w-full gap-[2vw] lg:gap-[1vw]">
                            <img src={playStore} className="w-[100%] h-[50%] lg:w-[10vw] object-cover" />
                            <img src={ios} className="p-[1.7vw] lg:p-[.4vw] w-[100%] h-[50%] lg:w-[10vw] object-cover" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-gray-400/50 text-center mb-[1.2vw] text-[2.9vw] lg:text-[0.8vw] font-normal flex flex-col gap-[1.22vw]">
                <div>
                    <p>Trading in cryptocurrencies are subject to market, technical and legal risks.</p>
                    <p>The prices fluctuate based on global demand and supply.</p>
                </div>
                <div>
                    <p>© 2023 Pocketbits Co. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

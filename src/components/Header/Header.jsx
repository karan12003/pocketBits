import React, { useLayoutEffect } from 'react'
import logo from './CRYPTO__1_-removebg-preview.png'
import signinSvg from './signIn-icon.bb4a4491.svg'
import signupSvg from './createAnAccount-icon.6077e84c.svg'
import whiteArrow from './pngwing.com.png'
import dropIcon from './arrow-217-32.png'
import { Link } from 'react-router-dom'
import menu from './532-5328945_menu-bar-icon-white-clipart-png-download-menu.png'
import Button from '../Button'
// import gsap from 'gsap'
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

function Header() {

    // useLayoutEffect(() => {
    //     const ctx = gsap.context(() => {
    //         gsap.from(".animR2", {
    //             x: -80,
    //             duration: 1,
    //             opacity: 0
    //         });
    //         gsap.from(".animL2", {
    //             x: 80,
    //             duration: 1,
    //             opacity: 0
    //         });
    //         gsap.from(".animM2", {
    //             y: 80,
    //             duration: 1,
    //             opacity: 0
    //         });
    //         gsap.to('.nav',{
    //             scrollTrigger:{
    //                 trigger:'.animm',
    //                 start:"top 40%",
    //                 end:"bottom 10%",
    //                 scrub:true,
    //                 opacity:0.3
    //             },
    //             backgroundColor:'#131517'
    //         })

    //     })
    // })

    return (
        <>
            <div className="nav fixed z-[10] mt-0 bg-gray-600/20 text-white text-[1.8vw] md:text-[1.6vw] lg:text-[1.2vw] w-[100%] max-w-[100vw] mx-auto font-[700] flex items-center  justify-between">
                <div className="w-[30%] md:w-[18%] relative">
                    <img src={logo} className="w-[100%]" />
                    
                </div>
                <div className="navbar hidden md:flex lg:flex w-[40%] justify-center items-center ml-[4vw]">
                    <ul className="flex list-none items-center">
                        <li><Link to="/">Trade</Link></li>
                        <li>
                            <div className="dropdown">
                                <div className="dropbtn flex items-baseline gap-[.5vw]">
                                    <p>Earn</p>
                                    <p><img src={dropIcon} style={{ width: '0.6vw' }} /></p>
                                </div>
                                <div className="dropcontent">
                                    <Link to="">
                                        <div className="drop-arrow flex justify-between items-center">
                                            <div>Vault</div>
                                            <div><img src={whiteArrow} style={{ width: '1.2vw' }} /></div>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="drop-arrow flex justify-between items-center">
                                            <div>Refer & Earn</div>
                                            <div><img src={whiteArrow} style={{ width: '1.2vw' }} /></div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li><Link to="/">Fees</Link></li>
                        <li>
                            <div className="dropdown">
                                <div className="dropbtn flex items-baseline gap-[.5vw]">
                                    <p>Company</p>
                                    <p><img src={dropIcon} style={{ width: '0.6vw' }} /></p>
                                </div>
                                <div className="dropcontent">
                                    <Link to="">
                                        <div className="drop-arrow flex justify-between items-center">
                                            <div>About Us</div>
                                            <div><img src={whiteArrow} style={{ width: '1.2vw' }} /></div>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="drop-arrow flex justify-between items-center">
                                            <div>Blog</div>
                                            <div><img src={whiteArrow} style={{ width: '1.2vw' }} /></div>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="drop-arrow flex justify-between items-center">
                                            <div>Media Mentions</div>
                                            <div><img src={whiteArrow} style={{ width: '1.2vw' }} /></div>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="drop-arrow flex justify-between items-center">
                                            <div>Updates & Mentions</div>
                                            <div><img src={whiteArrow} style={{ width: '1.2vw' }} /></div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li><div className="dropdown">
                            <div className="dropbtn flex items-baseline gap-[.5vw]">
                                <p>Support</p>
                                <p><img src={dropIcon} style={{ width: '0.6vw' }} /></p>
                            </div>
                            <div className="dropcontent">
                                <Link to="">
                                    <div className="drop-arrow flex justify-between items-center">
                                        <div>FAQs</div>
                                        <div><img src={whiteArrow} style={{ width: '1.2vw' }} /></div>
                                    </div>
                                </Link>
                                <Link to="">
                                    <div className="drop-arrow flex justify-between items-center">
                                        <div>Create Support Ticket</div>
                                        <div><img src={whiteArrow} style={{ width: '1.2vw' }} /></div>
                                    </div>
                                </Link><Link to="">
                                    <div className="drop-arrow flex justify-between items-center">
                                        <div>Contact Us</div>
                                        <div><img src={whiteArrow} style={{ width: '1.2vw' }} /></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-end gap-[.5vw] p-[2vw] md:p-[.5vw] w-[50%] md:w-[33%]">
                    <button className="hidden text-white md:flex items-center gap-[.5vw] transition bg-[#42cba4] hover:bg-[#1E886A]
                        ease-in rounded-[2vw] font-[700] text-[2.8vw] md:text-[1.2vw] lg:text-[1vw] px-[2vw] md:px-[1.5vw] lg:px-[1vw] py-[1.5vw] md:py-[1.1vw] lg:py-[0.7vw]"
                    >
                        <img src={signinSvg} className={`hidden md:inline-block md:max-w-[4vw] lg:inline-block lg:max-w-[4vw]`} />
                        CREATE ACCOUNT
                    </button>
                    <button className="text-white flex items-center gap-[.5vw] transition bg-[#42cba4] hover:bg-[#1E886A]
                        ease-in rounded-[2vw] font-[700]  md:font-bold text-[2.8vw] md:text-[1.2vw] mx-[1vw] lg:mx-0 lg:text-[1vw] px-[2vw] md:px-[1.5vw] lg:px-[1vw] py-[1.5vw] md:py-[1.1vw] lg:py-[0.7vw]"
                        >
                        <img src={signinSvg} className={`hidden md:inline-block md:max-w-[4vw] lg:inline-block lg:max-w-[4vw]`} />
                        SIGN IN
                    </button>
                    <button className=" text-white  md:hidden   bg-[#333333] hover:bg-[#222222]
                        rounded-[2vw] font-bold text-[2.8vw] mx-[1vw] px-[3vw] py-[1.5vw]"
                        >
                        TRADE
                    </button>
                   
                        <img src={menu} className={`lg:hidden md:hidden w-[15%] object-cover`} />
                    
                </div>
            </div>
        </>
    )
}

export default Header

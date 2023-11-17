import React, { useEffect, useLayoutEffect, useState } from 'react'
import Button from '../components/Button'
import image from '../assets/hero_image_2.0f8733b1.png'
import coinDesk from '../assets/coindesk-logo.f5085be6.svg'
import inc42 from '../assets/inc-42-logo.8e949206.svg'
import mint from '../assets/mint-logo.f5e114bd.svg'
import bloomberg from '../assets/bloomberg-quint-logo.75390a6d.svg'
import forbes from '../assets/forbes-logo-white.ceee5a13.svg'
import coinTelegraph from '../assets/cointelegraph-logo-white.a1805e8c.svg'
import pbIcon from '../assets/pb_white_icon.062fd68b.svg'
import earnSection from '../assets/earnSectionImage.b92245c0.svg'
import playStore from '../components/Footer/google-play-badge.f902960a.png'
import ios from '../components/Footer/iosAppStore.c408eb36.svg'
import section from '../assets/appSectionImage2x.1265fef9.png'
import happy from '../assets/Happy Users-icon.28bfc70d.svg'
import volume from '../assets/Trading volume-icon.1fcd21f9.svg'
import checkMark from '../assets/check mark.d2da5457.svg'
import founded from '../assets/Founded In-icon.1d86a388.svg'
import startTrading from '../assets/startTradingSectionImage2x.4e859c9c.png'
import noAccCharge from '../assets/no account charges-icon.20ab8622.svg'
import hackFree from '../assets/Hack-free.2212b4de.svg'
import chatSupport from '../assets/chat-support.33d3b2ed.svg'
import tradeInInr from '../assets/trade-in-inr.bce6b6af.svg'
import inrDepo from '../assets/inr-depo-withdrawals.5508329f.svg'
import roundTheClock from '../assets/round-the-clock.f0e952ab.svg'
import refer from '../assets/referSectionImage.860b535d.svg'
import faq from '../assets/faqDropdownDown.873983c1.svg'
import create from '../assets/create an account-icon.9e81ee6b.svg'
import finish from '../assets/finish kyc-icon.97f147eb.svg'
import start from '../assets/start buying-icon.43ec2f9f.svg'
import Slides from '../components/Slides'
import Cards from '../components/Card'
import bitcoin from '../assets/bitcoin-btc-logo.png'
import ethereum from '../assets/ethereum.png'
import doge from '../assets/dogecoin.png'
import bnb from '../assets/bnb.png'
import tron from '../assets/tron.png'
import tether from '../assets/tether.png'
import solana from '../assets/solana.png'
import shibha from '../assets/shiba-inu.png'
import graph from '../assets/download.png'


function Home() {

  const [range, setRange] = useState(5000000);
  const [email, setEmail] = useState('');

   
    useEffect(() => {

      let el = document.querySelector('.image3d');
      const height = el.clientHeight;
      const width = el.clientWidth;
      el.addEventListener('mousemove', handleMove)
      function handleMove(e) {
        const xVal = e.layerX;
        const yVal = e.layerY;
        const yRotation = 20 * ((xVal - width / 2) / width);
        const xRotation = -20 * ((yVal - height / 2) / height);
        el.style.transform = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
      }
      el.addEventListener('mouseout', function () {
        el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
      })
      
    })

    const faqBtn1 = () => {
      if (document.querySelector(`.faqContent1`).style.display === 'block') {
        document.querySelector(`.faqContent1`).style.display = "none";
        document.querySelector('.dra1').style.transform = "rotate(0deg)";
        document.querySelector('.dra1').style.transition = "all ease 0.8s";
        document.querySelector('.faqContent1').style.transition = "all ease 0.8s";
      }
      else {
        document.querySelector(`.faqContent1`).style.display = "block";
        document.querySelector('.dra1').style.transform = "rotate(180deg)";
        document.querySelector('.dra1').style.transition = "all ease 0.8s";
        document.querySelector('.faqContent1').style.transition = "all ease 0.8s";
      }
    }
    const faqBtn2 = () => {
      if (document.querySelector(`.faqContent2`).style.display === 'block') {
        document.querySelector(`.faqContent2`).style.display = "none";
        document.querySelector('.dra2').style.transform = "rotate(0deg)";
        document.querySelector('.dra2').style.transition = "all ease 0.8s";
        document.querySelector('.faqContent2').style.transition = "all ease 0.8s";
      }
      else {
        document.querySelector(`.faqContent2`).style.display = "block";
        document.querySelector('.dra2').style.transform = "rotate(180deg)";
        document.querySelector('.dra2').style.transition = "all ease 0.8s";
        document.querySelector('.faqContent2').style.transition = "all ease 0.8s";
      }
    }
    const faqBtn3 = () => {
      if (document.querySelector(`.faqContent3`).style.display === 'block') {
        document.querySelector(`.faqContent3`).style.display = "none";
        document.querySelector('.dra3').style.transform = "rotate(0deg)";
        document.querySelector('.dra3').style.transition = "all ease 0.8s";
        document.querySelector('.faqContent3').style.transition = "all ease 0.8s";
      }
      else {
        document.querySelector(`.faqContent3`).style.display = "block";
        document.querySelector('.dra3').style.transform = "rotate(180deg)";
        document.querySelector('.dra3').style.transition = "all ease 0.8s";
        document.querySelector('.faqContent3').style.transition = "all ease 0.8s";
      }
    }
    const faqBtn4 = () => {
      if (document.querySelector(`.faqContent4`).style.display === 'block') {
        document.querySelector(`.faqContent4`).style.display = "none";
        document.querySelector('.dra4').style.transform = "rotate(0deg)";
        document.querySelector('.dra4').style.transition = "all ease 0.8s";
        document.querySelector('.faqContent4').style.transition = "all ease 0.8s"
      }
      else {
        document.querySelector(`.faqContent4`).style.display = "block";
        document.querySelector('.dra4').style.transform = "rotate(180deg)";
        document.querySelector('.dra4').style.transition = "all ease 0.8s";
        document.querySelector('.faqContent4').style.transition = "all ease 0.8s"
      }
    }
    const faqBtn5 = () => {
      if (document.querySelector(`.faqContent5`).style.display === 'block') {
        document.querySelector(`.faqContent5`).style.display = "none";
        document.querySelector('.dra5').style.transform = "rotate(0deg)";
        document.querySelector('.dra5').style.transition = "all ease 0.8s";
        document.querySelector('.faqContent5').style.transition = "all ease 0.8s"
      }
      else {
        document.querySelector(`.faqContent5`).style.display = "block";
        document.querySelector('.dra5').style.transform = "rotate(180deg)";
        document.querySelector('.dra5').style.transition = "all ease 0.8s";
        document.querySelector('.faqContent5').style.transition = "all ease 0.8s"
      }
    }
    const faqBtn6 = () => {
      if (document.querySelector(`.faqContent6`).style.display === 'block') {
        document.querySelector(`.faqContent6`).style.display = "none";
        document.querySelector('.dra6').style.transform = "rotate(0deg)";
        document.querySelector('.dra6').style.transition = "all ease 0.8s";
        document.querySelector('.faqContent6').style.transition = "all ease 0.8s"
      }
      else {
        document.querySelector(`.faqContent6`).style.display = "block";
        document.querySelector('.dra6').style.transform = "rotate(180deg)";
        document.querySelector('.dra6').style.transition = "all ease 0.8s";
        document.querySelector('.faqContent6').style.transition = "all ease 0.8s"
      }
    }

    const cards = [{ name: 'Bitcoin', img: bitcoin, price: 2400000, percentage: -5, time: '24h', graph: graph }, { name: 'Ethereum', img: ethereum, price: 99000, percentage: 10, time: '24h', graph: graph }, { name: 'Solana', img: solana, price: 22000, percentage: -5, time: '24h', graph: graph }, { name: 'Tether', img: tether, price: 88, percentage: 5, time: '24h', graph: graph }, { name: 'Dogecoin', img: doge, price: 3, percentage: -5, time: '24h', graph: graph }, { name: 'Tron', img: tron, price: 7, percentage: -5, time: '24h', graph: graph }, { name: 'Bnb', img: bnb, price: 22000, percentage: -5, time: '24h', graph: graph }, { name: 'Shibha-Inu', img: shibha, price: 220, percentage: 5, time: '24h', graph: graph }];

    return (
      <div className="w-full max-w-[100vw]  ">
        <div style={{ backgroundImage: "url('/src/assets/hero_bg_2.45bdc1b3.png')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className="flex flex-col lg:flex-row items-center justify-center pt-[8vw] mx-[2vw] lg:pb-[5vw]"  >
            <div className="animL1 text-white lg:w-[50%] flex flex-col my-[10vw] md:my-[5vw] lg:my-0 mx-auto gap-[1.2vw]">
              <h1 className="text-[7vw] md:text-[5.6vw] lg:text-[4vw] font-bold">Instant & Easy</h1>
              <p className='text-[3.8vw] md:text-[2.8vw] lg:text-[1.7vw] text-gray-400'>Buy and Sell 100+ Crypto Assets in INR.</p>
              <p className='text-[3.8vw] md:text-[2.8vw] lg:text-[1.7vw] text-gray-400 font-semibold'><span className='text-[#42cba4]'>0% fees</span> and<span className='text-[#42cba4]'>Infinite</span>liquidity.</p>
              <Button name="Get Started" />
            </div>
            <div className="animR1 w-[80%] md:w-[60%] lg:w-[40%]">
              <img src={image} className='image3d w-full' />
            </div>
          </div>
          <div className="animm">
            <Slides cards={cards} />
          </div>
        </div>
        <div className="page2 p-[2vw]">
          <div className="flex flex-col text-gray-400 font-bold text-[3.8vw] md:text-[2.8vw] lg:text-[1.7vw] mb-[6vw] lg:mb-[2vw]">
            In the news
          </div>
          <div className="flex flex-col lg:flex-row justify-around items-center w-[100%] h-[5vw]">
            <div className="flex justify-around items-center w-[100%] my-[2vw]">
              <img src={coinDesk} className="opacity-20 hover:opacity-100 w-[20%] h-[100%]" />
              <img src={inc42} className="opacity-20 hover:opacity-100 w-[20%] h-[100%]" />
              <img src={mint} className="opacity-20 hover:opacity-100 w-[20%] h-[100%]" />
            </div>
            <div className='flex justify-around items-center w-[100%] my-[2vw]'>
              <img src={bloomberg} className="opacity-20 hover:opacity-100 w-[20%] h-[100%]" />
              <img src={forbes} className="opacity-20 hover:opacity-100 w-[20%] h-[100%]" />
              <img src={coinTelegraph} className="opacity-20 hover:opacity-100 w-[20%] h-[100%]" />
            </div></div>
        </div>

        <div className="w-[100%] text-white flex lg:flex-row flex-col justify-around px-[10vw] items-center" style={{ backgroundImage: "url('/src/assets/waves.b413f6f1.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className="flex flex-col items-center justify-center gap-[4vw] w-[90%] md:w-[80%] lg:w-[40%] mt-[5vw] px-[2vw] rounded-[2vw]">
            <div className="rounded-[4vw] bg-[#2D3038] my-[8vw] md:my-[4vw] lg:my-[2vw]">
              <div className="bord flex gap-[20vw] md:gap-[12vw] lg:gap-[6vw] p-[6vw] md:p-[3vw] lg:p-[2vw]">
                <div className="flex flex-col gap-[4vw] md:gap-[2.4vw] lg:gap-[1.2vw] font-[400] text-[2.9vw] md:[2.8vw] lg:text-[1.2vw]">
                  <h1 className="text-gray-400 font-semibold text-[2.6vw] md:[1.8vw] lg:text-[.9vw]">Exchange</h1>
                  <p>UNOCOIN</p>
                  <p>ZebPay</p>
                  <p>WazirX</p>
                  <p>CoinDcx</p>
                </div>
                <div className="flex  flex-col gap-[4vw] md:gap-[2.4vw] lg:gap-[1.2vw] font-[400] text-[2.9vw] md:[2.8vw] lg:text-[1.2vw]">
                  <h1 className="text-gray-400 font-semibold text-[2.6vw] md:[1.8vw] lg:text-[.9vw]">Monthly Fees</h1>
                  <p>₹{(Math.floor(range / 1000 * 7)).toFixed(2)}</p>
                  <p>₹{(Math.floor(range / 1000 * 4)).toFixed(2)}</p>
                  <p>₹{(Math.floor(range / 1000 * 2)).toFixed(2)}</p>
                  <p>₹{(Math.floor(range / 1000 * 1)).toFixed(2)}</p>
                </div>
              </div>
              <div className='fees-calc rounded-b-[4vw] flex justify-between items-center p-[2vw] px-[8vw] md:px-[4vw] lg:px-[2vw]'>
                <div>
                  <img src={pbIcon} className="w-[6vw] md:w-[4vw] lg:w-[2vw]" />
                  <p className="text-white font-bold text-[3.4vw] md:[2.6vw] lg:text-[1.2vw]">PocketBits</p>
                </div>
                <div className="font-bold text-white text-[5vw] md:text-[3vw] lg:text-[1.6vw] bg-[#42cba4] px-[.9vw] py-[.8vw] rounded-[.5vw]">₹0</div>
              </div>
            </div>
            <div className="w-[120%] text-[2.8vw] md:text-[2.1vw] lg:text-[.9vw] font-semibold mb-[9vw] lg:mb-[0vw] text-gray-400">
              <div className='flex items-center justify-between mx-auto text-white font-bold mb-[1vw]  w-[100%]'>
                <p className="">Average Monthly Trading</p>
                <p className="text-[4.8vw] md:text-[3.8vw] lg:text-[1.7vw]">₹{range}</p>
              </div>
              <input className="range-input w-[100%] cursor-pointer" type="range" value={range} onChange={(e) => setRange(e.target.value)} min="1000" max="10000000" />
              <div className='flex items-center justify-between mx-auto text-white font-bold my-[1vw]  w-[100%]'>
                <p className="">₹1000</p>
                <p className="">₹1 CRORE+</p>
              </div>
            </div>
          </div>
          <div className='text-[5vw] md:[3.8vw] lg:text-[1.2vw] w-full lg:w-[40%] mx-auto'>
            <div className='p-[4vw]'>
              <h1 className="font-bold mb-[5vw] lg:mb-[0.8vw]">Get What You Pay For!</h1>
              <p className="text-[2.8vw] md:[2.4vw] lg:text-[1.4vw] text-gray-400">Literally<span className="text-[#42cba4]">NO FEES</span> on all trades.</p>
              <p className="text-[2vw] md:[1.4vw] lg:text-[.8vw] text-gray-400 mb-[1vw]">Unlimited Trading - Infinite Liquidity - No Slippage</p>
              <p className="mt-[3vw]"><span className="text-[#42cba4] text-[2.8vw] md:[2.4vw] lg:text-[1.4vw] hover:underline cursor-pointer font-bold">VIEW ALL FEES</span></p>
            </div>
            <div className='mt-[6vw] mx-auto w-[100%]'>
              <h1 className='font-bold text-[7vw] md:text-[4.8vw] lg:text-[2vw] whitespace-nowrap'>Buy Bitcoin in minutes!</h1>
              <div className="flex justify-between w-[100%] mx-auto bg-gray-300/30 rounded-[.7vw] p-[.5vw] my-[1.5vw]">
                <input type="email" name="email" placeholder="Email" className='text-[2.5vw] md:[2.1vw] lg:text-[1.2vw] cursor-pointer bg-transparent' />
                <Button name="Get Started" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] text-white flex lg:flex-row flex-col justify-around px-[10vw] items-center">
          <div className="w-[100%] lg:w-[50%] mt-[vw] px-[4vw]">
            <div className="w-[100%] my-[10vw] lg:my-0">
              <img src={earnSection} className="w-[100%] scale-125" />
            </div>
            <div className="mt-[20vw] lg:mt-[11vw]">
              <h1 className="text-[7vw] md:text-[4.8vw] lg:text-[2vw] mb-[9vw] lg:mb-[1vw] font-bold text-white">Trading made Easy</h1>
              <p className="text-gray-400 text-[3.4vw] md:text-[2.5vw] lg:text-[1.2vw] w-[100%] mb-[9vw] lg:mb-[1vw]">All of your Portfolio now literally in your pocket! Trade, earn & monitor everyting with our Mobile Apps.</p>
              <p className="font-semibold text-white mt-[2vw]  text-[5vw] md:text-[3.2vw] lg:text-[1.4vw] ">Download the App Now!</p>
              <div className="flex my-[3vw] lg:my-[0vw]">
                <img src={playStore} className="w-[50%]" />
                <img src={ios} className="w-[40%]" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] mt-[vw] p-[6vw] text-[5vw] md:text-[3.2vw] lg:text-[1.4vw]">
            <div className="my-[2vw]">
              <h1 className="text-white font-extrabold">Earn upto <span className='text-[#42cba4]'>16.5%</span> APY with <span className='text-[#42cba4]'>VAULT</span></h1>
              <p className="text-gray-400 my-[4vw] lg:my-[2vw] text-[3.2vw] md:text-[2.4vw] lg:text-[1.4vw] font-semibold"><span className='text-[#42cba4]'>Stack & Earn</span> high yields on your long-term HODL bags. Your assets will compound while you sleep.</p>
              <Button name="EARN NOW" />
            </div>
            <div className="mt-[6vw]">
              <img src={section} className="w-[100%] scale-125" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-[100%]">
          <img src={checkMark} className='w-[12%] md:w-[9%] lg:w-[3%]' />
          <h1 className="text-center text-white font-bold text-[3.8vw] md:text-[3.4vw] lg:text-[2vw] ml-[0.5vw]">Empowering Crypto Users in India Since 2017</h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-around text-[7vw] md:text-[4.5vw] lg:text-[2vw] text-white w-[100%] mt-[2vw] lg:mt-[5vw] mx-auto text-center">
          <div className="flex flex-col justify-center items-center w-[100%] lg:w-[15%]">
            <img src={happy} className="w-[20%] lg:w-[100%] my-[2vw]" />
            <h1 className="font-bold translate-y-[-3vw] lg:tranlate-y-[0vw]">Happy Users</h1>
            <p className="text-gray-300 text-[2.8vw] lg:text-[.9vw] translate-y-[-3vw] lg:tranlate-y-[0vw]">Best in Industry 24/7 Customer Support</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[100%] lg:w-[15%]">
            <img src={volume} className="w-[20%] lg:w-[100%] my-[2vw]" />
            <h1 className="font-bold translate-y-[-3vw] lg:tranlate-y-[0vw]">Trading Volume</h1>
            <p className="text-gray-300 text-[2.8vw] lg:text-[.9vw] translate-y-[-3vw] lg:tranlate-y-[0vw]">Infinite Liquidity to ensure you never miss a trade</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[100%] lg:w-[15%]">
            <img src={founded} className="w-[20%] lg:w-[100%] my-[2vw]" />
            <h1 className="font-bold translate-y-[-3vw] lg:tranlate-y-[0vw]">Founded In</h1>
            <p className="text-gray-300 text-[2.8vw] lg:text-[.9vw] translate-y-[-3vw] lg:tranlate-y-[0vw]">Among India's first crypto exchange</p>
          </div>
        </div>

        <div className="flex relative flex-col lg:flex-row items-center text-white p-[4vw] text-[5vw] md:text-[3.2vw] lg:text-[2.4vw] font-bold w-[full] text-center mx-[6vw] justify-between">
          <div className="w-full mx-auto lg:w-[50%] flex flex-col justify-center items-center lg:items-start ">
            <div className=''>
              <p className="my-[3vw] lg:my-0 whitespace-nowrap  ">Start Trading today with <span className='text-[#42cba4]'>PocketBits</span></p>
            </div>
            <div className="flex justify-center lg:justify-normal items-center my-[3vw] w-[100%]">
              <div className="flex flex-col gap-[1vw] w-[45%]">
                <div className="flex items-center font-medium text-[2.1vw] md:text-[1.4vw] lg:text-[0.9vw] gap-[1vw] text-gray-400">
                  <img src={noAccCharge} className="w-[16%]" />
                  <p>No Account Charges</p>
                </div>
                <div className="flex items-center font-medium text-[2.1vw] md:text-[1.4vw] lg:text-[0.9vw] gap-[1vw] text-gray-400">
                  <img src={hackFree} className="w-[16%]" />
                  <p>Hack Free Operations since 2017</p>
                </div>
                <div className="flex items-center font-medium text-[2.1vw] md:text-[1.4vw] lg:text-[0.9vw] gap-[1vw] text-gray-400">
                  <img src={chatSupport} className="w-[16%]" />
                  <p>24//7 Chat Support</p>
                </div>
              </div>
              <div className="flex flex-col gap-[1vw] w-[45%]">
                <div className="flex items-center font-medium text-[2.1vw] md:text-[1.4vw] lg:text-[0.9vw] gap-[1vw] text-gray-400">
                  <img src={tradeInInr} className="w-[16%]" />
                  <p>Trade Directly in INR</p>
                </div>
                <div className="flex items-center font-medium text-[2.1vw] md:text-[1.4vw] lg:text-[0.9vw] gap-[1vw] text-gray-400">
                  <img src={inrDepo} className="w-[16%] " />
                  <p className="whitespace-nowrap">Real time INR Deposits & Withdrawals</p>
                </div>
                <div className="flex items-center font-medium text-[2.1vw] md:text-[1.4vw] lg:text-[0.9vw] gap-[1vw] text-gray-400">
                  <img src={roundTheClock} className="w-[16%]" />
                  <p>Round the clock KYC verification</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full my-[3vw] lg:my-[0vw]">
            <img src={startTrading} className="w-[100%] h-[30%]" />
          </div>
        </div>

        <div className="text-white font-medium flex items-center justify-center text-[2.3vw] md:text-[2.2vw] lg:text-[1.2vw] w-[100%]">
          <div className="lg:w-[50%] w-[40%] mx-auto flex items-center justify-center">
            <img src={refer} className="w-full lg:w-[70%]" />
          </div>
          <div className='w-[60%] lg:w-[50%] px-[10vw]'>
            <h1 className="text-[3.2vw] lg:text-[3.3vw] md:text-[3.2vw]  mb-[2.2vw] font-bold">Refer Friends and <span className='text-[#42cba4] whitespace-nowrap'>Earn Rewards!</span></h1>
            <p>Help your friends trade with unlimited <span className='text-[#42cba4]'>Zero-Fees</span> on PocketBits.</p>
            <p className="mb-[3.6vw] mt-[2.2vw] "> Earn <span className='text-[#42cba4]'>0.1%</span> rewards on each of their trades.</p>
            <Button name="REFER NOW" />
          </div>
        </div>

        <div className="text-white font-bold w-[70%] mx-[auto] text-[1.2vw]">
          <h1 className="text-[5vw] md:text-[3.5vw] lg:text-[2vw] my-[3vw]">FAQs</h1>
          <div className="w-[100%] text-[2.9vw] md:text-[1.8vw] font-[600] lg:text-[1.2vw] flex justify-center items-center flex-col">
            <div className="faq my-[.8vw] w-full max-w-[95vw] md:max-w-[75vw] lg:max-w-[60vw]  mx-auto">
              <div onClick={faqBtn1} className='faqbtn  flex justify-between items-center cursor-pointer bg-gradient-to-r from-gray-600/80 to-gray-800/80 p-[2vw] md:p-[1.2vw] lg:p-[.8vw] rounded-[.6vw]'>
                <p>Can I trade in INR on PocketBits?</p>
                <img src={faq} className="dra1 w-[8%] md:w-[6%] lg:w-[4%]" />
              </div>
              <div className="faqContent1 hidden bg-[#1A1E23] p-[2vw] md:p-[1.3vw] lg:p-[1.1vw] rounded-[.6vw]">Yes, you can directly deposit and trade with INR on PocketBits</div>
            </div>
            <div className="faq my-[.8vw] w-full max-w-[95vw] md:max-w-[75vw] lg:max-w-[60vw]  mx-auto">
              <div onClick={faqBtn2} className='faqbtn  flex justify-between items-center cursor-pointer bg-gradient-to-r from-gray-600/80 to-gray-800/80 p-[2vw] md:p-[1.2vw] lg:p-[.8vw] rounded-[.6vw]'>
                <p>How secure is PocketBits?</p>
                <img src={faq} className="dra2 w-[8%] md:w-[6%] lg:w-[4%]" />
              </div>
              <div className="faqContent2 hidden bg-[#1A1E23] p-[2vw] md:p-[1.3vw] lg:p-[1.1vw] rounded-[.6vw]">90% of all user funds are stored in a Cold storage and are processed manually, hence funds are always secure even if by chance the systems are ever compromised or down. PocketBits has learned from years of experience and inbibes security in all of its core infrastructure including storing user data.</div>
            </div>
            <div className="faq my-[.8vw] w-full max-w-[95vw] md:max-w-[75vw] lg:max-w-[60vw]  mx-auto">
              <div onClick={faqBtn3} className='faqbtn  flex justify-between items-center cursor-pointer bg-gradient-to-r from-gray-600/80 to-gray-800/80 p-[2vw] md:p-[1.2vw] lg:p-[.8vw] rounded-[.6vw]'>
                <p>What is a closed and open order book?</p>
                <img src={faq} className="dra3 w-[8%] md:w-[6%] lg:w-[4%]" />
              </div>
              <div className="faqContent3 hidden bg-[#1A1E23] p-[2vw] md:p-[1.3vw] lg:p-[1.1vw] rounded-[.6vw]">The order book is the list of all open orders that are currently available on an exchange for a specific asset. An open order is essentially another trader willing to buy or sell an asset at a specific price. Placing an order does not guarantee someone else will agree to take the offer. PocketBits offers a closed order book crypto trading experience wherein PocketBits is the counterparty to your trade and is always available to Buy or Sell with best prices in the market.Thus Instant and Easy.</div>
            </div>
            <div className="faq my-[.8vw] w-full max-w-[95vw] md:max-w-[75vw] lg:max-w-[60vw]  mx-auto">
              <div onClick={faqBtn4} className='faqbtn  flex justify-between items-center cursor-pointer bg-gradient-to-r from-gray-600/80 to-gray-800/80 p-[2vw] md:p-[1.2vw] lg:p-[.8vw] rounded-[.6vw]'>
                <p>What is slippage?</p>
                <img src={faq} className="dra4 w-[8%] md:w-[6%] lg:w-[4%]" />
              </div>
              <div className="faqContent4 hidden bg-[#1A1E23] p-[2vw] md:p-[1.3vw] lg:p-[1.1vw] rounded-[.6vw]">In an open order book buyers need to match buy orders with multiple sell orders placed by sellers at various prices on the order book, eventually increasing the actual buy price & vice versa for sellers. Slippage refers to the difference between the expected price of a trade and the price at which the trade is executed. On PocketBits we have 0% slippage and you can buy upto 10 Lakhs INR at the same price, what you see is what you get.</div>
            </div>
            <div className="faq my-[.8vw] w-full max-w-[95vw] md:max-w-[75vw] lg:max-w-[60vw]  mx-auto">
              <div onClick={faqBtn5} className='faqbtn  flex justify-between items-center cursor-pointer bg-gradient-to-r from-gray-600/80 to-gray-800/80 p-[2vw] md:p-[1.2vw] lg:p-[.8vw] rounded-[.6vw]'>
                <p>How long does it take to approve the KYC?</p>
                <img src={faq} className="dra5 w-[8%] md:w-[6%] lg:w-[4%]" />
              </div>
              <div className="faqContent5 hidden bg-[#1A1E23] p-[2vw] md:p-[1.3vw] lg:p-[1.1vw] rounded-[.6vw]">KYC verification requests are verified in a maximum of 59 minutes, if all details provided are in order.</div>
            </div>
            <div className="faq my-[.8vw] w-full max-w-[95vw] md:max-w-[75vw] lg:max-w-[60vw]  mx-auto">
              <div onClick={faqBtn6} className='faqbtn  flex justify-between items-center cursor-pointer bg-gradient-to-r from-gray-600/80 to-gray-800/80 p-[2vw] md:p-[1.2vw] lg:p-[.8vw] rounded-[.6vw]'>
                <p>How do I earn without Trading?</p>
                <img src={faq} className="dra6 w-[8%] md:w-[6%] lg:w-[4%]" />
              </div>
              <div className="faqContent6 hidden bg-[#1A1E23] p-[2vw] md:p-[1.3vw] lg:p-[1.1vw] rounded-[.6vw]">You can earn without even trading by referring your friends to PocketBits and get 0.1% of the value of their trades as a reward*. You can even hold your crypto assets in our VAULT and earn upto 16.5% APY.</div>
            </div>
          </div>
          <div className="mb-[12vw] mt-[1vw] md:mb-[8vw] lg:my-[5vw]">
            <h1 className="text-[5vw] md:text-[4.5vw] lg:text-[2vw] my-[8vw]">Get Started in a few minutes</h1>
            <div className="animations flex flex-col relative lg:flex-row justify-center lg:justify-around items-center mt-[12vw] md:mt-[2vw] md:mb-[2vw] mb-[20vw] gap-[8vw] md:gap-[6vw] lg:gap-[0vw] lg:my-[5vw] w-[100%] h-[100vw] md:h-[80vw] lg:h-[12vw] ">
              <div className="w-[39%] h-[29%] md:h-[20%] md:w-[22.5%] lg:w-[17%] flex justify-center lg:h-[100%] border-[0.8vw] border-[#42cba4] p-[4vw] md:p-[2.5vw] lg:p-[.8vw] rounded-[50%]">
                <img src={create} className='w-[100%]' />
              </div>
              <div className="w-[39%] h-[30%] md:h-[20%] md:w-[22.5%] lg:w-[17%] flex justify-center lg:h-[100%] border-[0.8vw] border-[#42cba4] p-[4vw] md:p-[2.5vw] lg:p-[0.8vw] rounded-[50%]">
                <img src={finish} className='w-[100%]' />

              </div>
              <div className="w-[39%] h-[30%] md:h-[20%] md:w-[22.5%] lg:w-[17%]  flex justify-center lg:h-[100%] border-[0.8vw] border-[#42cba4] p-[4vw] md:p-[2.5vw] lg:p-[1.2vw] rounded-[50%]">
                <img src={start} className='w-[100%]' />
              </div>
              <div className='flex flex-col absolute gap-[30vw] md:gap-[18.5vw] translate-y-[19vw] md:translate-y-[10vw] lg:translate-y-[9vw] lg:gap-[0vw] lg:flex-row items-center lg:justify-around text-[3.2vw] md:text-[2.6vw] lg:text-[1.4vw] text-center w-full'>
                <p className="w-full lg:w-[20%] ">Create an account</p>
                <p className="w-full lg:w-[20%]">Finish KYC verification</p>
                <p className="w-full lg:w-[20%]">Start buying and selling</p>
              </div>
            </div>

          </div>

        </div>

        <div style={{ backgroundImage: "url('/src/assets/candlestick patterns.f731363f.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }} className="flex flex-col items-center justify-around mt-[6vw]">
          <div className="w-[90%] lg:w-[70%] h-[50vw] lg:h-[25vw] mx-auto rounded-[2vw] bg-gray-600/50 flex flex-col justify-center mt-[8vw] items-center p-[vw]">
            <div className="text-center w-full my-[3vw]">
              <h1 className="text-white font-bold w-full text-center text-[6vw] lg:text-[1.8vw]">Start trading Now</h1>
            </div>
            <div className="flex justify-between items-center rounded-[.5vw] cursor-pointer bg-slate-500/40 w-[90%] lg:w-[40%] p-[2vw] lg:mt-[3vw] lg:p-[.5vw]">
              <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' className='bg-transparent text-[4vw] font-semi-bold lg:text-[1.2vw]' />
              <Button name="Get Started" />
            </div>
            <div className="sm:my-[2vw] font-semibold">
              <p className="text-gray-400 text-[3.8vw] font-bold lg:text-[.9vw] mt-[5vw]">The future of money is just an email away!</p>
            </div>
          </div>
        </div>
      </div>

    )
  }


  export default Home;

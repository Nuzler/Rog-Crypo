import React, { useState } from 'react';
import { FiAlignJustify, FiX } from "react-icons/fi";
import { SiPatreon } from "react-icons/si";
import { SiTradingview } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import { PiThreadsLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = ({setIntro} ) => {

    const [nav,setNav]=useState(false);
    const buttonClick=()=>{
        setNav(!nav)
    }

    const click=()=>{
      setNav(false)
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });}

    const [icons,SetIcons] =useState([
    <Link to={`https://www.patreon.com/ROGCRYPTO`}><SiPatreon className='w-6 h-6 items-center'/></Link>,
    <Link to={`https://www.tradingview.com/u/Rogcrypto/`}><SiTradingview className='w-6 h-6'/></Link>,
    <Link to={`https://t.me/rogcryptolk`}><FaTelegramPlane className='w-6 h-6'/></Link>,
    <Link to={`https://www.tiktok.com/@rogcrypto.lk`}><FaTiktok className='w-6 h-6'/></Link>,
    <Link to={`https://coinmarketcap.com/community/profile/ROGcrypto/`}><SiCoinmarketcap className='w-6 h-6'/></Link>,
    <Link to={`https://www.threads.com/@rogcrypto`}><PiThreadsLogoBold className='w-6 h-6'/></Link>,
    <Link to={`https://www.instagram.com/rogcrypto/`}><FaInstagram className='w-6 h-6'/></Link>])
  return (
    
    <div className='flex bg-black w-full h-15 justify-around md:justify-between items-center  '>

      {/* Desktop User Icons */}
      <div className='flex text-2xl sm:text-xl  md:mx-2 '>
            <h1 className=" font-Audiowide font-extrabold  text-[#1CFA1D]">R</h1>
            <h1 className=" font-Audiowide font-extrabold  text-white ">OG CRYPTO</h1>
            <div className='bg-[#1CFA1D]'></div>
            </div>
      <div onClick={buttonClick} className='text-white md:hidden'>
       {nav ? <FiX className='ml-10 w-6 h-6' />: <FiAlignJustify className='ml-10 w-6 h-6' />}
      </div>
         
      {/* Side Nav for Mobile */}
      <ul className={nav ? 'bg-[#0E101D] md:hidden  w-[65%] h- fixed right-0 top-0 ease-in-out duration-1000 shadow-md' : 'fixed right-[-100%] top-0 ease-in-out duration-1000 z-10'}>
      <div className='flex justify-between my-7 mx-2'>
          <FiX className='w-5 h-5  text-white' onClick={buttonClick} />   
      </div >
      <div className='flex flex-col items-center  gap-3'>
            
            <div className='flex justify-center'>
            <ul className='flex flex-col gap-6  text-white text-sm  font-Boldonse font-bold  items-center '>
            
            <div className='flex border-b-5 border-b-[#1CFA1D] '>
            <h1 className="text-3xl sm:text-xl font-Audiowide font-extrabold  text-[#1CFA1D]">R</h1>
            <h1 className="text-3xl sm:text-xl font-Audiowide font-extrabold  text-white ">OG CRYPTO</h1>
            <div className='bg-[#1CFA1D]'></div>
            </div>
              <div className='bg-[#1CFA1D] w-full h-0.5 opacity-10'></div>
              <li  className=' hover:text-amber-600 cursor-pointer  '><Link onClick={() => {scrollToTop();click(); setIntro(true);}} to={`/`}>HOME</Link></li>
              <div className='bg-[#1CFA1D] w-full h-0.5 opacity-10' ></div>
              <li  className='  hover:text-amber-600 cursor-pointer '><Link  to={`/`}  onClick={() => {document.getElementById('news').scrollIntoView({ behavior: 'smooth' });click();setIntro(true);}}>NEWS</Link></li>
              <div className='bg-[#1CFA1D] w-full h-0.5 opacity-10'></div>
              <li className='  hover:text-amber-600 cursor-pointer '><Link onClick={() => {document.getElementById('refer').scrollIntoView({ behavior: 'smooth' });click();setIntro(true);}} to={`/`}>REFEREL LINKS</Link></li>
              <div className='bg-[#1CFA1D] w-full h-0.5 opacity-10'></div>
              <li className=' hover:text-amber-600 cursor-pointer ' ><Link onClick={()=>{click();}} to={`/myblog`}>MY BlOG</Link></li>
              <div className='bg-[#1CFA1D] w-full h-0.5 opacity-10'></div>
              <li className='  hover:text-amber-600 cursor-pointer '><Link onClick={() => {document.getElementById('youtube').scrollIntoView({ behavior: 'smooth' });click();setIntro(true);}} to={`/`}>MY VIDEOS</Link></li>
              <div className='bg-[#1CFA1D] w-full h-0.5 opacity-10'></div>
              
            </ul>
           
          </div>
      </div>

      <div className='grid grid-cols-7  w-full h-full my-15      '>
        {icons.map((icon)=><div className='border-b border-[#0E101D] bg-[#0E101D]  roundard-xl text-white w-fit h-fit p-2 hover:bg-[#1CFA1D] rounded-xl '>{icon}</div>)}
      </div>
      <div className='bg-[#1CFA1D] w-full h-3'></div>
    </ul>


    {/* Desktop Navigation */}
    <ul className="hidden md:flex font-Orbitron gap-15 text-[14px]  font-bold text-white  md:mx-2   ">
          <li  className="hover:text-[#1CFA1D] cursor-pointer ease-in-out duration-1000"onClick={() => {scrollToTop();setIntro(true);setIntro(true);}}><Link to={`/`}>Home</Link></li>
          <li  className="hover:text-[#1CFA1D] cursor-pointer ease-in-out duration-1000" onClick={() =>{ document.getElementById('news').scrollIntoView({ behavior: 'smooth' });setIntro(true);}}><Link to={`/`}>NEWS</Link></li>
          <li className="hover:text-[#1CFA1D] cursor-pointer ease-in-out duration-1000"onClick={() => {document.getElementById('refer').scrollIntoView({ behavior: 'smooth' });setIntro(true);}}><Link to={`/`}>REFEREL LINKS</Link></li>
          <li className="hover:text-[#1CFA1D] cursor-pointer ease-in-out duration-1000"><Link to={`/myblog`}>My Blog</Link></li>
          <li className="hover:text-[#1CFA1D] cursor-pointer ease-in-out duration-1000" onClick={() => {document.getElementById('youtube').scrollIntoView({ behavior: 'smooth' });setIntro(true);}}><Link to={`/`}>MY VIDEOS</Link></li>
    </ul>



</div>
  )
}

export default Navbar

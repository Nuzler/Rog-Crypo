import React from 'react'
import Hero1 from'../assets/Hero8.png'
import EconomicCountdown from './EconomicCountdown'
import CryptoTicker from './CryptoTicker'
import { motion } from 'framer-motion';


const Hero = () => {

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Time between each word
      }
    }
  };
  
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const HalvingCountdown = () => (
    <div className="w-full h-[300px]">
      <iframe
        src="https://www.nicehash.com/countdown/btc-halving"
        width="100%"
        height="300"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        title="Bitcoin Halving Countdown"
      />
    </div>
  );
  return (
    <div className="w-full  md:h-150 bg-cover md:bg- bg-black md:contrast-140 "
    style={{ backgroundImage: `url(${Hero1})` }}>
        <div className=' flex flex-col  items-center py-[10%]'>
            <div className='flex text-xl sm:text-xl  md:mx-2 '>
               <motion.h1 initial={{ opacity: 0,}}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, ease: "easein" }} className=" font-Audiowide font-extrabold  text-[#1CFA1D]">R<span className='text-white'>OG CRYPTO</span></motion.h1>
               
            </div>
            <motion.h1
                initial={{ opacity: 0,  }}
                animate={{ opacity: 1,  }}
                transition={{ duration: 3, ease: "easeOut" }}
                className='text-white text-4xl font-Bangers md:text-8xl text-shadow-lg text-shadow-[#1CFA1D]/10 text-center'
            >
            <span className='text-[#1CFA1D]'>D</span>iscover The <span className='text-[#1CFA1D]'>N</span>ext <span className='text-[#1CFA1D]'>B</span>ig <span className='text-[#1CFA1D]'>O</span>pportunity:
            </motion.h1>
            <div className='my-10'>
            <EconomicCountdown/>

            
            </div>
           
            
        </div>    
    </div>
  )
}

export default Hero

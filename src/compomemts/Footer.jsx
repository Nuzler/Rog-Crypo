import React from 'react'
import Binance from '../assets/FooterIcon/binance.png'
import CoinMarketCap from '../assets/FooterIcon/CoinMarketCap.png'
import Instagram from '../assets/FooterIcon/instagram.png'
import Mexc from '../assets/FooterIcon/mexc.png'
import Patreon from '../assets/FooterIcon/patreon.png'
import Telegram from '../assets/FooterIcon/telegram.png'
import Threads from '../assets/FooterIcon/threads.png'
import Tiktok from '../assets/FooterIcon/tiktok.png'
import TradingView from '../assets/FooterIcon/TradingView.png'
import X from '../assets/FooterIcon/x.png'
import Background from '../assets/Background3.jpg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <div className="bg-gradient-to-b from-black via-black to-green-600 py-10 flex flex-col items-center  ">
            <h1 className="text-gray-700 text-xl md:text-xl font-Audiowide text-center mb-6">Follow US</h1>
            <h1 className="xl:text-5xl text-2xl font-Audiowide font-extrabold text-[#1CFA1D] pb-5">
            R<span className="text-white">OG CRYPTO</span> </h1>
            <div className="grid  grid-cols-5 gap-4 xl:gap-7 xl:p-3  ">
            <Link to={`https://x.com/xROGCRYPTO`}> <img src={X} className='w-10 h-10 '/></Link>
            <Link to={`https://www.instagram.com/rogcrypto/`}><img src={Instagram} className='w-10 h-10 '/></Link>
            <Link to={`https://www.patreon.com/ROGCRYPTO`}><img src={Patreon} className='w-10 h-10  border-1 border-white rounded-full'/></Link>
            <Link to={`https://www.mexc.com/register?inviteCode=mexc-ROGCRYPTO`}><img src={Mexc} className='w-10 h-10 '/></Link>
            <Link to={`https://www.tiktok.com/@rogcrypto.lk`}><img src={Tiktok} className='w-10 h-10 '/></Link>
            <Link to={`https://www.binance.com/en/square/profile/ROGcrypto?_ul=aHR0cHM6Ly9hcHAuYmluYW5jZS5jb20vdW5pLXFyL2Nwcm8vUk9HY3J5cHRv`}><img src={Binance} className='w-10 h-10 '/></Link>
            <Link to={`https://www.tradingview.com/u/Rogcrypto/`}><img src={TradingView} className='w-10 h-10 '/></Link>
            <Link to={`https://www.threads.com/@rogcrypto`}><img src={Threads} className='w-10 h-10  border-1 border-white rounded-full'/></Link>
            <Link to={`https://coinmarketcap.com/community/profile/ROGcrypto/`}><img src={CoinMarketCap} className='w-10 h-10 '/></Link>
            <Link to={`https://t.me/rogcryptolk`}><img src={Telegram} className='w-10 h-10 '/></Link>
            </div>
    
        </div>
    </div>
  )
}

export default Footer

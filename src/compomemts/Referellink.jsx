import React, { useState } from 'react'
import Mexc from '../assets/mexc-logo.png'
import Binance from '../assets/binance-logo.png'
import Bybit from '../assets/bybit-logo.png'
import Kucoin from '../assets/kucoin-logo.png'
import Bitget from '../assets/bitget-logo.png'
import Gate from '../assets/gate.io-logo.png'
import Kraken from '../assets/kraken-logo.png'
import Coinbase from '../assets/coinbase-logo.png'

const Referellink = () => {

    const items=[{id:1,name:'Mexc.com',image:Mexc,discription:'Join MEXC with our referral link and start trading over 1,500 cryptocurrencies on one of the fastest-growing global exchanges.',color:1},
        {id:2,name:'Binance',image:Binance,discription:'Sign up on Binance through our link and enjoy low trading fees, advanced tools, and access to the world’s largest crypto exchange.',color:2},
        {id:3,name:'Bybit',image:Bybit,discription:'Trade crypto derivatives and spot with lightning-fast execution. Use our referral to get bonuses and earn rewards!',color:1},
        {id:4,name:'Kucoin',image:Kucoin,discription:'Access thousands of altcoins, margin trading, and staking options. Sign up with our KuCoin link and be part of the People’s Exchange.',color:2},
        {id:5,name:'Bitget',image:Bitget,discription:'Start copy trading with top traders or use futures with advanced tools on Bitget. Register with our link for exclusive welcome bonuses.',color:1},
        {id:6,name:'Gate.io',image:Gate,discription:'Explore a wide range of tokens and DeFi projects. Sign up through our Gate.io referral for trading fee discounts and giveaways.',color:2},
        {id:7,name:'Kraken',image:Kraken,discription:'Get started with a secure, US-regulated exchange. Sign up with our referral link for access to fiat-to-crypto trading and staking.',color:1},
        {id:8,name:'Coinbase',image:Coinbase,discription:'Sign up with Coinbase for a beginner-friendly way to buy crypto.Use our referral to earn free Bitcoin on your first trade.',color:2}
    ]

  return (
    <div className='bg-black h-'>
        <h1 className="text-white text-4xl md:text-6xl font-Audiowide text-center mb-6">Top Deals</h1>
            <div className="max-w-screen-xl mx-auto">
                   <div className="grid grid-cols-1 md:grid-cols-4 gap-1 justify-items-center">
                   {items.map((item)=>  <div className={item.color==2?"relative flex flex-col bg-gradient-to-tl from-black via-slate-900 to-[#1CFA1D] shadow-sm rounded-xl pb-6 w-80 border-4 p-4  hover:border-black hover:border-[3px]":"relative flex flex-col bg-gradient-to-t from-black to-slate-800 shadow-sm rounded-xl pb-6 w-80 border-4 p-4  hover:border-black hover:border-[3px] "}>
                              <div className='flex items-center gap-3'>
                                     <img className={item.color==2?'w-10 h-10 border border-black rounded-3xl p-2 bg-black':'w-10 h-10 border border-amber-400 rounded-3xl p-2 bg-amber-500'} src={item.image}/>
                                     <h1 className='font-Anton text-white'>{item.name}</h1>   
                                </div>
                                <div className='text-white pt-1'>
                                    <p>{item.discription}</p>
                                </div>
                                <div className='flex justify-between pt-3'>
                                    <button className='text-white font-Passion-One font-bold bg-black border-2 border-[#1CFA1D] py-1 px-9 rounded-md'>Click Me</button>
                                    <button className='text-black font-Passion-One font-bold bg-[#1CFA1D] border-2 border-[#1CFA1D] py-1 px-9 rounded-md'>Sign Up</button>

                                </div>  
                        </div>   )}     

                    </div> 
            </div>  

    </div>
  )
}

export default Referellink

import React, { useEffect, useState } from 'react';
import './CryptoTicker.css'; // custom animation CSS

const CryptoTicker = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(
         'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,dogecoin,shiba-inu,xrp,pepe,bonk,dogewhat,cat-inu,cardano,polkadot,litecoin,tron,aptos,arbitrum,chainlink,avalanche'
        );
        const data = await res.json();
        setCoins(data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 100000000); // update every 10 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-neutral-900 via-emerald-900 to-green-500 text-white py-2">
      <div className="flex animate-marquee whitespace-nowrap">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="flex items-center gap-2 px-6 border-r border-gray-700"
          >
            <img src={coin.image} alt={coin.name} className="w-5 h-5" />
            <span className="uppercase font-semibold">{coin.symbol}</span>
            <span>${coin.current_price.toFixed(4)}</span>
            <span
              className={`text-sm ${
                coin.price_change_percentage_24h >= 0
                  ? 'text-green-400'
                  : 'text-red-400'
              }`}
            >
             {crypto.price !== null && crypto.price !== undefined ? crypto.price.toFixed(2) : coin.price_change_percentage_24h.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTicker;
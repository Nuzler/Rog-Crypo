import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './compomemts/Navbar';
import Hero from './compomemts/Hero';
import CoinPrice from './compomemts/CryptoTicker';
import News from './compomemts/News';
import Referellink from './compomemts/Referellink';
import Footer from './compomemts/Footer';
import Youtube from './compomemts/Youtube';
import NewsDetails from './compomemts/NewsDetails';
import Blog from './compomemts/Blog';
import PageIntro from './compomemts/PageIntro';
import EconomicCalendar from './compomemts/EconomicCalendar';
import AddCard from './compomemts/AddCard';

function HomePage({ introDone, setIntroDone , showAddCard , setShowAddCard}) {

  return (
    <>
      <div className="pt-[80px] z-10 relative" id="hero">
      
      <Hero />
      </div>
      <EconomicCalendar/>
      <div id="news">
        <News />
      </div>
      <div id="refer">
        <Referellink />
      </div>
      <div id="youtube">
        <Youtube />
      </div>
      
      
      <Footer />

      
    </>
  );
}

function App() {

  const [introDone, setIntroDone] = useState(false);
  const [showAddCard, setShowAddCard] = useState(false);
  const blurClass = showAddCard ? 'blur-sm pointer-events-none select-none' : '';

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAddCard(true);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative w-full overflow-hidden bg-black">
      <BrowserRouter>
        {/* Navbar and ticker (always visible) */}
        <div className={`fixed top-[0px] w-full z-30 ${blurClass}`}>
          <Navbar setIntro={setIntroDone}/>
        </div>
        <div className={`fixed top-[60px] w-full z-20 ${blurClass}`}>
          <CoinPrice />
        </div>

        {/* Main routed content */}
        <div className="pt-5 z-10 relative">
          <Routes>
            <Route path="/" element={<HomePage introDone={introDone} setIntroDone={setIntroDone}  showAddCard={showAddCard} setShowAddCard={setShowAddCard}  />} />
            
            <Route path="/news/:index" element={<NewsDetails setIntro={setIntroDone} />} />
            <Route path="/myblog" element={<Blog />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

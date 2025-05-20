import React, { useEffect, useState } from 'react';
import News1 from '../assets/News1.jpg';
import News2 from '../assets/News2.jpg';
import News3 from '../assets/News3.jpg';
import { Link } from 'react-router-dom';
import Url from '../assets/assets'

const News = () => {

const [news,setNews]=useState([])
const[hide,setHide]=useState(true)
const[limit,setLimit]=useState(true)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });}

const buttonClick=()=>{

  setLimit(!limit)
}
console.log(limit)

useEffect(()=>{
  fetch(`https://rogcryptobackend-648491182682.europe-west1.run.app/api/news/${limit?'home':'all'}`)
  .then(response=>response.json())
  .then(data=>setNews(data))
  .catch(error => console.error("Error fetching foods:", error));
  
},[limit])
console.log(news)

  return (
    <div className="bg-black py-10 px-4">
      <h1 className="text-white text-4xl md:text-6xl font-Audiowide text-center mb-6">Editors Pick</h1>

      {/* Wrapper to center content */}
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-1 justify-items-center">
          {/* News Card 1 */}
          {news.map((item, index)=>
          <div key={index} className="relative flex flex-col bg-neutral-950  shadow-xl shadow-green-700 rounded-2xl pb-6 w-80 border-4 border-[#1CFA1D] hover:border-black hover:border-[3px]">
            <div className="relative p-2.5 h-60 overflow-hidden rounded-xl">
              <img src={item.imageUrl} className="h-60 w-full object-cover rounded-xl" />
            </div>
            <div className="mt-2 px-2">
              <h1 className="text-white text-xl font-semibold">{item.title}</h1>
            </div>
            <div className="mt-2 px-2">
              <p className="text-white text-sm line-clamp-3">{item.description}</p>
            </div>
            <div className="flex justify-between text-[10px] pt-3 text-white px-2">
              <h1>{item.author}</h1>
              <h1>{item.publishedDate}</h1>
            </div>
            <Link className='text-white px-2 '
                to={`/news/${index}`}
                onClick={() =>{
                  scrollToTop();
                  localStorage.setItem('newsItem', JSON.stringify(item));
                } }
                >
                Read More
            </Link>
            
          </div>
          )} 
        </div>
      </div>
      <h1 onClick={buttonClick} className='text-white text-sm md:text-md font-Audiowide text-center mb-6 pt-8 cursor-pointer hover:text-'>{limit?'See More':'See Less'}</h1>
    </div>
  );
};

export default News;

import React from 'react'
import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

const NewsDetails = ({setIntro}) => {
    const { index } = useParams();
    const item = JSON.parse(localStorage.getItem('newsItem'));
    const cleanedHTML = cleanDescription(item.contentEncoded);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });}

   function cleanDescription(htmlString) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlString;

  // OPTIONAL: Remove first two <img> and their <p> if needed
  const images = tempDiv.querySelectorAll('img');
  for (let i = 0; i < 2 && i < images.length; i++) {
    const img = images[i];
    if (img.parentElement) {
      img.parentElement.remove();
    } else {
      img.remove();
    }
  }

  // Allow additional tags like iframe, video, etc.
  return DOMPurify.sanitize(item.contentEncoded, { USE_PROFILES: { html: true } });
}

console.log("Raw:", item.contentEncoded);
console.log("Sanitized:", cleanedHTML);
  
    if (!item) return <p>News not found</p>;
  
    return (
      <div className='bg-black '>
        <div className='text-white flex flex-col items-center md:border-8 border-4 border-[#1CFA1D] rounded-2xl p-1 mt-20'>
        <h1 className=' font-Berkshire-Swash text-2xl md:text-6xl pb-5 text-center'>{item.title}</h1>
        <img src={item.imageUrl} alt={item.title}  className='md:w-[50%]'/>
       <div
  className="news-content text-white font-Oleo-Script p-4 md:px-15 text-left"
  dangerouslySetInnerHTML={{ __html: cleanedHTML }}
/>
        </div>
        <div className='flex text-black font-Anton justify-between px-2 py-2 '>
        <a href={item.link} target="_blank" rel="noreferrer" className='border border-[#1CFA1D] rounded-xl py-1 px-6 bg-[#1CFA1D]'>Original Source</a>
        <Link className=' border border-[#1CFA1D] rounded-xl py-1 px-9 bg-[#1CFA1D] '
                onClick={()=>{scrollToTop();setIntro(true);}}
                to={`/`}
                
                >
                Home
            </Link>
            </div> 

      </div>
    );
}

export default NewsDetails

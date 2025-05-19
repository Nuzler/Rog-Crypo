import React, { useEffect, useState } from 'react'
import Url from '../assets/assets'

const Blog = () => {

  const [data,setData]=useState([])

  useEffect(() => {
    fetch(`http://13.53.132.201:8080/GetContents`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

   const renderSection = (sec) => {
    switch (sec.type) {
      case 'text':
        return <h1>{sec.content}</h1>;
      case 'image':
        return <img src={sec.content} alt="section content" />;
       case 'video':
  // Convert short YouTube URL to embed format
  const youtubeId = sec.content.split('/').pop();
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;
  return (
    <div className="aspect-w-16 aspect-h-9  xl:aspect-w-30 xl:aspect-h-30 ">
      <iframe
        src={embedUrl}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
      case 'imageTag':
        return <h1>{sec.content}</h1>;
      case 'subHeadline':
        return <h1 className='text-xl font-bold'>{sec.content}</h1>;
      case 'linkText':
        return <h1>{sec.content}</h1>;      
     
      default:
        return <div>Unknown section type</div>;
    }
  };

 

  return (
    <div >
    <h1 className='text-white flex justify-center text-5xl font-Orbitron font-bold pt-20'><span className='text-[#1CFA1D] '>M</span>Y Blog</h1>
    
    <div className='lg:flex md:pt-8 xl:mx-50 lg:mx-20 md:mx-20 sm:mx-10 pt-5'>
    <div className='flex flex-col  gap-20 xl:border xl:w-[800px] border-black text-white '>
      {data.map((data)=>
      <div className='flex flex-col items-center  rounded-2xl border-b-1 border-b-gray-900 '>
      <h1 className='font-Berkshire-Swash text-xl lg:text-4xl pb-5 '>{data.title}</h1>
      <img className='rounded-2xl lg:w-[800px] lg:h-[500px] pt-2 ' src={data.imgUrl}/>

      {data.section.map((sec,index)=>
      <div key={index} className='p-2'>
        {renderSection(sec)}
      </div>
      )}
      </div>
      )}
    </div>
    
    <h1 className='hidden md:flex flex-col text-2xl pt-8  py-6 gap-3 '>Advertistment</h1>
    </div>
    </div>
  )
}

export default Blog

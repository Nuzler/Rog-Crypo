import React, { useEffect, useState } from 'react'

const Youtube = () => {
const [videos,setVideos]=useState([])
const[loading,setLoading]=useState()

useEffect(()=>{
   const endpoint=new URL('https://youtube.googleapis.com/youtube/v3/search');
   endpoint.search=new URLSearchParams({
    key:'AIzaSyCHjuWjKwbTG7LbpTyM1-wGG63sAbYXApU',
    channelId:'UCGSlCDyupzWjzS0QHO6LOug',
    part: 'snippet',
    order: 'date',
    maxResults: 6,
  }).toString();
  

   fetch('http://localhost:8080/api/videos')
    .then(res => {
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json();
  })
  .then(data => {
    // data.items is an array of videos
    setVideos(data);
  })
  .catch(err => {
    console.error('YouTube API error:', err);
  })
  .finally(() => setLoading(false));

},[])

  
  return (
    <div className='bg-black pt-8 '>
    <h1 className="text-white text-4xl md:text-6xl font-Audiowide text-center mb-6">Youtube Videos</h1>
        <div className="max-w-screen-xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-center ">
      {videos.map((v,index) => (
        <div
        key={index}
        className="relative flex flex-col mx-2 bg-black border-[3px] border-[#1CFA1D] rounded-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-[#1CFA1D]"
      >
        <a
          href={v.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <img
            src={v.thumbnail}
            alt={v.title}
            className="w-full rounded-t-xl object-cover"
          />
          <h4 className="text-white p-2 font-Anton">{v.title}</h4>
          <p className="text-white font-Oleo-Script px-2 pb-3">
            {new Date(v.publishedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </a>
      </div>
      ))}
    </div>
    <a
      href="https://www.youtube.com/@rogcrypto"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-sm md:text-md font-Audiowide text-center pt-10 pb-10 cursor-pointer hover:text-red-500 block"
    >
  See More
</a>
    </div>
    </div>
  )
}

export default Youtube

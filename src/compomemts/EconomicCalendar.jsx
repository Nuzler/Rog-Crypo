import React, { useEffect, useState } from "react";

const EconomicCalendar = () => {
    
const[calenderData,setCalenderData]=useState([])
const[data,setData]=useState([])

useEffect(()=>{
    fetch('https://api.tradingeconomics.com/calendar?c=9d2d95974b9345c:t8rwmujkay2cheq')
    .then(response=>response.json())
    .then(data=>setCalenderData(data))
    .catch(error=>console.error(error))


 
},[])

useEffect(()=>{
   
    fetch('http://localhost:8080/getEvent')
  .then(response=>response.json())
  .then(data=>setData(data))
  .then(error=>console.error(error))
},[])




console.log('calData',calenderData);

  return (
    <div className="w-full h-full border-none py-10">
      <h1 className="text-white text-4xl md:text-6xl font-Audiowide text-center mb-6">Economic Calender</h1>

      <table className="table-auto   w-full border-separate  border-spacing-x-4 border-spacing-y-2  ">
        <thead className="text-black bg-[#1CFA1D] ">
          <th>Date</th>
          <th>Country</th>
          <th>Event</th>
          <th className="hidden md:table-cell">Actual</th>
          <th className="hidden md:table-cell">Previous</th>
          <th className="hidden md:table-cell">Forecast</th>
        </thead>
         <tbody className="text-white text-center">
          {calenderData.map((data, index) => {
            const dateObj = new Date(data.Date);
            const formattedDate = dateObj.toLocaleDateString(); 
            const formattedTime = dateObj.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }); 

            return (
              <tr key={index} className="">
                <td className="border-b border-gray-600">
                  <div>{formattedDate}</div>
                  <div className="text-gray-400 text-sm">{formattedTime}</div>
                </td>
                <td className="border-b border-gray-600">{data.Country}</td>
                <td className="border-b border-gray-600">{data.Event}</td>
                <td className="hidden md:table-cell border-b border-gray-600">{data.Actual}</td>
                <td className="hidden md:table-cell border-b border-gray-600">{data.Previous}</td>
                <td className="hidden md:table-cell border-b border-gray-600">{data.Forecast}</td>
              </tr>
            );
          })}

          {data.map((item)=>{
            const dateObj = new Date(item.date);
            const formattedDate = dateObj.toLocaleDateString(); 
            const formattedTime = dateObj.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }); 

            return(
              <tr key={item.eventId}>
                  <td className="border-b border-gray-600">
                  <div>{formattedDate}</div>
                  <div className="text-gray-400 text-sm">{formattedTime}</div>
                </td>
                <td className="border-b border-gray-600">{item.country}</td>
                <td className="border-b border-gray-600">{item.event}</td>
                <td className="hidden md:table-cell border-b border-gray-600">{item.actual}</td>
                <td className="hidden md:table-cell border-b border-gray-600">{item.privious}</td>
                <td className="hidden md:table-cell border-b border-gray-600">{item.forecast}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      
    
    </div>
  );
};

export default EconomicCalendar;

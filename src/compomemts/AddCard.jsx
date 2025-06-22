import React from 'react'
import Add from '../assets/add2.jpg'
import { AiFillCloseSquare } from "react-icons/ai";

const AddCard = () => {
  return (
    <div className='flex justify-center' >
      <div className="relative  bg-black border-3 rounded-2xl shadow-2xl  shadow-[#1CFA1D] border-[#1CFA1D] w-fit h-fit m-3">
        
        <div class="flex justify-center px-1 py-2 ">
        <img src={Add} className=' flex w-[600px] h-[300px] '/>
        </div>
      </div>
    </div>
  )
}

export default AddCard

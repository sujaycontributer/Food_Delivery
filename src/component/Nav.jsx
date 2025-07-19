import React from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";


function Nav() {
  return (
    <div className="w-full h-[100px] flex justify-between items-center p-5 md:p-8 ">
        <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
               <IoFastFoodSharp className="w-[30px]  h-[30px]  text-green-500"/>
        </div>
        <form className="w-[50%] h-[55px] bg-white flex items-center rounded-md shadow-xl px-5 gap-5 md:w-[70%]">
<FaSearch className="text-green-500 w-[20px] h-[20px]" />
<input type="text" placeholder="Search Item..." className="w-[100%] outline-none"/>
        </form>
        <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative">
            <span className="absolute top-0 right-2 text-green-500 font-bold text-[18px]">0</span>
            <RiShoppingBag3Line className="w-[30px]  h-[30px]  text-green-500"  />
        </div>


 </div>
  )
}
export default Nav
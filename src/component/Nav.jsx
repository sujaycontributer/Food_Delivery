import React, { useContext, useState } from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import { food_items } from "../food";
import { DishContext } from "./DishProvider";
import NodalCard from "./NodalCard";

function Nav() {
  const {cart} = useContext(DishContext);
  const [nodal, setNodal] = useState(false);
  
  return (
    <div className="h-full w-full relative">
      <div className="w-full h-[100px]  relative flex justify-between items-center p-5 md:p-8 ">
        <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
               <IoFastFoodSharp className="w-[30px]  h-[30px]  text-green-500"/>
        </div>
        <form className="w-[50%] h-[55px] bg-white flex items-center rounded-md shadow-xl px-5 gap-5 md:w-[70%]">
          <FaSearch className="text-green-500 w-[20px] h-[20px]" />
          <input type="text" placeholder="Search Item..." className="w-[100%] outline-none"/>
        </form>
        <div className={`w-[60px] h-[60px] cursor-pointer bg-white flex justify-center items-center rounded-md shadow-xl relative`}  onClick={() => setNodal(toggle => !toggle)} >
            <span className="absolute top-0 right-2 text-green-500 font-bold text-[18px]">{cart}</span>
            <div><RiShoppingBag3Line className="w-[30px] h-[30px]  text-green-500" /></div>
           
        </div>
      </div>

      <div className={`${nodal?'block':'hidden'} z-50 fixed top-3 right-3 w-[400px] h-[600px] rounded-md bg-red-500 p-2`}>
        <div className="bg-black h-full w-full overflow-y-auto" >
           <div className="w-[300px] h-[300px] mb-4 bg-red-50"></div>
             <div className="w-[300px] h-[300px] bg-red-50"></div>
             <div className="w-[300px] h-[300px] bg-red-50"></div>
             <div className="w-[300px] h-[300px] bg-red-50"></div>
             <div className="w-[300px] h-[300px] bg-red-50"></div>
             <div className="w-[300px] h-[300px] bg-red-50"></div>
             <div className="w-[300px] h-[300px] bg-red-50"></div>
             <div className="w-[300px] h-[300px] bg-red-50"></div>
             <div className="w-[300px] h-[300px] bg-red-50"></div>
             <div className="w-[300px] h-[300px] bg-red-50"></div>
             <div className="w-[300px] h-[300px] bg-red-50"></div>
             <div className="w-[300px] h-[300px] bg-red-50"></div>
             <div className="w-[300px] h-[300px] bg-red-50"></div>

             
        </div>
      </div>

    </div>
)}

export default Nav
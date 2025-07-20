import React, { useContext } from "react" 
import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { DishContext } from "./DishProvider";

function Card({name,image,id,price,type}){
   const {cart, setCart, dishes, setDishes} = useContext(DishContext);
   const handler = () => {
       setDishes([...dishes, {id, name, price, type}]);
       setCart(p => p+1);
       console.log(dishes)
   }

return(
    <div className="w-[380px] h-[400px] bg-white p-3 rounded-lg  flex flex-col gap-3 shadow-lg hover:border-2 border-green-300">
       <div className=" w-[100%] h-[70%] overflow-hidden object-cover rounded-lg">
              <img src={image} alt="" />
       </div>
       <div className="text-2xl font-semibold">
              {name}
       </div>
       <div className="w-full flex justify-between items-center">
              <div className="text-green-500 text-lg font-bold  ">Rs {price}/-</div>
              <div className="flex justify-center items-center gap-3 text-green-500">{type==="veg"?<LuLeafyGreen />:<GiChickenOven className="text-red-600" />}<span className="text-green-500">{type}</span></div>
       </div>
       <button className="w-full p-4  bg-green-600 rounded-lg shadow-xl text-white font-bold hover:bg-green-400 transition-all" onClick={setCart(p => p+1)}>Add to dish</button>
    </div>
)}

export default Card 

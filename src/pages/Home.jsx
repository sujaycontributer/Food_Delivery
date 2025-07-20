import React, { useState } from "react";
import Nav from "../component/nav";
import { Category } from "../category";
import Card from "../component/card";
import { food_items } from "../food";
import DishProvider from "../component/DishProvider";

function Home() {
    let [cate,setCate] = useState(food_items)

    function filter(category) {
        
            if (category === "All") {
                setCate(food_items)
            }
            else {
                let newList = food_items.filter((item) => (item.food_category === category))
                setCate(newList)
            }
   }
    return (
        <DishProvider>
            <div className="bg-slate-300 w-full min-h-[100vh]">
            <Nav />
            <div className="flex flex-wrap justify-center items-center gap-6 w-[100%] ">
                {Category.map((item) => {
                    return <div key={item.id} className="w-[140px] h-[150px] bg-white  flex flex-col items-start gap-5 p-5 rounded-lg shadow-xl text-[20px] font-semibold text-gray-600  hover:bg-green-200 cursor-pointer transition-all duration-200" onClick={() => filter(item.name)}>
                        {item.image}
                        {item.name}
                    </div>
                })}
            </div>
            <div>
                <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
                    {cate.map((item) => (
                        <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} key={item.id} />
                    )

                    )}
                </div>
            </div>
        </div>
        </DishProvider>
    )
}
export default Home 
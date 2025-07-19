import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineRestaurantMenu } from "react-icons/md";

export const Category=[
    {
        id:1,
        name:"All",
        image:<TiThSmallOutline  className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:2,
        name:"breakfast",
        image:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:3,
        name:"soups",
        image:<TbSoup className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:4,
        name:"pizza",
        image:<GiFullPizza className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:5,
        name:"burger",
        image:<GiHamburger className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id:6,
        name:"pasta",
        image:<CiBowlNoodles className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:7,
        name:"main_course",
        image:<MdOutlineRestaurantMenu className="w-[60px] h-[60px] text-green-600" />
    },

]
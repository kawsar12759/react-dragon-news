import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('/categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data));
    },[])
    return (
        <div className="">
            <h2 className="text-xl font-semibold mb-5">All Categories</h2>
            {
                categories.map(category => <NavLink className={({ isActive }) =>
                isActive ? "bg-[#E7E7E7] text-[#403F3F] block ml-4 text-xl font-semibold p-4 ":"block ml-4 text-xl font-medium text-[#9F9F9F] p-4"} key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>)

            }
        </div>
    );
};

export default LeftSideNav;
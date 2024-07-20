import React from "react";
import { Link } from "react-router-dom";
const Navb=()=>{
    return(
        <div className="flex flex-row h-[60px] bg-navbar justify-end">
            <Link to="/">
        <div className="text-white px-[25px] pt-[15px]">Pagination1</div>
        </Link>
        
        </div>
    )
}

export default Navb;
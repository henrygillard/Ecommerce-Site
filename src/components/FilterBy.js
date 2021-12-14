import { useState } from "react"
import { Link } from "react-router-dom";
import { categories } from "../config/database";

export default function FilterBy({products, setProducts, selected, setSelected }) {
    const [openFilter, setOpenFilter] = useState(false)

   

    return (
    <>
        <div className="category-title" onClick={() => setOpenFilter(prevSelected => !prevSelected)}>
            <span>{openFilter ? "Filter By -" : "Filter By + "}</span>
        </div>
        {openFilter ? 
            <div className="category-selector">Opened</div>
        : <div></div>
        }
    </>
            
        
    )
}
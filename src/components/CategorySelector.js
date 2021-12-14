import { useState } from "react"
import { Link } from "react-router-dom";
import { categories } from "../config/database";

export default function CategorySelector({products, setProducts, selected, setSelected }) {
    const [isActive, setActive] = useState(false)

   

    return (
        <div className="category-selector">
           {categories.map((c, idx) => <Link className='links' to={`/products/${c}`}><li  className= "category-selector-items" id={{c}}>{c.toUpperCase()}</li></Link>)}
        </div>
    )
}
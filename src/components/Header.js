import { useState } from "react"
import { Link } from "react-router-dom"
import CategorySelector from "./CategorySelector"
import { categories } from "../config/database";
import SearchBar from "./SearchBar";
export default function Header({setProducts, products}) {
    const [selected, setSelected] = useState(false);


    return (
        <header>
            <div className="header-title">
            <h1 className="store-logo">Henry's Store</h1>
            <SearchBar setProducts={setProducts} products={products}/>
            </div>
            <nav>
                <div className="links-container">
                    <div><Link className="header-links" to="/products">ALL PRODUCTS</Link ></div>
                    <div className="header-links" onClick={() => setSelected(prevSelected => !prevSelected)}>CATEGORY</div>
                    <div><Link className="header-links" to="/about">ABOUT</Link></div>
                </div>
                {selected ? 
                <div className="header-categories">
                     {categories.map((c, idx) => <Link className="links" to={`/products/${c}`} ><li className="header-categories-items">{c.toUpperCase()}</li></Link>)}
                </div>
                : <div></div>}
            </nav>
        </header>
    )
}
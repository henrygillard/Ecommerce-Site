import { useEffect, useState } from 'react';
import { resolvePath, useParams } from 'react-router';
import CategorySelector from './CategorySelector';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';





export default function Index({ products, setProducts }) {

const [selected, setSelected] = useState(false);
const [openSort, setOpenSort] = useState(false);
const [switchview, setswitchview] = useState(false);


const {id} = useParams();

const filtered = products && products.filter(p => p.category === id)

function sortPrice1() {
    const sorted = products.sort(function(a,b) {
        return a.price - b.price;
    })
    setProducts(sorted);

    
    console.log(sorted)
}
function sortPrice2() {
    const sorted = products.sort(function(a,b) {
        return b.price - a.price;
    })
    setProducts(sorted);

    
    console.log(sorted)
}

function sortRating1() {
    const sorted = products.sort(function(a,b) {
        return a.rating.rate - b.rating.rate;
    })
    setProducts(sorted);

    
    console.log(sorted)
}

function sortRating2() {
    const sorted = products.sort(function(a,b) {
        return b.rating.rate - a.rating.rate;
    })
    setProducts(sorted);

    
    console.log(sorted)
}
  
 
    return (
        <div>
            <h2 className="product-header">{id === undefined ? "All Products" : id.toUpperCase()}</h2>
            <section className="index-sub-header">
                <button className="grid-view-button" onClick={() => setswitchview(prevSwitchview => !prevSwitchview)}>Switch Grid View</button>
            </section>
            <div className="index-container">
                <div className="side-nav">
                    <div className="category-title"><span>BROWSE BY:</span></div>
                    <hr />
                    <div className="category-title" onClick={() => setSelected(prevSelected => !prevSelected)}><span>{selected ? "Category -" : "Category + "}</span></div>
                    {selected ? 
                    <CategorySelector products={products} 
                    selected={selected}
                    setSelected={setSelected}
                    setProducts={setProducts}/>
                    : <div></div>}
                    <div className="category-title" onClick={() => setOpenSort(prevSelected => !prevSelected)}><span>{openSort? "Sort By -" : 'Sort By +'}</span></div>
                    {openSort ? 
                        <div className="category-selector">
                            <div onClick={sortPrice1} className="category-selector-items"><Link className="links" to={id === undefined ? "/products" : `/products/${id}`}>PRICE (LOW TO HIGH)</Link></div>
                            <div onClick={sortPrice2} className="category-selector-items"><Link className="links" to={id === undefined ? "/products" : `/products/${id}`}>PRICE (HIGH TO LOW)</Link></div>
                            <div onClick={sortRating1} className="category-selector-items"><Link className="links" to={id === undefined ? "/products" : `/products/${id}`}>RATING (LOW TO HIGH)</Link></div>
                            <div onClick={sortRating2} className="category-selector-items"><Link className="links" to={id === undefined ? "/products" : `/products/${id}`}>RATING (HIGH TO LOW)</Link></div>
                        </div>
                    : <div></div>}

                   
                    </div>
                    { id === undefined ? 
                    <div className={switchview ? "products-container-view2" : "products-container"}>
                    {products && products.map((p, idx) => <ProductCard product={p} idx={idx} selected={selected} setSelected={setSelected}/>)}
                </div>
                : 
                <div className={switchview ? "products-container-view2" : "products-container"}>
                    {filtered && filtered.map((p, idx) => <ProductCard product={p} idx={idx} selected={selected} setSelected={setSelected}/>)}
                </div>
                }
            </div>
        </div>
    )
}
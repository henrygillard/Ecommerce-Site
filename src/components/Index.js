import { useEffect, useState } from 'react';
import { resolvePath, useParams } from 'react-router';
import CategorySelector from './CategorySelector';
import ProductCard from './ProductCard';
import FilterBy from './FilterBy';





export default function Index({ products, setProducts }) {

const [selected, setSelected] = useState(false);
const [switchview, setswitchview] = useState(false);

const {id} = useParams();

const filtered = products && products.filter(p => p.category === id)
  
 
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
                    
                    <FilterBy />
                    </div>
                    { id === undefined ? 
                    <div className={switchview ? "products-container-view2" : "products-container"}>
                    {products && products.map((p, idx) => <ProductCard product={p} idx={idx} selected={selected} setSelected={setSelected}/>)}
                </div>
                : 
                <div className={switchview ? "products-container-view2" : "products-container"}>
                    {products && filtered.map((p, idx) => <ProductCard product={p} idx={idx} selected={selected} setSelected={setSelected}/>)}
                </div>
                }
            </div>
        </div>
    )
}
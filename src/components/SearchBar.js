import { useState } from "react";

export default function SearchBar({setProducts, products}) {

    const [searchField, setSearchField] = useState("");

    const searchFilter = products && products.filter(p => {
        return(
            p.title.toLowerCase()
            .includes(searchField.toLowerCase()
            )
            )}
            );

    function handleChange(e) {
        e.preventDefault();
        setSearchField(e.target.value);
        setProducts([...searchFilter])
    }
    
    return(
        <div>Search:
            <input type="search" placeholder="Search by Name" onChange={handleChange}/>
        </div>
    )
}



export default function ProductCard({ product, idx, selected, setSelected }) {


    return (
        <div className="product-card">
            <div className="product-image-container">
               <img src={product.image} />
            </div>
            <p>{product.title}</p>
            <h3>${product.price}</h3>
            <p>Product Rating: <span>{product.rating.rate}</span></p>
        </div>
    )
}
function ProductList({ products, onSelect }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" ,justifyContent:"center"}}>
      {products.map(product => (
        <div
          key={product.id}
          onClick={() => onSelect(product)}
          style={{
            width: "200px",
            margin: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            cursor: "pointer"
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
          />
          <h4>{product.title.slice(0, 40)}...</h4>
          <p>₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;


// function ProductDetail({ product, onBack }) {
//   return (
//     <div style={{ marginTop: "20px" }}>
//       <button onClick={onBack}>⬅ Back</button>

//       <h2>{product.title}</h2>
//       <img
//         src={product.image}
//         alt={product.title}
//         style={{ width: "200px", height: "200px", objectFit: "contain" }}
//       />
//       <p><strong>Category:</strong> {product.category}</p>
//       <p><strong>Price:</strong> ₹ {product.price}</p>
//       <p><strong>Description:</strong> {product.description}</p>
//       <p><strong>Rating:</strong> {product.rating.rate} ⭐</p>
//     </div>
//   );
// }

// export default ProductDetail;

import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../favoritesSlice";

function ProductDetail({ product, onBack }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.some((item) => item.id === product.id);

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={onBack}>⬅ Back</button>


    <div>  <div><img
        src={product.image}
        alt={product.title}
        style={{ width: "200px", height: "200px", objectFit: "contain" }}
      /></div>
      <div><h2>{product.title}</h2>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ₹ {product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Rating:</strong> {product.rating.rate} ⭐</p></div></div>


      {!isFavorite ? (
        <button onClick={() => dispatch(addFavorite(product))}>
          ❤️ Add to Favorites
        </button>
      ) : (
        <button onClick={() => dispatch(removeFavorite(product.id))}>
          ❌ Remove from Favorites
        </button>
      )}
    </div>
  );
}

export default ProductDetail;

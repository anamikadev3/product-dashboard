import { useDispatch } from "react-redux";
import { addFavorite } from "../favoritesSlice";

function ProductDetail({ product, onBack }) {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={onBack}>⬅ Back</button>

      <h2>{product.title}</h2>
      <img src={product.image} width="200" />
      <p>{product.description}</p>
      <p>₹ {product.price}</p>

      <button onClick={() => dispatch(addFavorite(product))}>
        ❤️ Add to Favorites
      </button>
    </div>
  );
}

export default ProductDetail;


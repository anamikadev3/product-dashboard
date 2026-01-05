
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../favoritesSlice";
import { useNavigate } from "react-router-dom";

function Favorites() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites);

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h3 className="text-xl font-semibold text-gray-600">
          No favorites added yet ❤️
        </h3>

        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          ⬅ Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">❤️ My Favorites</h2>

        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          ⬅ Back to Home
        </button>
      </div>

      {/* Favorites Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain mb-4"
            />

            <h4 className="font-semibold text-sm mb-2 line-clamp-2">
              {product.title}
            </h4>

            <p className="text-lg font-bold text-green-600 mb-3">
              ₹ {product.price}
            </p>

            <button
              onClick={() => dispatch(removeFavorite(product.id))}
              className="mt-auto px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              ❌ Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;

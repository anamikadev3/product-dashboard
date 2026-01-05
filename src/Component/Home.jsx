
import { useEffect, useState } from "react";
import ProductList from "../Component/ProductList";
import ProductDetail from "../Component/ProductDetail";
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortPrice, setSortPrice] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(timer);
  }, [search]);

  const categories = ["all", ...new Set(products.map(p => p.category))];

  const filteredProducts = products
    .filter(p =>
      p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .filter(p =>
      selectedCategory === "all" ? true : p.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortPrice === "low") return a.price - b.price;
      if (sortPrice === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="bg-white min-h-screen">
      {/* 🔝 Header */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h2 className="text-2xl font-semibold">Shop</h2>

          <button
            onClick={() => navigate("/favorites")}
            className="px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600"
          >
            ❤️ Favorites
          </button>
        </div>
      </div>

      {/* 🔍 Filters */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-md w-full md:w-64 focus:outline-none"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-4 py-2 rounded-md"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>

        <select
          value={sortPrice}
          onChange={(e) => setSortPrice(e.target.value)}
          className="border px-4 py-2 rounded-md"
        >
          <option value="">Sort by price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {/* 🛍 Products */}
      <div className="max-w-7xl mx-auto px-4 pb-10">
        {!selectedProduct ? (
          <ProductList
            products={filteredProducts}
            onSelect={setSelectedProduct}
          />
        ) : (
          <ProductDetail
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;

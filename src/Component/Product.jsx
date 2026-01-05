import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../productsSlice";
import { setSearch, setCategory, setSortPrice } from "../filtersSlice";
import { selectFilteredProducts } from "../productsSelectors";
import ProductList from "../Component/ProductList";
import ProductDetail from "./ProductDetails";

function Product() {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = useSelector(selectFilteredProducts);
  const allProducts = useSelector(state => state.products.items);

  const [search, setSearchText] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearch(search));
    }, 500);
    return () => clearTimeout(timer);
  }, [search, dispatch]);

  const categories = ["all", ...new Set(allProducts.map(p => p.category))];

  return (
    <>
      <input
        placeholder="Search..."
        onChange={e => setSearchText(e.target.value)}
      />

      <select onChange={e => dispatch(setCategory(e.target.value))}>
        {categories.map(c => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <select onChange={e => dispatch(setSortPrice(e.target.value))}>
        <option value="">Sort</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

    
{!selectedProduct ? (
  <ProductList
    products={products}
    onSelect={setSelectedProduct}
  />
) : (
  <ProductDetail
    product={selectedProduct}
    onBack={() => setSelectedProduct(null)}
  />
)}
    </>
  );
}

export default Product;

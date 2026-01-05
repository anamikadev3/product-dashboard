import { useNavigate } from "react-router-dom";

function Cart({ cart }) {

    const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
      <h3>Cart 🛒</h3>
      <p>Items: {cart.length}</p>
      <p>Total: ₹ {total.toFixed(2)}</p>

      <button disabled={cart.length === 0} onClick={()=>navigate("https://counter-app-using-redux-toolkit-one.vercel.app/")}>
        Checkout333
      </button>
    </div>
  );
}

export default Cart;

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) return null; // Ensure context exists

  const { cart, removeFromCart } = cartContext;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Go to products</Link></p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ borderBottom: "1px solid #ddd", padding: "10px", display: "flex", justifyContent: "space-between" }}>
              <span>{item.name} (x{item.quantity}) - ${item.price * item.quantity}</span>
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{ padding: "5px 10px", background: "red", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
              >
                Remove
              </button>
            </div>
          ))}
          <h3>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
          <button style={{ padding: "10px 20px", background: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
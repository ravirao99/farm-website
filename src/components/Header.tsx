import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Header: React.FC = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) return null;

  const { cart } = cartContext;
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header style={{ background: "green", color: "white", padding: "10px", display: "flex", justifyContent: "space-between" }}>
      <h1>Farm Website</h1>
      <nav>
        <Link to="/" style={{ color: "white", marginRight: "10px" }}>Home</Link>
        <Link to="/products" style={{ color: "white", marginRight: "10px" }}>Products</Link>
        <Link to="/cart" style={{ color: "white", position: "relative" }}>
          Cart ({cartCount})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header style={{ background: "green", color: "white", padding: "10px", display: "flex", justifyContent: "space-between" }}>
      <h1>Raavi Organic Farm</h1>
      <nav>
        <Link to="/" style={{ color: "white", marginRight: "10px" }}>Home</Link>
        <Link to="/products" style={{ color: "white" }}>Products</Link>
      </nav>
    </header>
  );
};

export default Header;
import React, { useContext } from "react";
import { Product } from "../types/Product";
import { CartContext } from "../context/CartContext";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const cartContext = useContext(CartContext);
  if (!cartContext) return null; // Ensure context exists
  const { addToCart } = cartContext;

  return (
    <div style={{
      border: "1px solid #ddd", padding: "10px", borderRadius: "8px", textAlign: "center", width: "200px"
    }}>
      <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price} per kg</p>
      <button 
        onClick={() => addToCart(product)}
        style={{ padding: "5px 10px", background: "green", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
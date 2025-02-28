import React from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Products: React.FC = () => {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", padding: "20px" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
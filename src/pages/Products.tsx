import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  // Get unique categories from products
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  // Filter products based on search and category
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === "all" || product.category === category)
  );

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Our Farm Produce</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", marginRight: "10px", width: "250px" }}
      />

      {/* Category Filter Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "8px" }}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      {/* Product Listing */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Products;